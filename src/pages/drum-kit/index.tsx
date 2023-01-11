import './index.scss';
import drumKitBg from '../../assets/images/drum-bg.jpg';
import { Space } from 'antd';
import { audios } from '../../assets';
import { useEffect } from 'react';


export const DrumkitPage = () => {
    const drumList = [
        {
            key: 'a',
            name: 'clap'
        },
        {
            key: 's',
            name: 'hihat'
        },
        {
            key: 'd',
            name: 'kick'
        },
        {
            key: 'f',
            name: 'openhat'
        },
        {
            key: 'g',
            name: 'boom'
        },
        {
            key: 'h',
            name: 'ride'
        },
        {
            key: 'j',
            name: 'snare'
        },
        {
            key: 'k',
            name: 'tom'
        },
        {
            key: 'l',
            name: 'tink'
        },
    ];

    const onKeyDown = (e: any) => {
        if ('asdfghjkl'.includes(e.key)) {
            const el = document.getElementById(`drum-box-${e.key}`) as any;
            el?.classList.add('playing');
            const audioEl = el?.getElementsByTagName('audio')[0] as any;
            audioEl.currentTime = 0;
            audioEl.play();
            setTimeout(() => {
                el?.classList.remove('playing');
            }, 100)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return (() => {
            document.removeEventListener('keydown', onKeyDown);
        })
    }, []);
    return (
        <div className='drum-kit-page' style={{
            background: `url(${drumKitBg}) bottom center`,
            backgroundSize: 'no-repeat',
            height: '100vh'
        }}>
            <Space direction='horizontal' size={15}>
            {drumList.map(drum => (
                <div className='drum-box' id={`drum-box-${drum.key}`}>
                    <Space direction='vertical' size={0} align='center' style={{width: '100%'}}>
                        <div className='key'>
                            {drum.key.toUpperCase()}
                        </div> 
                        <div className='name'>
                            {drum.name.toUpperCase()}
                        </div>
                        <audio src={audios[drum.name]}></audio>
                    </Space>
                </div>
           ))}
            </Space>
            
        </div>
    )

}