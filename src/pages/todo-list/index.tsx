import { Button, Input } from "antd";
import { useRef, useState } from "react";
import './index.scss';

interface List {
        text: string;
        key: number;
        done: boolean;
    }

export const TodoListPage = () => {
    const [list, setList] = useState<List[]>([]);

    const onEnter = (e: any) => {
        const { target: { value } } = e;
        const curTask = {
            done: false,
            text: value,
            key: Date.now()
        }
        setList([...list, curTask]);
    }


    return (
        <div className="page-container todo-list-page">
            {/* left */}
            <section className="section-left">
                <Input></Input>
            </section>
            {/* right */}
            <section className="section-right">
                <nav className="ipt-wrapper">
                    <Input placeholder="please enter" onPressEnter={onEnter} />
                </nav>

                <main className="notes-wrapper">
                    <ul>
                        {list.map(li => (
                            <li key={li?.key} >
                                <div className="dot"></div>
                                <div className="text">{li?.text}</div>
                            </li>
                        ))}
                    </ul>
                </main>
            </section>
            
            
        </div>
    )
}