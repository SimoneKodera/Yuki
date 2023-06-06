import { EChatStatus } from '../../models';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import User from '../../assets/user.svg';
import Assistant from '../../assets/assistant.svg';
import './index.scss';
import { useEffect } from 'react';

interface IProps {
  streamMsg: string;
  chatHistoryRef: any;
  chatStatus: EChatStatus;
}

export const ChatWindow = (props: IProps) => {
  const { streamMsg, chatHistoryRef, chatStatus } = props;

  const Markdown = (props: { content: string }) => {
    const { content } = props;
    return (
      <ReactMarkdown
        remarkPlugins={[[gfm, { singleTilde: false }]]}
        components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            // eslint-disable-next-line react/no-children-prop
            <SyntaxHighlighter {...(props as any)} children={String(children).replace(/\n$/, '')} language={match[1]} PreTag='div' />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        }
      }}>{ content }</ReactMarkdown>  
    )
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatStatus])

  const scrollToBottom = () => { 
    const chatWindow = document.querySelector('.chat-window');
    if (chatWindow) { 
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }
 
  return ( 
    <div className='chat-window'>
      {chatHistoryRef.current.map((item: any, index: number) => { 
          return (
            <div key={ index }>
              <div className='user'>
                <div className="container">
                  <img className='avatar' src={User} alt='user'/>
                  <div>{item.user}</div>

                </div>
              </div>
              <pre className='assistant' hidden={!item?.assistant}>
                <div className="container">
                  <img className='avatar' src={Assistant} alt='assistant'/>
                  <div><Markdown content={ item.assistant } /></div>
                </div>
              </pre>
            </div>
          );
      })}

      <div className='assistant' hidden={chatStatus === EChatStatus.STAND_BY} >
        <div className="container">
          <img className='avatar' src={Assistant}  />
          <div><Markdown content={ streamMsg || '...'} /></div>
        </div>
      </div>

      <div style={{height: '130px'}}></div>
    </div>
  )
}