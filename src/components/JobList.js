//import JobData from "./jobsData"
import {data} from "./jobsData"
import "./JobList.css"
import Navbar from "./Navbar"

export default function JobList() {
    
    const jobElements = data.map(job => { 

        return (
            
            <div className="jobWrapper">
                <div className="companyLogo">
                    <img className = "company_logo" src = {job.logo}/>
                </div>
                <div classname="mainInfo">
                    <h3 className="positionName">{job.position}</h3>
                    <h2 className="companyName">{job.company}</h2>
                    <div className="companyDetails">
                       <span> {job.location} ‣ </span>
                       <span> {job.postedAt} ‣ </span>
                        {job.contract.map((contractName) => {
                            
                        return (   
                                 <span>{contractName} </span> 
                        )
                       })}
                    
                    </div>
                </div>
                <div className="jobTechStack">
                    {job.languages.map((language)=> {
                        return (
                            <span>{language}</span>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <div>
            <Navbar />
            <div className="jobBoard">
                {jobElements}
            </div>
        </div>
    )
}