import React, { useState } from 'react'
import UserPanel from './assets/components/UserPanel'
import UserInfo from './assets/components/UserInfo'
import data from './data.json'
import './App.css'
function App() {

  const [info, setInfo] = useState(data)
  const [timeFrame, setTimeFrame] = useState('weekly')
  return (
    <main>
      <div className="left-section">
        <UserPanel setTime={setTimeFrame}/>
      </div>
      <div className="right-section">
        {info.map((item) => {
          return <UserInfo key={item.title} {...item} timeFrame={timeFrame}/>
        })}
      </div>
    </main>
  )
}

export default App