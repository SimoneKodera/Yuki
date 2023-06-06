import { EChatStatus } from '../../models';
import './index.scss';
import { useUpdate } from 'ahooks';
import {RedoOutlined, SendOutlined, StopOutlined} from '@ant-design/icons';
import { useState } from 'react';
import { message } from 'antd';


interface IProps {
  onConversation: (value: string) => void;
  chatStatusRef: any;
  chatHistoryRef: any;
  stopStream: () => void;
}

export const ChatFooter = (props: IProps) => {
  const { onConversation, chatStatusRef, chatHistoryRef, stopStream } = props;
  const forceUpdate = useUpdate();
  const [value, setValue] = useState('');

  const send = () => {
    if (chatStatusRef.current !== EChatStatus.STAND_BY) {
      message.info('Please wait for the current response to finish generating');
      return;
    }
    onConversation(value);
    chatHistoryRef.current.push({
      user: value
    });
    forceUpdate();
    setValue('');
  }

  return (
    <div className='chat-footer'>
      {/* <div className='regen-handler' hidden={chatStatus !== EChatStatus.STAND_BY}>
        <RedoOutlined rev={undefined} style={{paddingRight: '4px'}}/>
        Regenerate response </div> */}
      <div
        className='stop-handler'
        hidden={chatStatusRef.current !== EChatStatus.GENERATING}
        onClick={() => { 
          stopStream();
        }}> <StopOutlined rev={ undefined } style={{paddingRight: '4px'}}/>Stop generating </div>
      <div className='textarea-wrapper'>
        <textarea
          placeholder='Send a message'
          value={value}
          onInput={(e: any) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && !e.shiftKey) send();
          }}
        />
        <SendOutlined rev={undefined}
          className='send-icon'
          onClick={send}
        />
      </div>
    </div>
  )
}