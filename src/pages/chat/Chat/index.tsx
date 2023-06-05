import { ChatWindow, ChatFooter } from "./components";
import { useStreamMessage } from "./utils/hooks";


export const Chat = () => { 
  const { streamMsgRef, onConversation, chatStatusRef, chatHistoryRef, stopStream } = useStreamMessage();

  return (
    <div style={{
      position: 'relative',
      height: '100%'
    }}>
      <ChatWindow
        streamMsg={streamMsgRef.current}
        chatHistoryRef={chatHistoryRef}
        chatStatus={chatStatusRef.current}
      />
      <ChatFooter
        onConversation={onConversation}
        chatStatusRef={chatStatusRef}
        chatHistoryRef={chatHistoryRef}
        stopStream={stopStream}
      />
    </div>
  )
}