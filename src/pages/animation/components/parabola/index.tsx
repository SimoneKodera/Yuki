import './index.scss'

export const Parabola = () => {

    const throwBall = () => {
        console.log(1);
    }
    
    return (
        <section className="animation-box parabola">
            <div className="ball" onClick={throwBall}></div>
        </section>
    )
}