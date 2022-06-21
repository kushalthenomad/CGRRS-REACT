import { React, useState, useEffect } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import './Ticket.css';



function Ticket() {
  const navigate = useNavigate();
  const [Data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://localhost:7132/api/UserReservation/viewticketdetails/${localStorage.getItem('UserName')}`)
      .then(function (response) {
        console.log(response)
        setData(response.data[0])

      })
  })

  return (
    <div className="ticket">
      
      <form >
      <h1>YOUR TICKET</h1>
        <label>PNR:{Data.PNR}</label>
        <br/>
        <label>TrainNumber:{Data.TrainNumber}</label>
        <br/>
        <label>BookingDate:{Data.BookingDate}</label>
        <br/>
        <label>JourneyDate:{Data.JourneyDate}</label>
        <br/>
        <label>UserName:{Data.UserName}</label>
        <br/>
        <label>NumberOfTickets:{Data.NumberOfTickets}</label>
        <br/>
        <label>Gender:{Data.Gender}</label>
        <br/>
        <label>Age:{Data.Age}</label>
        <br/>
        <label>Payment:{Data.Payment}</label>
        <br/>
        <label>TravelClass:{Data.TravelClass}</label>
        <br/>
        <br/>
        {/* <button className="btn">DOWNLOAD TICKET</button> */}
      <button className="btn" onClick={() => navigate("/CancelTicket")}>CANCEL TICKET</button>
      <button className="btn" >LOGOUT</button>
      <button className="btn" onClick={() => navigate("/")}>BACK TO HOME</button>
      </form>
      

    </div>

  )
}

export default Ticket