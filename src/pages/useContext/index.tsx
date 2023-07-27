import React from 'react';
import { Component1, Component2, Component2A, Component3 } from './components';
import { Button } from 'antd';

export const TitleContext = React.createContext({
  title: '',
  user: {}
});

export const UseContextPage = () => {
  const [title, setTitle] = React.useState('default title');
  const [user, setUser] = React.useState({});
  
  return (
    <div className="page-container">
      <div>可以让子组件共享父组件提供的状态, 避免了层层传递的麻烦</div>
      <Button onClick={() => {
        // setTitle(Math.random().toString());
        setUser({ name: Math.random().toString() });
      }}>change title</Button>

      <TitleContext.Provider value={{title, user}}>
        <Component1/>
        <Component2>
          <Component2A/>
        </Component2>
        <Component3/>
      </TitleContext.Provider>
    </div>
  )
}

