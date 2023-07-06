import React from 'react'
import image1 from '../../assets/Background/4.png'
import './ground.css'
import { FaSearch } from 'react-icons/fa';
const Ground = () => {
  
    const onClickSponsoredTurf = ()=>{

    }
    return (
        <div className='grounds-body'>
            <div className="sponsored-turf-section">
                
                <h1>Sponsored Turfs</h1>
                
                <div className='sponsored-turfs'>
                    <div className="sponsored-turf">
                        <div className="sponsored-turf-img">
                            <img src={image1} alt="" width="388px" height="432px"/>
                            <h1>Jaff</h1>
                        </div>
                        <button onClick={()=>onClickSponsoredTurf()}>View</button>
                    </div>

                    <div className="sponsored-turf">
                        <div className="sponsored-turf-img">
                            <img src={image1} alt="" width="388px" height="432px"/>
                            <h1>Jaff</h1>
                        </div>
                        <button onClick={()=>onClickSponsoredTurf()}>View</button>
                    </div>

                    <div className="sponsored-turf">
                        <div className="sponsored-turf-img">
                            <img src={image1} alt="" width="388px" height="432px"/>
                            <h1>Jaff</h1>
                        </div>
                        <button onClick={()=>onClickSponsoredTurf()}>View</button>
                    </div>
                    
                </div>
                
            </div>
            <div className='grounds-search-section'>
                <div className='grounds-search'>
                    <input type="text" placeholder='Search' />
                    <FaSearch/>
                </div>
            </div>

            <div className="grounds-all-section">
                <div className='grounds-top'>
                    <h3>Result</h3>
                    
                </div>


                <div className='grounds-individual'>
                    <span>Motijheel Arambag Academy</span>
                    <span>Location: Motijheel</span>
                    <button >Detail</button>
                </div>
            </div>
        </div>
    )
}

export default Ground

