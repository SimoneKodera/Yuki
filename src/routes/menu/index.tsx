import { Menu } from "antd"
import { useNavigate } from "react-router"

const routes = [
    {
        label: 'Drum Kit',
        key: 'drum-kit'
    },
    {
        label: 'Win 11',
        key: 'win11'
    },
    {
        label: 'Animation',
        key: 'animation'
    },
    {
        label: 'Download',
        key: 'download' 
    },
    {
        label: 'Echarts',
        key: 'echarts',
        children: [
            {
                label: 'area',
                key: 'echarts/area'
            }
        ]
    }
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