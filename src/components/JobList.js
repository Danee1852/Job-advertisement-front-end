//import JobData from "./jobsData"
//import {data} from "../../public/jobsData"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import "./JobList.css"
import Navbar from "./Navbar"

export default function JobList({listOfJobs}) {

    // Put the state up for sharing data with other components

    // const [listOfJobs, setListOfJobs] = useState(false)
    
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8000/jobList')
    //         const json = await response.json()
    //         setListOfJobs(json)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // },[])

    //console.log(listOfJobs)
    const jobElements = listOfJobs && listOfJobs.map(job => { 

        return (
            
            <div key = {job.id} className="jobWrapper">
                <div className="companyLogo">
                    <Link to={`/jobDetails/${job.id}`}>
                        <img className = "company_logo" src = {job.logo}/>
                    </Link>
                </div>
                <div className="mainInfo">
                    <h3 className="positionName">{job.position}</h3>
                    <h2 className="companyName">{job.company}</h2>
                    <div className="companyDetails">
                       <span> {job.location} ‣ </span>
                       <span> {job.postedAt} ‣ </span>
                        {job.contract.map((contractName) => {
                            
                        return (   
                                 <span key={contractName}>{contractName} </span> 
                        )
                       })}
                    
                    </div>
                </div>
                <div className="jobTechStack">
                    {job.languages.map((language)=> {
                        return (
                            
                                <span key= {language}className="language_span">{language}</span>
                            
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