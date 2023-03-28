import { Menu } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router";
import Hamburger from 'hamburger-react'
import { ROUTES } from "../route";

const routes = [
    {
        label: '全部单词',
        key: ROUTES.All
    },
    {
        label: '已删除',
        key: ROUTES.Deleted
    }
]

export const useMenuHamburger = () => { 
    const [isOpen, setOpen] = useState(true);
    const render = (
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    );
    return {
        render,
        isOpen,
        setOpen
    }
}

export const SideMenu = (props: {
    close: () => void;
}) => {
    const navigate = useNavigate();

    return (
        <Menu
            items={routes}
            style={{ width: '100%', height: '100%' }}
            onClick={(e) => {
                navigate(e?.key);
                props?.close();
            }}
        />
    )
}