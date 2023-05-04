import { BLOCKS } from '../../constants';
import { Col, Row } from 'antd';
import './index.scss';

export const StudioMain = () => { 
  const onDragOver = (ev: any) => { 
    ev.preventDefault();
  }
  const onDrop = (ev: any) => { 
    ev.preventDefault();
    console.log('onDrop', ev);
  }
  return (
    <Row wrap={false} className='studio-main'>
      <Col flex='150px' className='left'>
        {BLOCKS.map(block => (
          <div key={block.name} className='block' draggable>
            {block.name}
          </div>
        ))}
      </Col>
      <Col flex='auto' className='main' onDrop={ onDrop } onDragOver={ onDragOver }>
      </Col>
      <Col flex='150px' className='right'>  </Col>
    </Row>
  )
}