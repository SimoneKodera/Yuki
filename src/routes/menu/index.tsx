import { Menu } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router";
import Hamburger from 'hamburger-react'
import { ROUTES } from "../route";

const routes = [
    {
        label: 'All',
        key: ROUTES.All
    },
    {
        label: 'Deleted',
        key: ROUTES.Deleted
    },
    {
        label: 'Studio',
        key: ROUTES.Studio
    },
    {
        label: 'Chat',
        key: ROUTES.Chat
    },
    {
        label: 'Children',
        key: ROUTES.Children
    },
    {
        label: 'forwardRef',
        key: ROUTES.ForwardRef
    },
    {
        label: 'useContext',
        key: ROUTES.UseContext
    },
    {
        label: 'dataGuard',
        key: ROUTES.DataGuard
    },
]

export const useMenuHamburger = () => { 
    const [isOpen, setOpen] = useState(true);
    const render = (
        <div style={{position: 'absolute', zIndex: 999}}>
            <Hamburger size={22} rounded toggled={isOpen} toggle={setOpen} />
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