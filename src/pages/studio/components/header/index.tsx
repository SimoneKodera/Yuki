import { Space } from 'antd';
import { TOOLS } from '../../constants';
import './index.scss';

export const StudioHeader = () => {
  return (
    <div className="studio-header">
      <Space className='tools-wrapper'>
        {TOOLS.map(tool => (
          <div className='tool' key={tool.name}>
            <div>{tool.name}</div>
          </div>
        ))}
      </Space>
    </div>
  ) 
}