import { useState } from 'react';
import './index.scss';

export const SeperateBall = () => {
    const [cls, SetCls] = useState('');

    const addCls = () => {
        SetCls('separate');
        setTimeout(() => {
            SetCls('merge');
        }, 2000);
    }

    return (
        <section className="seperate-ball animation-box" onDoubleClick={addCls}>
            <div className={'island ' + cls}></div>
            <div className='btn'>
                double click me
            </div>
        </section>
    )
}