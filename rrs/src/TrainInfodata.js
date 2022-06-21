import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './TrainInfotable.css'
// import "./train.css";
// import images from './images/train.png';
// import images from "./images/train.jpg";

import Axios from "axios";
// const Home = (props) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <h1>Home Page</h1>
//       <p>
//         <button onClick={() => navigate("/AdminLoginPage")}>ADMIN LOGIN</button>
//       </p>
//     </>
//   );
// };

function TrainInfodata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    debugger;
    Axios.get("https://localhost:7132/api/Admin/gettraininfo").then((result) =>
      setData(result.data)
    );
    console.log(data);
    debugger;
  }, [data]);
  const navigate = useNavigate();


  return (
    // <>
    <div className="info">
      {/* //   <> */}
      <div>
        {/* <div styles={{ backgroundImage: `url(${images})` }}></div> */}
        <div className="container" />
        <div className="hdrdiv"><h1 className="heading">CG TRAINS</h1></div>
        
        <p>
          <button className="btn"  onClick={() => navigate("/AdminLoginPage")}>
            Admin Login
          </button>
          <button className="btn" onClick={() => navigate("/UserRegistration")}>
            Register
          </button>
          <button className="btn" onClick={() => navigate("/UserLogin")}>User Login</button>
        </p>
        {/* // </> */}
        <div>
          <div className="row" style={{ margin: "10px" }}>
            {/* <div className="col-sm-12 btn btn-info"></div> */}
          </div>
          
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Train Number</th>
                <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Available Seats</th>
                <th scope="col">Per Ticket Cost</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.TrainNumber}>
                    <td>{item.TrainNumber}</td>
                    <td>{item.Origin}</td>
                    <td>{item.Destination}</td>
                    <td>{item.ArrivalTime}</td>
                    <td>{item.DepartureTime}</td>
                    <td>{item.NumberOfSeats}</td>
                    <td>{item.TicketCost}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* // </> */}
      </div>
    </div>
  );
}

export default TrainInfodata;
