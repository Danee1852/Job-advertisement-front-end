//import JobData from "./jobsData"
//import {data} from "../../public/jobsData"
import { Link } from "react-router-dom"
import "./JobList.css"
import Navbar from "../Navbar/Navbar"
import { useState } from "react"

export default function JobList({ listOfJobs, checkTheTime }) {



    const [query, setQuery] = useState("")
    

    const search = (data) => {
        const searchParam = "position"
        return data.filter((item) =>
            item[searchParam] && item[searchParam].toLowerCase().includes(query.toLowerCase()))
    }



    const getUniqueLanguages = (data) => {

        const languageNames = data && data.map(job => {
            if (Array.isArray(job.languages)) {
                return job.languages.map(language => {
                    return language.languageName;
                })
            }
            return []
        })
        return Array.from(languageNames && languageNames.reduce((acc, val) => {
            
            val.forEach(language => language ? acc.add(language): acc)
            return acc
        }, new Set())
        )
        
        
    }


    //console.log(getUniqueLanguages(listOfJobs))


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




    const jobElements = listOfJobs && search(listOfJobs).map(job => {



        return (

            <div key={job.id} className="jobWrapper">
                <div className="companyLogo">
                    <Link to={`/jobDetails/${job.id}`}>
                        <img className="company_logo" src={job.logo} alt="logo" />
                    </Link>

                </div>
                <div className="mainInfo">
                    <h3 className="positionName">{job.position}</h3>
                    <h2 className="companyName">{job.company}</h2>
                    <div className="companyDetails">
                        <span> {job.location} ‣ </span>
                        <span> {checkTheTime(job.postedAt)} ‣ </span>
                        {job.contract.map((contr, index) => {

                            return (
                                <span key={index}>{contr.contractName} </span>
                            )
                        })}

                    </div>
                </div>
                <div className="jobTechStack">
                    {job.languages.map((language, index) => {

                        const lang = language.languageName === "" ?
                            <span key={index}></span> : <span key={index} className="language_span">{language.languageName}</span>

                        return lang
                    })}
                </div>
            </div>
        )
    })

    return (
        <div>
            <Navbar />

            <div className="jobBoard">
                <div className="filter">
                    <div>
                        <input
                            className="search-input"
                            placeholder="Search by name.."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <div>
                        <select>
                            {getUniqueLanguages(listOfJobs).map((language, index)=>{
                                return (
                                <option key = {index}>{language}</option>
                                )
                            })}
                            
                            
                        </select>
                    </div>
                </div>
                <div className="col1">
                    <Link to="/addNewJob">
                        <button className="addNewJobButton" >Add new Job Offer</button>
                    </Link>
                    {jobElements}
                </div>


            </div>
        </div>
    )
}