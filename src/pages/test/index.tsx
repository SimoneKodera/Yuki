import React, { useDeferredValue, useState } from "react";


const Component1 = () => { 
  return (
    <div style ={{height: '50px', background: 'pink'}}>对照组</div>
  )
}

const Component2 = () => { 
  return (
    <div style ={{height: '50px', background: 'lightblue'}}>对照组</div>
  )
}

const Component3 = () => { 
  const [text, setText] = useState("hello");

  return (
    <div style={{ height: '50px', background: 'yellow' }}>
      <div>Test 1: 一个单独的组件, 没有使用父组件的状态</div>
      <div onClick={() => setText(Math.random().toString())}> {text} </div>
    </div>
  )
}

const useComponent4 = () => { 
  const [text, setText] = useState("hello");
  return {
    render: (
      <div style={{ height: '50px', background: 'red' }}>
      <div>Test 2: 子组件, 没有使用父组件的状态</div>
      <div onClick={() => setText(Math.random().toString())}> {text} </div>
    </div>
  )}
}

const Component5 = (props: any) => { 
  const { text, setText } = props;
  const [text2, setText2] = useState("hello2");
  return (
    <div style={{ height: '100px', background: 'yellow' }}>
      <div>Test 3: 子组件, 使用父组件的状态模拟弹窗调用的场景</div>
      <div onClick={() => setText(Math.random().toString())}> {text} </div>
      <div onClick={() => setText2(Math.random().toString())}> {text2} </div>
    </div>
  )
}

export const TestPage = () => { 
  const [text, setText] = useState("hello");

  const { render } = useComponent4();

  return (
    <div style={{padding: '10px'}}>
      <Component1/>
      <Component2/>
      <Component3 />
      {render}
      <Component5 text={text} setText={setText} />
      <div>
        总结:
        1. 组件
        当内部的状态改变时, 会重新渲染整个组件。不会影响其他组件的渲染
        2. hooks组件
        当内部的状态改变时, 会导致父组件重新渲染

        因此, 当一个组件必须使用父组件的状态时, hooks不会带来额外的性能开销;
        当组件必须使用到父组件的状态时, 可以考虑将组件写成hooks的形式。
      </div>
    </div>
  )
}