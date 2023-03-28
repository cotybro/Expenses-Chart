import React from 'react'
import './UserPanel.css'
import profilePicture from '../images/image-jeremy.png'

function UserPanel({ setTime }) {
  console.log(setTime)
  return (
    <div className="user-panel-container br-15">
        <div className="user-panel br-15">
            <img src={profilePicture} alt="Profile Picture"/>
            <div>
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
        </div>
        <div className="time-container br-15">
                <button 
                className='mb'
                  onClick={() => setTime('daily')}
                >
                  Daily
                </button>

                <button 
                className='mb'
                  onClick={() => setTime('weekly')}
                >
                  Weekly
                </button>

                <button
                  onClick={() => setTime('monthly')}
                >
                  Monthly
                </button>
        </div>
    </div>
  )
}

export default UserPanel