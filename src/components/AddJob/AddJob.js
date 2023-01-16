import { useState } from "react"
import {redirect} from "react-router-dom"

export default function JobAdd({lengthOfJobsList}) {

    const[addJobData, setAddJobData]=useState({
        id:0,
        isactive:false,
        rating:0,
        company:"",
        logo:"",
        position:"",
        role:"",
        level:"",
        postedAt:"",
        contract:[],
        location:"",
        languages:[],
        tools:[],
        responsibles:[],
        description:""

    })

    // const[id,setId]=useState(0)
    // const[isactive,setIsactive]=useState(false)
    // const[rating,setRating]=useState(0)
    // const[company,setCompany]=useState("")
    // const[logo,setlogo]=useState("")
    // const[position,setPosition]=useState("")
    // const[role,setRole]=useState("")
    // const[level,setLevel]=useState("")
    // const[postedAt,setPostedAt]=useState("")
    // const[contract,setContract]=useState([])
    // const[location,setLocation]=useState("")
    // const[languages,setLanguages]=useState([])
    // const[tools,setTools]=useState([])
    // const[responsibles,setResponsibles]=useState([])
    // const[description,setDescription]=useState("")

    const setJobId = (lengthOfJobsList) => {
        setAddJobData({
            ...addJobData,
            id:parseInt(lengthOfJobsList)+1
        })
    }

    const handleChange = (event) => {
        setAddJobData({
            ...addJobData,
            [event.target.name]: event.target.value
        })
    }

    const handleCheckboxChange = (event) => {
        setAddJobData({
            ...addJobData,
            [event.target.name]: event.target.checked
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setJobId()
        postData()
    }

    const postData = async () => {
        try {
                await fetch('http://localhost:8000/jobList', {
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(addJobData)
            })
            alert("Job saved")
            redirect('jobList')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit ={handleSubmit}>
            <label>
                Active/Unactive:
                <input type="checkbox" name="isactive" checked={addJobData.isactive} onChange={handleCheckboxChange} />
            </label>
            <br/>
            <label>
                Rating:
                <input type="number" name="rating" min="1" max ="6" value={addJobData.rating} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Company name:
                <input type="text" name="company" value={addJobData.company} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Logo:
                <input type="text" name="logo" value={addJobData.logo} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Position name:
                <input type="text" name="position" value={addJobData.position} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Position role:
                <input type="text" name="role" value={addJobData.role} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Position level:
                <select name="level" value={addJobData.level} onChange={handleChange}>
                <option value="Intern">Intern</option>
                <option value="Junior">Junior</option>
                <option value="Midweight">Coconut</option>
                <option value="Senior">Senior</option>
                </select>
            </label>
            <br/>
            <label>
                PostedAt:
                <input type="text" name="postedAt" value={addJobData.postedAt} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Contract type:
                <input type="text" name="contract" value={addJobData.contract} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Job location:
                <input type="text" name="location" value={addJobData.location} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Languages required:
                <input type="text" name="languages" value={addJobData.languages} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Tools required:
                <input type="text" name="tools" value={addJobData.tools} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Responsibles:
                <input type="text" name="responsibles" value={addJobData.responsibles} onChange={handleChange} multiple/>
            </label>
            <br/>
            <label>
                Description:
                <textarea name="description" value={addJobData.description} onChange={handleChange} />
            </label>
            <br/>
            <button>Add job</button>
        </form>
    )
}