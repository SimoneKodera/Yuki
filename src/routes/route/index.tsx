import { Route, Routes } from "react-router"

import { TodoListPage } from "../../pages"

export const RoutePage = () => {
    return (
        <Routes>
            <Route path='/todo-list' element={<TodoListPage/>}></Route>
            <Route path='/home' element={<h1>hello home</h1>}></Route>
        </Routes>
    )
}