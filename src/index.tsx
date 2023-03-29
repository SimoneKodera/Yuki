import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* 参考 SeedToken */}
    <ConfigProvider theme={{
      token: {
        colorPrimary: 'pink',
        colorBgTextHover: '#ffc0cb3d'
        // TODO: 样式优化
      }
    }}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);

