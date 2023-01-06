import MainBackground from "../images/mainbackground.png"
import './MainCard.css';
import CompanyMini from "./CompanyMini"
import Navbar from './Navbar'
import joboffers from "../JobOffersData"

export default function MainCard () {
    const jobList = joboffers.map(joboffer => {
        return (
            joboffer.isactive? 
                <li className="joblist-item" key={joboffer.id}>
                    <CompanyMini 
                    companyname={joboffer.companyname}
                    rating={joboffer.rating}
                    location={joboffer.location}
                    />
                </li> : ""
        )
    })

    return (
        
        <section className="background">
            <Navbar />
            <img src={MainBackground} className="background--image" />
            <div className="mainCard">
                <p className="card--motivate--text">„Whatever you are, be a good one.” - Abraham Lincoln</p>
                <h3 className="card--advertisement--title">Alredy recruiting</h3>
            </div>
            <ul className="joblist-wrapper">
                {jobList}
            </ul>
            
        </section>
        
    )
}