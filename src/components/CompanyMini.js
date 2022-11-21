import CompanyLogo from "../images/company_logo.png"
import starLogo from "../images/star.png"
import './CompanyMini.css';

export default function CompanyMini(props) {
    
    

    return(

            <div className="card">

            <img src={CompanyLogo} className="card--logo"/>
            <div className="card--stats">
                <img src={starLogo} className="card--star"/>
                <span className="card--rating">{props.rating}</span>
                <span className="card--location">{props.location}</span>
            </div>
            
            <p className="card--title">{props.companyname}</p>

            
        </div>
    
)
        

}