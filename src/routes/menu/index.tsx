import { Menu } from "antd"
import { useNavigate } from "react-router"

const routes = [
    {
        label: 'Todo List',
        key: 'todo-list'
    },
    {
        label: 'Home',
        key: 'home'
    },
    {
        label: 'About',
        key: 'about' 
    },
]

export const SideMenu = () => {
    const navigate = useNavigate();

    const onMenuClick = (e: any) => {
        navigate(e?.key);
    }

    return (
        <Menu
            items={routes}
            style={{ width: '100%', height: '100%' }}
            mode='inline'
            onClick={onMenuClick}
        />
    )
}