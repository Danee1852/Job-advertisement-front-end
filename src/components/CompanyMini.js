import CompanyLogo from "../images/company_logo.png"
import starLogo from "../images/star.png"
import './CompanyMini.css';

export default function CompanyMini() {
    

    return(
        
        <div className="card">

            <img src={CompanyLogo} className="card--logo"/>
            <div clasName="card--stats">
                <img src={starLogo} className="card--star"/>
                <span className="card--rating">5.0 </span>
                <span className="card--location">Warsaw</span>
            </div>
            <p className="card--title">Company Bussiness Systems</p>
        </div>
    )
}