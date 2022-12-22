import { SeperateBall, GrooveTab, Parabola } from "./components"
import './index.scss'

export const AnimationPage = () => {
    return (
        <div className="page-container animation-page">
            <SeperateBall />
            <GrooveTab />
            <Parabola />
        </div>
    )
}