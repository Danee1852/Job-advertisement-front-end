import { Routes, Route } from "react-router-dom"
import {useState, useEffect} from "react"
import MainCard from "./components/MainCard"
import SignUpForm from "./components/SignUpForm"
import SignInForm from "./components/SignInForm"
import JobList from "./components/JobList"
import JobDetails from "./components/JobDetails/JobDetails"

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
          <Route path="jobList" element={<JobList listOfJobs={listOfJobs}/>} />
          <Route path="jobDetails/:id" element={<JobDetails listOfJobs={listOfJobs}/>} />
          <Route path="/" element={<MainCard listOfJobs={listOfJobs}/>} />
          <Route path="signin" element={<SignInForm />} />
          <Route path="signup" element={<SignUpForm />} />
      </Routes>
       
    </div>
  );
}


