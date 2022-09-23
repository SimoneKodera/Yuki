import './index.scss';
import { useSearchSpace, useTaskSpace } from './components';


export const TodoListPage = () => {
    const { render: taskRender } = useTaskSpace();
    const { render: searchRender } = useSearchSpace();



    return (
        <div className="page-container todo-list-page">
            {/* left */}
            <section className="section-left">
                {searchRender}
            </section>

            {/* right */}
            <section className="section-right">
                {taskRender}
            </section>
        </div>
    )
}