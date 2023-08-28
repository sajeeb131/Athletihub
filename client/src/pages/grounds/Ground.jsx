import React, { useEffect, useState } from 'react'
import image1 from '../../assets/Background/4.png'
import image2 from '../../assets/Background/3.png'
import image3 from '../../assets/Background/5.png'
import './ground.css'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Ground = () => {
    const [grounds, setGrounds] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          const userId = localStorage.getItem('id');
          if (!userId) {
            navigate('/login');
          }
          try {
            let url = 'ground/all';
            const response = await fetch(url);
            if (response.ok) {
              const data = await response.json();
              setGrounds(data);
            } else {
              console.log("Error: ", response.statusText);
            }
          } catch (error) {
            console.log("Error: ", error.message);
          }
        };
      
        fetchData();
      }, []);
      const onClickDetails = (groundId) => {
        console.log(groundId)
        navigate(`/groundProfile/${groundId}`);
      };
      
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
                            <img src={image3} alt="" width="388px" height="432px"/>
                            <h1>Nutmeg</h1>
                        </div>
                        <button onClick={()=>onClickSponsoredTurf()}>View</button>
                    </div>

                    <div className="sponsored-turf">
                        <div className="sponsored-turf-img">
                            <img src={image2} alt="" width="388px" height="432px"/>
                            <h1>Chef</h1>
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

                {Array.isArray(grounds) ? (
                grounds.map((ground) => (
                    <div className="grounds-individual" key={ground._id}>
                    <span>{ground.groundName}</span>
                    <span>Location: {ground.contact}</span>
                    <button onClick={() => onClickDetails(ground._id)}>Details</button>
                    </div>
                ))
                ) : (
                <p>No grounds available.</p>
                )}

                
            </div>
        </div>
    )
}

export default Ground

