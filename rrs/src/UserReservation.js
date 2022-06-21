import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Reservation.css';


function UserReservation() {
  const [TrainNumber, setTrainNumber] = useState("");
  const [BookingDate, setBookingDate] = useState("");
  const [JourneyDate, setJouneyDate] = useState("");
  const [UserName, setUserName] = useState("");
  const [NumberOfTickets, setNumberOfTickets] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  const [Payment, setPayment] = useState("");
  const [TravelClass, setTravelClass] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");


  const state = {
    TrainNumber: localStorage.getItem("TrainNumber"),
    BookingDate: BookingDate,
    JourneyDate: JourneyDate,
    UserName: localStorage.getItem("UserName"),
    NumberOfTickets: NumberOfTickets,
    Gender: Gender,
    Age: Age,
    Payment: Payment,
    TravelClass: TravelClass,
    PhoneNumber: PhoneNumber,
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    axios
      .post("https://localhost:7132/api/UserReservation", state)
      .then((response) => {
        alert(response.data);
        navigate('/Ticket')
        //UserOperations
      });
    e.preventDefault();
  };

  function check(e) {
    
    console.log(typeof (e.target.value))
  }
  // const date = new Date().toLocaleDateString();
  
  const date = new Date().toLocaleDateString();
  return (
    <div className="Login" >
      <form className="Userform"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>RESERVATION FORM</h2>
        <div className="reserve">
          <label>Train Number</label>

          <input required type="text" defaultValue={localStorage.getItem("TrainNumber")} readOnly />
          {/* // onChange={event => setTrainNumber(event.target.value)} > */}
        </div>
        <div className="reserve">
          <label>Booking Date</label>

          <input name="BookingDate" type="date"  min={(date.slice(6,)+"-"+date.slice(3,5)+"-"+date.slice(0,2))} onChange={(event) => setBookingDate(event.target.value)} />
        </div>

        <div className="reserve">
          <label>Journey Date</label>

          <input name="JourneyDate" type="date" min={(BookingDate)} disabled={(BookingDate.length) ? false : true} onChange={(event) => setJouneyDate(event.target.value)} />
        </div>

        <div className="reserve">
          <label>Username</label>
          <input name="UserName" type="text" defaultValue={localStorage.getItem("UserName")} readOnly />
          {/* onChange={(event) => setUserName(event.target.value)} /> */}
        </div>

        <div className="reserve">
          <label>Number Of Tickets</label>
          <input name="NumberOfTickets" type="number" min="1" max="6" onChange={(event) => setNumberOfTickets(event.target.value)} />
        </div>

        <div className="reserve">
          <label>Gender</label>
          <select name="Gender" defaultValue="Select Gender" id="Gender" onChange={(event) => setGender(event.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="reserve">
          <label>Age</label>
          <input name="Age" type="number" max="150" onChange={(event) => setAge(event.target.value)} />
        </div>

        <div className="reserve">
          <label>Payment</label>
          <select name="Payment" id="Payment" onChange={(event) => setPayment(event.target.value)}>
            <option value="">Select Payment</option>
            <option value="Credit card">Credit card</option>
            <option value="Debit card">Debit card</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>

        <div className="reserve">
          <label>Travel Class</label>
          <select name="TravelClass" id="TravelClass" onChange={(event) => setTravelClass(event.target.value)}>
            <option value="">Select travel class</option>
            <option value="AC 3 tier">AC 3 tier</option>
            <option value="AC 2 tier">AC 2 tier</option>
            <option value="First class">First class</option>
            <option value="AC chaircar">AC chaircar</option>
            <option value="Sleeper">Sleeper</option>
            <option value="General">General</option>
          </select>
        </div>
        <div className="reserve">
          <label>Phone Number</label>
          <input name="PhoneNumber" type="text" onChange={(e) => check(e)} />
          {/* onChange={(event) => setPhoneNumber(event.target.value)} */}
          {/* // /> */}
        </div>

        <input className="btn" type="submit" value="BookTicket" />
      </form>
    </div>
  );
}

export default UserReservation;
