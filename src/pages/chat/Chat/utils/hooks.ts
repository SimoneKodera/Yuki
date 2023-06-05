import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useUpdate } from "ahooks";
import { useRef } from "react";
import { EChatStatus } from "../models";
import { SYSTEM_MESSAGE } from "../constants";
import { flatten } from "lodash";



export const useStreamMessage = () => {
  const streamMsgRef = useRef('');
  const chatStatusRef = useRef(EChatStatus.STAND_BY);
  const chatHistoryRef = useRef([]);
  const forceUpdate = useUpdate();
  const abortControllerRef = useRef<AbortController | null>(null);

  const concatStream = (msg: string) => {
    streamMsgRef.current = streamMsgRef.current + msg;
    forceUpdate();
  }

  const clearStreamMsg = () => {
    streamMsgRef.current = '';
    forceUpdate();
  }

  const stopStream = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    onStreamDone();
  }

  const handleHistory = () => {
    const temp = chatHistoryRef.current.map((history) => {
      const { user, assistant } = history;
      return [{ role: 'user', content: user }, { role: 'assistant', content: assistant }];
    });
    return flatten(temp);
  }
  

  const onStreamDone = () => {
    // @ts-ignore;
    chatHistoryRef.current[chatHistoryRef.current.length - 1].assistant = streamMsgRef.current;
    streamMsgRef.current = '';
    chatStatusRef.current = EChatStatus.STAND_BY;
    forceUpdate();
  }

  const onConversation = (question: string) => {
    chatStatusRef.current = EChatStatus.WATING_RESPONSE;
    forceUpdate();

    // 创建 AbortController 实例
    abortControllerRef.current = new AbortController();

    fetchEventSource('https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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',
        },
        method: 'POST',
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          stream: true,
          messages: [
            SYSTEM_MESSAGE,
            ...handleHistory(),
            {
              role: 'user',
              content: question
            },
          ],
          temperature: 1
        }),
        signal: abortControllerRef.current.signal,

        onmessage: (ev: any) => {
          if (chatStatusRef.current !== EChatStatus.GENERATING) {
            chatStatusRef.current = EChatStatus.GENERATING;
            forceUpdate();
          };
          console.log('%c [ ev ]-9', 'font-size:13px; background:pink; color:#bf2c9f;', ev);
          try {
            if (ev.data === '[DONE]') {
              onStreamDone();
              return;
            }

            const data = JSON.parse(ev.data);
            const delta = data.choices[0].delta;
            // 续写内容
            if (delta?.content) {
              concatStream(delta?.content);
            }
          } catch (e) {
            console.log(e);
          }
        }
    })
  }

  return {
    streamMsgRef,
    concatStream,
    clearStreamMsg,
    onConversation,
    chatStatusRef,
    chatHistoryRef,
    stopStream,
    onStreamDone
  }
}
