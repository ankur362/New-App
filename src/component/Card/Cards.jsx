import React from 'react';

import './Card.css';
import { useNavigate } from 'react-router-dom'; 

const Cards = ({ data }) => {
 const navigate=useNavigate()

  const handleTitleClick = (newsItem) => {
    navigate('/specific', { state: newsItem }); 
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        }
        return (
          <div className='cards' key={index}>
            <div className='imgContainer'>
              <img src={curItem.urlToImage} alt="" />
            </div>
            <div className="cardContent">
             
              <a className="title" onClick={() => handleTitleClick(curItem)}>{curItem.title}</a>
              <h4>{curItem.author}</h4>
              <p>{curItem.description}</p>
              <button onClick={() => window.open(curItem.url)}>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
