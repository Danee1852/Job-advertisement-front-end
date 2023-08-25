import MainBackground from "../../images/mainbackground.png"
import './MainCard.css';
import CompanyMini from "../CompanyMini/CompanyMini"
import Navbar from '../Navbar/Navbar'

export default function MainCard ({listOfJobs}) {

    
    const jobList = listOfJobs && listOfJobs.map(job => {
        return (
            job.isactive? 
            
                <li className="joblist-item" key={job.id}>
                    <CompanyMini 
                    company={job.company}
                    rating={job.rating}
                    location={job.location}
                    />
                </li> : ""
        )
    })
    let limitedArray = Array.isArray(jobList) ? jobList.slice(0,5) : [];


    return (
        
        <section className="background">
            <Navbar />
            <img src={MainBackground} className="background--image" alt="backgroundImage"/>
            <div className="mainCard">
                <p className="card--motivate--text">„Whatever you are, be a good one.” - Abraham Lincoln</p>
                <h3 className="card--advertisement--title">Alredy recruiting</h3>
            </div>
            <ul className="joblist-wrapper">
                {limitedArray}
            </ul>
            
        </section>
        
    )
}