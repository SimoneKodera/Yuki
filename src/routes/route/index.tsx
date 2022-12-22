import { Route, Routes } from "react-router"

import { TodoListPage, AnimationPage, DownloadPage, EchartsPage } from "../../pages"

export const RoutePage = () => {
    return (
        <Routes>
            <Route path='/todo-list' element={<TodoListPage/>}></Route>
            <Route path='/animation' element={<AnimationPage />}></Route>
            <Route path='/download' element={<DownloadPage />}></Route>
            <Route path='/echarts/area' element={<EchartsPage />}></Route>
        </Routes>
    )
}