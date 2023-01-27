import { Routes, Route } from "react-router-dom"
import {useState, useEffect} from "react"
import MainCard from "./components/MainCard/MainCard"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import SignInForm from "./components/SignInForm/SignInForm"
import JobList from "./components/JobList/JobList"
import JobDetails from "./components/JobDetails/JobDetails"
import AddJob from "./components/AddJob/AddJob"
import checkTheTime from "./utils"

export default function App() {
  
  const [listOfJobs, setListOfJobs] = useState(false)
    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/jobList')
            const json = await response.json()
            setListOfJobs(json)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    

  return (
    
    <div>
      <Routes>          
          <Route path="jobList" element={<JobList listOfJobs={listOfJobs} checkTheTime={checkTheTime}/>} />
          <Route path="jobDetails/:id" element={<JobDetails listOfJobs={listOfJobs} checkTheTime={checkTheTime}/>} />
          <Route path="/" element={<MainCard listOfJobs={listOfJobs}/>} />
          <Route path="signin" element={<SignInForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="addNewJob" element={<AddJob lengthOfJobsList = {listOfJobs.length}/>} />
      </Routes>
       
    </div>
  );
}


