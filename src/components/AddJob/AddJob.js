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
        contract: [{ contractName: "" }],
        location: "",
        languages: [{ languageName: "" }],
        tools: [{ toolName: "" }],
        responsibles: [{ responsible: "" }],
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



    const handleContractChange = (e, index) => {
        const { name, value } = e.target
        const contractList = [...addJobData.contract]
        contractList[index][name] = value
        setAddJobData((prevJobData) => {
            return { ...prevJobData, contract: contractList }
        })
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

    const handleLanguageChange = (e, index) => {
        const { name, value } = e.target
        const languageList = [...addJobData.languages]
        languageList[index][name] = value
        setAddJobData((prevJobData) => {
            return { ...prevJobData, languages: languageList }
        })
    }

    const handleLanguageAdd = () => {
        setAddJobData((prevJobData) => {
            return { ...prevJobData, languages: [...prevJobData.languages, { languageName: "" }] }
        })
    }

    const handleLanguageRemove = (index) => {
        const languageList = [...addJobData.languages]
        languageList.splice(index, 1)
        setAddJobData((prevJobData) => {
            return { ...prevJobData, languages: languageList }
        })
    }

    const handleToolChange = (e, index) => {
        const { name, value } = e.target
        const toolList = [...addJobData.tools]
        toolList[index][name] = value
        setAddJobData((prevJobData) => {
            return { ...prevJobData, tools: toolList }
        })
    }

    const handleToolAdd = () => {
        setAddJobData((prevJobData) => {
            return { ...prevJobData, tools: [...prevJobData.tools, { toolName: "" }] }
        })
    }

    const handleToolRemove = (index) => {
        const toolList = [...addJobData.tools]
        toolList.splice(index, 1)
        setAddJobData((prevJobData) => {
            return { ...prevJobData, tools: toolList }
        })
    }

    const handleResponsibleChange = (e, index) => {
        const {name, value} = e.target
        const responsibleList = [...addJobData.responsibles]
        responsibleList[index][name] = value
        setAddJobData((prevJobData) => {
            return {...prevJobData, responsibles: responsibleList}
        })
    }

    const handleResponsibleAdd = () => {
        setAddJobData((prevJobData) => {
            return {...prevJobData, responsibles: [...prevJobData.responsibles, {responsible: ""}]}
        })
    }

    const handleResponsibleRemove = (index) => {
        const responsibleList = [...addJobData.responsibles]
        responsibleList.splice(index, 1)
        setAddJobData((prevJobData) => {
            return {...prevJobData, responsibles: responsibleList}
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
                <form onSubmit={handleSubmit} className="form">
                    <div className="checkboxWrapper">
                        <div>
                            <label className="label">
                                Active/Unactive:
                            </label>
                        </div>
                        <input className="checkboxInput" type="checkbox" name="isactive" checked={addJobData.isactive} onChange={handleCheckboxChange} />
                    </div>
                    <div className="positionWrapper">
                        <div>
                            <label className="label">
                                Position name:
                            </label>

                        </div>
                        <input className="textInput" type="text" name="position" value={addJobData.position} onChange={handleChange} />
                    </div>

                    <div className="ratingWrapper">
                        <div>
                            <label className="label">
                                Rating:
                            </label>
                        </div>
                        <input className="textInput" type="number" name="rating" min="1" max="6" value={addJobData.rating} onChange={handleChange} />

                    </div>

                    <div className="companyWrapper">
                        <div>
                            <label className="label">
                                Company name:
                            </label>

                        </div>
                        <input className="textInput" type="text" name="company" value={addJobData.company} onChange={handleChange} />

                    </div>

                    <div className="logoWrapper">
                        <div>
                            <label className="label">
                                Logo:
                            </label>

                        </div>
                        <input className="textInput" type="text" name="logo" value={addJobData.logo} onChange={handleChange} />
                    </div>


                    <div className="roleWrapper">
                        <div>
                            <label className="label">
                                Position role:
                            </label>

                        </div>
                        <input className="textInput" type="text" name="role" value={addJobData.role} onChange={handleChange} />
                    </div>

                    <div className="ratingWrapper">
                        <div>
                            <label className="label">
                                Position level:
                            </label>

                        </div>
                        <select className="selectInput" name="level" value={addJobData.level} onChange={handleChange}>
                            <option value="Intern">Intern</option>
                            <option value="Junior">Junior</option>
                            <option value="Midweight">Midweight</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>

                    <div className="contractWrapper">
                        <div>
                            <label className="label">
                                Contract type:
                            </label>

                        </div>
                        {addJobData.contract.map((contr, index) => (
                            <div className="dynamicFieldsWrapper" key={index}>
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

                    <div className="ratingWrapper">
                        <div>
                            <label className="label">
                                Job location:
                            </label>

                        </div>
                        <input className="textInput" type="text" name="location" value={addJobData.location} onChange={handleChange} />
                    </div>

                    <div className="ratingWrapper">
                        <div>
                            <label className="label">
                                Languages required:
                            </label>

                        </div>
                        {addJobData.languages.map((language, index) => (
                            <div className="dynamicFieldsWrapper" key={index}>
                                <div>
                                    <input
                                        className="textInput"
                                        type="text"
                                        name="languageName"
                                        value={language.languageName}
                                        onChange={(e) => handleLanguageChange(e, index)}
                                    />
                                    {addJobData.languages.length - 1 === index && (
                                        <IconButton onClick={handleLanguageAdd}>
                                            <AddIcon />
                                        </IconButton>)
                                    }
                                </div>
                                <div>
                                    {addJobData.languages.length > 1 && (
                                        <IconButton onClick={() => handleLanguageRemove(index)} >
                                            <DeleteIcon />
                                        </IconButton>)
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ratingWrapper">
                        <div>
                            <label className="label">
                                Tools required:
                            </label>

                        </div>

                        {addJobData.tools.map((tool, index) => (
                            <div className="dynamicFieldsWrapper" key={index}>
                                <div>
                                    <input
                                        className="textInput"
                                        type="text"
                                        name="toolName"
                                        value={tool.toolName}
                                        onChange={(e) => handleToolChange(e, index)}
                                    />
                                    {addJobData.tools.length - 1 === index && (
                                        <IconButton onClick={handleToolAdd}>
                                            <AddIcon />
                                        </IconButton>)
                                    }
                                </div>
                                <div>
                                    {addJobData.tools.length > 1 && (
                                        <IconButton onClick={() => handleToolRemove(index)} >
                                            <DeleteIcon />
                                        </IconButton>)
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ratingWrapper">
                        <div>
                            <label className="label">
                                Responsibles:
                            </label>

                        </div>
                        {addJobData.responsibles.map((res, index) => (
                            <div className="dynamicFieldsWrapper" key={index}>
                                <div>
                                    <input
                                        className="textInput"
                                        type="text"
                                        name="responsible"
                                        value={res.responsible}
                                        onChange={(e) => handleResponsibleChange(e, index)}
                                    />
                                    {addJobData.responsibles.length - 1 === index && (
                                        <IconButton onClick={handleResponsibleAdd}>
                                            <AddIcon />
                                        </IconButton>)
                                    }
                                </div>
                                <div>
                                    {addJobData.responsibles.length > 1 && (
                                        <IconButton onClick={() => handleResponsibleRemove(index)} >
                                            <DeleteIcon />
                                        </IconButton>)
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="textAreaWrapper">
                        <label className="label">
                            Description:
                        </label>
                        <textarea className="textAreaInput" name="description" value={addJobData.description} onChange={handleChange} />
                    </div>
                    <button className="addJobButton">Add job</button>
                </form>
            </div>
        </div>
    )
}