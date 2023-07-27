import { Button, Space } from "antd";
import React from "react"

// forwardRef 用于父组件想操作子组件的dom元素
export const ForwardRefPage = () => {
  const btnRef = React.createRef();
  const testRef = React.useRef();

  React.useEffect(() => {
    console.log(btnRef.current);
    console.log(testRef.current);
  }, [])

  return (
    <div className="page-container">
      <div>测试结果: ref 也可以起别名在组件间进行传递, 当传递ref时, 要配合forwardRef使用</div>
      <ForwardInner ref={btnRef} testRef={testRef} />
    </div>
  )
}

const ForwardInner = React.forwardRef((props: any, ref: any) => {
  return (
    <Space>
      <Button ref={ref}>hello</Button>
      <Button ref={props?.testRef}>hello test</Button>
    </Space>
  )
})