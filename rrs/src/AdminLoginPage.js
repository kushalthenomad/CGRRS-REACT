import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import './Login.css';
import Admin from "./images/Admin.png";
import './Adminicon.css'

export default function Userregisteration() {
    let navigate = useNavigate();
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [Allok, setAllok] = useState(false);
    const [LoginResponse, setLoginResponse] = useState('');


    const validate = (out) => {
        const errors = {};
        setAllok(true);
        console.log(Allok);
        if (!out.UserName) {
            errors.username = "Username is required!";
            setAllok(false);
        }
        if (!out.Password) {
            errors.password = "Password is required";
            setAllok(false);
        }
        return errors;
    };

    async function Submit(e) {
        console.log(Allok);
        const out = {
            "UserName": UserName,
            "Password": Password
        };
        setFormErrors(validate(out));
        console.log(Allok);
        console.log(formErrors)
        console.log(out);
        if (Allok) {
            axios.get("https://localhost:7132/api/Admin/GetAdmin", { params: out }
            ).then((response) => {
                console.log(response.data[0]);
                //console.log(response.data[0].matches)
                console.log(response.status);
                if (response.data[0].matches === 0) {
                    setLoginResponse("No Account with that Username and password..");
                }
                else {
                    setLoginResponse("Account Found");
                    console.log(response.status)
                    localStorage.setItem("AdminName", UserName);
                    localStorage.setItem("AdminLogin", true);
                    navigate('/AdminOps')
                }

            }).catch(function (error) {
                alert(error.message);
            })
        }
        e.preventDefault();

    }
    return (
        <>

            <div className='Login'>
                <form className="Userform">
                <div><img src ={Admin} alt="admin" /></div>
                    <h2>ADMIN LOGIN</h2>
                    <div >
                        <label>Username</label>
                        {<label className="labelalert">{formErrors.username}</label>}
                    </div>
                    <input required type="text" placeholder="Username" onChange={event => setUserName(event.target.value)}></input>
                    <div >
                        <label>Password</label>
                        {<label className="labelalert">{formErrors.password}</label>}
                    </div>
                    <input required type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
                    <button className="btn" onClick={(e) => Submit(e)}>Login</button>
                    {<label className="labelalert">{LoginResponse}</label>}
                    <br />
                </form>

            </div>


        </>
    );
}
