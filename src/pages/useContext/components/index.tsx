import { useContext, useEffect } from "react";
import { TitleContext } from "..";

export const Component1 = () => {
  const {title, user} = useContext(TitleContext);

  useEffect(() => {
    console.log('component1:', title);
    console.log('component1:', user);
  }, [title, user])

  return (
    <div>Component1</div>
  )
}

export const Component2 = (props: any) => {
  return (
    <div>
      <div>Component2</div>
      { props.children }
    </div>
  )
}

export const Component2A = () => {
  const {title} = useContext(TitleContext);

  useEffect(() => {
    console.log('component2A:', title)
  }, []);

  return (
    <div>Component2A</div>
  )
}

export const Component3 = () => {
  return (
    <div>Component3</div>
  )
}