import { useState } from "react"
import { redirect } from "react-router-dom"
import "./AddJob.css"
import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function JobAdd({ lengthOfJobsList }) {

    const [addJobData, setAddJobData] = useState({
        id: 0,
        isactive: false,
        rating: 0,
        company: "",
        logo: "",
        position: "",
        role: "",
        level: "",
        postedAt: "",
        contract: [{ contractName: "" }, { contractName: "" }],
        location: "",
        languages: [],
        tools: [],
        responsibles: [],
        description: ""

    })

    console.log(addJobData.contract)


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
            id: parseInt(lengthOfJobsList) + 1
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

    const handleContractAdd = () => {
        setAddJobData((prevJobData) => {
            return { ...prevJobData, contract: [...prevJobData.contract, { contractName: "" }] }
        })
    }

    const handleContractRemove = (index) => {
        const contractList = [...addJobData.contract]
        contractList.splice(index, 1)
        setAddJobData((prevJobData) => {
            return { ...prevJobData, contract: contractList }
        })
    }

    const handleContractChange = (e, index) => {
        const { name, value } = e.target
        const contractList = [...addJobData.contract]
        contractList[index][name] = value
        setAddJobData((prevJobData) => {
            return { ...prevJobData, name: value }
        })
    }


    const postData = async () => {
        try {
            await fetch('http://localhost:8000/jobList', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(addJobData)
            })
            alert("Job saved")
            redirect('jobList')
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className="addJobContainer">
            <div className="addJobWrapper">
                <div className="addJobTitle">
                    <h2>Add new Job</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="checkboxWrapper">
                        <label className="checkboxLabel">
                            Active/Unactive:
                        </label>
                        <input className="checkboxInput" type="checkbox" name="isactive" checked={addJobData.isactive} onChange={handleCheckboxChange} />
                    </div>

                    <div className="ratingWrapper">
                        <label className="ratingLabel">
                            Rating:
                        </label>
                        <input className="textInput" type="number" name="rating" min="1" max="6" value={addJobData.rating} onChange={handleChange} />

                    </div>

                    <div className="companyWrapper">
                        <label className="companyLabel">
                            Company name:
                        </label>
                        <input className="textInput" type="text" name="company" value={addJobData.company} onChange={handleChange} />

                    </div>

                    <div className="logoWrapper">
                        <label className="logoLabel">
                            Logo:
                        </label>
                        <input className="textInput" type="text" name="logo" value={addJobData.logo} onChange={handleChange} />
                    </div>

                    <div className="positionWrapper">
                        <label className="positionLabel">
                            Position name:
                        </label>
                        <input className="textInput" type="text" name="position" value={addJobData.position} onChange={handleChange} />
                    </div>

                    <div className="roleWrapper">
                        <label className="roleLabel">
                            Position role:
                        </label>
                        <input className="textInput" type="text" name="role" value={addJobData.role} onChange={handleChange} />
                    </div>

                    <div className="lvlWrapper">
                        <label className="lvlLabel">
                            Position level:
                        </label>
                        <select name="level" value={addJobData.level} onChange={handleChange}>
                            <option value="Intern">Intern</option>
                            <option value="Junior">Junior</option>
                            <option value="Midweight">Coconut</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>

                    <div className="postedatWrapper">
                        <label className="postedatLabel">
                            PostedAt:
                            <input className="textInput" type="text" name="postedAt" value={addJobData.postedAt} onChange={handleChange} />
                        </label>
                    </div>

                    <div className="contractWrapper">
                        <label className="contractLabel">
                            Contract type:
                        </label>
                        {addJobData.contract.map((contr, index) => (
                            <div className = "contractTypeWrapper" key={index}>
                                <div>
                                    <input
                                        className="textInput"
                                        type="text"
                                        name="contractName"
                                        value={contr.contractName}
                                        onChange={(e) => handleContractChange(e, index)}
                                    />
                                    {addJobData.contract.length - 1 === index && (
                                        <IconButton onClick={handleContractAdd}>
                                            <AddIcon />
                                        </IconButton>)
                                    }
                                </div>
                                <div>
                                    {addJobData.contract.length > 1 && (
                                        <IconButton onClick={() => handleContractRemove(index)} >
                                            <DeleteIcon />  
                                        </IconButton>)
                                    }
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="locationWrapper">
                        <label className="locationLabel">
                            Job location:
                        </label>
                        <input className="textInput" type="text" name="location" value={addJobData.location} onChange={handleChange} />
                    </div>

                    <div className="languagesWrapper">
                        <label className="languageLabel">
                            Languages required:
                            <input className="textInput" type="text" name="languages" value={addJobData.languages} onChange={handleChange} />
                        </label>
                    </div>

                    <div className="toolsWrapper">
                        <label className="toolsLabel">
                            Tools required:
                            <input className="textInput" type="text" name="tools" value={addJobData.tools} onChange={handleChange} />
                        </label>
                    </div>

                    <div className="responsiblesWrapper">
                        <label className="responsiblesLabel">
                            Responsibles:
                            <input className="textInput" type="text" name="responsibles" value={addJobData.responsibles} onChange={handleChange} multiple />
                        </label>
                    </div>

                    <div className="descriptionWrapper">
                        <label className="descriptionLabel">
                            Description:
                            <textarea className="textInput" name="description" value={addJobData.description} onChange={handleChange} />
                        </label>
                    </div>
                    <button className="addJobButton">Add job</button>
                </form>
            </div>
        </div>
    )
}