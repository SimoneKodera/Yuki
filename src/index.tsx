import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
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
  </HashRouter>
);

