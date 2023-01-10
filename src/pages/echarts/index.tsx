import { useEffect, useState } from 'react';
import { Area1, Area2 } from './components';
import './index.scss';

export const EchartsPage = () => {
    const [name, setName] = useState('1');
    useEffect(() => {
        console.log('Main: useEffect', name);
        return () => {
            console.log('Main: return');
        }
    },[name])
    return (
        <div className="page-container echarts-page">
            <button onClick={() => {
                setName(Math.random().toString());
            }}> change </button>
            <Area1 />
            <Area2 />
        </div>
    )
}