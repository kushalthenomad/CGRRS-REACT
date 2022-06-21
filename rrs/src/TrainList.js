import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function TrainList() {
    const [data, setData] = useState([]);


    // const navigate = useNavigate();
    useEffect(() => {
        // debugger;
        axios.get("https://localhost:7132/api/Admin/gettraininfo")
            .then((result) => setData(result.data));
        // debugger;
    }, [data]);
    const setTrainNumber = (tn) => {
        console.log(tn);
        alert(tn);
        localStorage.setItem("TrainNumber", tn);
    }
    return (
        <>
            <div >
                <div>
                    <h1>Available Trains</h1>
                </div>
                <div className="row" style={{ margin: "10px" }}>
                    {/* <div className="col-sm-12 btn btn-info"></div> */}
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Train Number</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Arrival Time</th>
                            <th scope="col">Departure Time</th>
                            <th scope="col">Available Seats</th>
                            <th scope="col">Per Ticket Cost</th>
                            <th scope="col">Book Ticket</th>
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
                                    <td>
                                        <Link to='/UserReservation'>
                                            <button className="btn" onClick={() => setTrainNumber(item.TrainNumber)}>Book Ticket</button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TrainList