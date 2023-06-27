import React, { useEffect, useState } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import './market.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Market = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [selectedType, setSelectedType] = useState('all'); // Selected type state
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    const userId = localStorage.getItem('id'); 
    if(!userId){
        navigate('/login')
    }
    const fetchItems = async () => {
      try {
        let url = '/market/all/';
        
        if (selectedType !== 'all') {
          url = `/market/${selectedType}/`; // Update URL based on selected type
        }

        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setItems(data); // Update the items state with the received data
          setIsLoading(false); // Turn off loading state
        } else {
          console.log('Error:', response.statusText);
          setIsLoading(false); // Turn off loading state in case of error
        }
      } catch (error) {
        console.log('Error:', error.message);
        setIsLoading(false); // Turn off loading state in case of error
      }
    };

    fetchItems();
  }, [selectedType]); // Re-fetch items when the selected type changes

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="market-container">
      <div className="market-navbar-conatainer">
        <div className="market-navbar">
          <Link to="/market" onClick={() => handleTypeClick('all')}>All</Link>
          <Link to="/market" onClick={() => handleTypeClick('sports')}>Sports</Link>
          <Link to="/market" onClick={() => handleTypeClick('gaming')}>Gaming Gadgets</Link>
          <Link to="/market" onClick={() => handleTypeClick('equipment')}>Equipments</Link>
        </div>
        <div className="market-searchbar">
          <input type="text" placeholder="Search" className="market-searchbar-input" />
          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="market-sale-post">
        <Link to="/market/post" className="button-market-post">
          Create Sale Post
        </Link>
      </div>

      {isLoading ? (
        <div className="loading-icon">
          <FaSpinner/>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="market-posts">
          {items.map((post) => (
            <div className="market-post" key={post._id}>
              <div className="market-post-image">
                <img src={post.image} alt={post.itemName} width="200px" height="200px" />
              </div>
              <div className="market-post-details">
                <div className="market-post-detail">
                  <span>{post.itemName}</span>
                  <button className="market-post-button">Notify</button>
                </div>
                <div className="market-post-detail">
                  <span>{post.price}</span>
                  <button className="market-post-button">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Market;
