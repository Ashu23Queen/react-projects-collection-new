import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio</a>
                    <div className="itemContainer">
                      <PersonIcon className="icon" />
                      <span>+ 44 55</span>
                    </div>
                    <div className="itemContainer">
                      <EmailIcon className="icon" />
                      <span>demo@gmail.com</span>
                    </div>                                         
                </div>
               
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
            </div>
        </div>
        //yarn add @mui/icons-material @mui/material @emotion/styled @emotion/react   // command used to install material icons from this link https://mui.com/material-ui/material-icons/?query=person&selected=Person
    );
}