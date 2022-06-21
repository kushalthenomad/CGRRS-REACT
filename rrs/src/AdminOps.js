import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './AdminOps.css'

function AdminOps() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    debugger;
    axios
      .get("https://localhost:7132/api/Admin/gettraininfo")
      .then((result) => setData(result.data));
    console.log(data);
    debugger;
  }, [data]);
  const setTrainNumber=(tn)=>{
    localStorage.setItem("TrainNumber",tn)
  }
  const del=(dl)=>{
    axios.delete("https://localhost:7132/api/Admin/Deletetrain/"+dl).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })

  }
  return (
    <>
      <div className="Login">
      <div>
        <h1 className="head">ADMIN DASHBOARD</h1>
        <br />
        {/* <button onClick={() => navigate("/UpdateTrain")}>Update Train</button>
        <br />
        <button onClick={() => navigate("/DeleteTrain")}>Delete Train</button> */}
        <br />
      </div>
      
      <div>
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
                <th scope="col">Ticket Cost</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.TrainNumber}>
                    <td><b>{item.TrainNumber}</b></td>
                    <td>{item.Origin}</td>
                    <td>{item.Destination}</td>
                    <td>{item.ArrivalTime}</td>
                    <td>{item.DepartureTime}</td>
                    <td>{item.NumberOfSeats}</td>
                    <td>{item.TicketCost}</td>
                    <Link to='/UpdateTrain'>
                    <button className="btn" onClick={() => setTrainNumber(item.TrainNumber)}>Update Train</button>
                    </Link>
                    <Link to='/AdminOps'>
                    <button className="btn" onClick={() => del(item.TrainNumber)}>Delete</button>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="insertbtn">
          <button  className="btn" onClick={() => navigate("/InsertTrain")}>Insert Train</button>
          <button  className="btn" onClick={() => navigate("/")}>Logout</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AdminOps;


