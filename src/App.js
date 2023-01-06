import { Routes, Route } from "react-router-dom"
import MainCard from "./components/MainCard"
import SignUpForm from "./components/SignUpForm"
import SignInForm from "./components/SignInForm"
import JobList from "./components/JobList"

export default function App() {
  
  return (
    
    <div>
      <Routes>          
          <Route path="jobList" element={<JobList />} />
          <Route path="/" element={<MainCard/>} />
          <Route path="signin" element={<SignInForm />} />
          <Route path="signup" element={<SignUpForm />} />
      </Routes>
       
    </div>
  );
}


