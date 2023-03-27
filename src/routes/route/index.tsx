import { Route, Routes } from "react-router"

import { AnimationPage} from "../../pages"

export const RoutePage = () => {
    return (
        <Routes>
            <Route path='/animation' element={<AnimationPage />}></Route>
        </Routes>
    )
}