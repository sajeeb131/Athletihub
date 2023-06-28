import React, { useState } from 'react'
import image1 from '../../assets/Background/athlete.png'
import image2 from '../../assets/Background/promoter.png'
import './signup.css'
import {Link, useNavigate} from 'react-router-dom'

const AccountType = () => {
  const [type, setType] = useState('')
  const navigate = useNavigate()

  const handleAccountTypeClick = (accountType) =>{
    navigate(`/signup/${accountType}`)
  }
  return (
    <div className='account-type-container'>
      <div className="account-type-section1">
        <h1>Select Account Type</h1>
      </div>
      <div className="account-type-section2">
        <div className="section2-half" onClick={()=>handleAccountTypeClick("Athelete")}>
          <img src={image1} alt="" />
          <button>Athlete</button>
        </div>
        <div className="section2-half" onClick={()=>handleAccountTypeClick("Promoter")}>
           <img src={image2} alt="" />
           <button>Promoter</button>
        </div>
      </div>
    </div>
  )
}

export default AccountType

