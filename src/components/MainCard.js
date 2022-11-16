import MainBackground from "../images/mainbackground.png"
import './MainCard.css';
import CompanyMini from "./CompanyMini"
import Navbar from './Navbar'
export default function MainCard () {

    return (
        
        <section className="background">
            <Navbar />
            <img src={MainBackground} className="background--image" />
            <div className="mainCard">
                <p className="card--motivate--text">„Whatever you are, be a good one.” - Abraham Lincoln</p>
                <h3 className="card--advertisement--title">Alredy recruiting</h3>
            </div>
            <CompanyMini />
        </section>
        
    )
}