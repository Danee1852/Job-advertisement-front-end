import MainBackground from "../images/mainbackground.png"
import './MainCard.css';

export default function MainCard () {

    return (
        <section className="background">
            <img src={MainBackground} className="background--image" />
            <div className="mainCard">
                <p className="card--motivate--text">„Whatever you are, be a good one.” - Abraham Lincoln</p>
                <h3 className="card--advertisement--title">Alredy recruiting</h3>
            </div>
        </section>
        
    )
}