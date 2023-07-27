import React, {cloneElement} from "react";
import { Button, Col } from "antd";
import { Children, ReactNode, useEffect } from "react"


export const ChildrenPage = () => {
  return (
    <div>
      <HocComponent>
        <div>1</div>
        <div>2</div>
        <Col>3</Col>
        <div>4</div>
        <Button>button</Button>
      </HocComponent>
    </div>
  )
}

const HocComponent = (props: { children?: ReactNode }) => {
  
  // JSX 的本质是React.CreateElement的语法糖, 最终返回的是React元素对象
  useEffect(() => {
    console.log(props.children);

    console.log('Children:', Children)

    // forEach遍历子元素;
    Children.forEach(props.children, (child) => {
      // console.log('child:', child)
    });

    // ⭐️ map遍历子元素 示例:找到子元素中的Button元素,并将其替换为a元素;
    Children.map(props.children, (child: any) => {
      // console.log('child:', child);
    });

    // ⭐️ 获取子元素的数量;
    console.log('Children.count(props.children):', Children.count(props.children))

    // toArray 将子元素转换为标准数组;
    console.log('Children.toArray(props.children):', Children.toArray(props.children))

    // 只有一个子元素时返回该子元素，否则返会报错;
    // console.log('Children.only(props.children):', Children.only(props.children))
  }, []);

  return (
    <div className="page-container">
      <div>示例1: map遍历子元素, 给Button元素添加点击事件;</div>
      {
        Children.map(props.children, (child: any) => {
          // 居然可以这么写?
          if (child?.type === Button) {
            return cloneElement(child, {
              onClick: () => {
                console.log('clicked!');
              },
              type: 'link'
            });
          }

          if (child?.type === Col) {
            return child;
          }
          return null;
        })
      }

      <div>示例2: 验证当前的children: map不会改变原始的子元素; </div>
      {props.children}

    </div>
  )
}