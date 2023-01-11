import { useRef, useState } from 'react';
import './index.scss';
import cs from 'classnames';
// 音频的导入: require 或 在audio中声明 audio.d.ts 文件
import tink from '../../../../audio/tink.wav';

export const GrooveTab = () => {
    const [tabIndex, setTabIndex] = useState(1);

    return (
        <section className="animation-box groove-tab">
            <audio src={tink} id='tink'></audio>
            <div className="tab-wrapper">
                {[0,0,0].map((v, idx) => (
                    <div
                        className={cs({
                        'tab': true,
                        'tab-active': idx === tabIndex,
                        'tab-last': idx === tabIndex - 1,
                        'tab-next': idx === tabIndex + 1,
                        })}
                        onClick={() => {
                            setTabIndex(idx);
                            const tinkEl = document.getElementById('tink') as any;
                            tinkEl.play();
                        }}
                    >
                        <div className="tab-inner"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}