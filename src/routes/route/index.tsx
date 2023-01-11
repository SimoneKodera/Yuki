import { Route, Routes } from "react-router"

import { DrumkitPage, AnimationPage, DownloadPage, EchartsPage } from "../../pages"

export const RoutePage = () => {
    return (
        <Routes>
            <Route path='/drum-kit' element={<DrumkitPage/>}></Route>
            <Route path='/animation' element={<AnimationPage />}></Route>
            <Route path='/download' element={<DownloadPage />}></Route>
            <Route path='/echarts/area' element={<EchartsPage />}></Route>
        </Routes>
    )
}