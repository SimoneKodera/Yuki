import { AllPage, MainPage } from "../../pages";
import { Route, Routes } from "react-router-dom";


export const ROUTES = {
    Login: '/login',
    Main: '/main',
    All: '/main/all',
    Deleted: '/main/deleted'
}

export const RoutePage = () => {
    return (
        <Routes>
            <Route path={ROUTES.Login} element={<div >log in</div>}></Route>
            <Route path='/main/*' element={<MainPage />}></Route>
        </Routes>
    )
}

export const MainRoutePage = () => { 
    return (
        <Routes>
            <Route path='all' element={<AllPage />}></Route>
            <Route path='deleted' element={<div >deleted</div>}></Route>
        </Routes>
    )
}