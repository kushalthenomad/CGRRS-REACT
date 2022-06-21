import React from 'react'
import {useNavigate} from 'react-router-dom'

function UserOperations() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn" onClick={() => navigate('/UserReservation')}>Book Ticket</button>

      {/* https://localhost:7132/api/UserReservation ur get api shudd come here(GET METHOD + ALERT PNR) */}
            <br/>
            <button className="btn" onClick={() => navigate('/CancelTicket')}>Cancel Ticket</button>
            <br/>
            <a href='https://indianhelpline.com/INDIAN-RAILWAYS/' target="blank">help</a>
    </div>
  )
}

export default UserOperations
