import { useRequest } from "ahooks";
import { Input, Spin } from "antd"
import { TodoService } from "../../service";


interface List {
    name: string;
    id: number;
    done: boolean;
}

export const useTaskSpace = () => {
    const { data: list, loading, run } = useRequest((params) => TodoService.addTask(params), {
        manual: true
    })

    const onEnter = (e: any) => {
        const { target: { value } } = e;
        run(value)
    }

    return {
        render: (
        <>
            <nav>
                <Input placeholder="please enter" onPressEnter={onEnter} />
            </nav>

            <main className="notes-wrapper">
                <Spin spinning={loading}>
                    <ul>
                        {list?.map((li: List) => (
                            <li key={li?.id} >
                                <div className="dot"></div>
                                <div className="text">{li?.name}</div>
                            </li>
                        ))}
                    </ul>
                </Spin>
            </main>
        </>
    )}
}