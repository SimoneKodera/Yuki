import './index.scss';
import { useSearchSpace, useTaskSpace } from './components';
import { useRef } from 'react';
import { Button } from 'antd';

interface IDemo {
    obj: {
        fun: any;
    };
};

export const TodoListPage = () => {
    const { render: taskRender } = useTaskSpace();
    const { render: searchRender } = useSearchSpace();
    const loading = useRef({ name: 'loading' });
    
   

    return (
        <div>
            
        </div>
    )

}