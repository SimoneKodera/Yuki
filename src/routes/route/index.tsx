import { AllPage, MainPage, DeletedPage, TestPage } from "../../pages";
import { Route, Routes } from "react-router-dom";


export const ROUTES = {
    Login: '/login',
    Main: '/main',
    All: '/main/all',
    Deleted: '/main/deleted',
    Test: '/test'
}

export const RoutePage = () => {
    return (
        <Routes>
            <Route path={ROUTES.Login} element={<div >log in</div>}></Route>
            <Route path={ROUTES.Test} element={<TestPage />}></Route>
            <Route path='/main/*' element={<MainPage />}></Route>
        </Routes>
    )
}

export const MainRoutePage = () => { 
    return (
        <Routes>
            <Route path='all' element={<AllPage />}></Route>
            <Route path='deleted' element={<DeletedPage />}></Route>
        </Routes>
    )
}