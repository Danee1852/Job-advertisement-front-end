import CompanyLogo from "../../images/company_logo.png"
import starLogo from "../../images/star.png"
import './CompanyMini.css';

export default function CompanyMini({company,rating,location}) {

    return(

            <div className="card">

            <img src={CompanyLogo} className="card--logo" alt="companyLogo"/>
            <div className="card--stats">
                <img src={starLogo} className="card--star" alt="starLogo"/>
                <span className="card--rating">{rating}</span>
                <span className="card--location">{location}</span>
            </div>
            
            <p className="card--title">{company}</p>

            
        </div>
    
)
        

}