/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { TodoListPage } from './index';

// test('存在名为Simone的元素', () => {
//   const { getByText } = render(<TodoListPage></TodoListPage>);
//   // eslint-disable-next-line testing-library/prefer-screen-queries
//   const el = getByText(/simone/i);
//   expect(el).toBeInTheDocument();
// })

let wrapper: RenderResult;

// 运行每一个测试用例前先渲染组件
beforeEach(() => {
  wrapper = render(<TodoListPage />);
});

// 为测试一个大的测试单元添加一个描述
describe('Should render App component correctly', () => {
  // 每一个 test 就是一个测试用例, 别名 it

  // 初始化文本内容为 "Hello World!"
  test('Should render "Hello World!" correctly', () => {
    // getByTestId: 通过属性 data-testid 来获取对应的  DOM
    // 这里我们获取到的是上面 HelloWorld 组件中的 div 标签
    const app = wrapper.getByTestId('containerr');
    expect(app).toBeInTheDocument();
    // // 判断获取到的标签是否是 div
    // expect(app.tagName).toEqual('DIV');
    // // 判断 div 标签的 text 是否匹配正则 /world/i
    // expect(app.textContent).toMatch(/world/i);
  });

  // // 点击后文本内容为 "Hello Jack!"
  // test('Should render "Hello Jack!" correctly after click', () => {
  //   const app = wrapper.getByTestId('container');
  //   // fireEvent: 模拟点击事件
  //   fireEvent.click(app);
  //   expect(app.textContent).toMatch(/jack/i);
  // });
});
