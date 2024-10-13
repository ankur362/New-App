import React from 'react';
import { useLocation } from 'react-router-dom';
import './Specific.css'; 
import { useNavigate } from 'react-router-dom'; 

const Specific = () => {
  const location = useLocation(); 
  const newsItem = location.state; 
  const navigate = useNavigate();
  const handleHomeClick = (newsItem) => {
    navigate('/'); 
  };
  if (!newsItem) {
    return <h2>No News Details Available</h2>;
  }

  return (
    <div className="specific-container">
      <div className="titl">
      <h1>{newsItem.title}</h1>
      
      <button onClick={handleHomeClick }>HOME</button>
      </div>
      <img src={newsItem.urlToImage} alt={newsItem.title} className="news-image" />
      <h3>By: {newsItem.author}</h3>
      <p>{newsItem.description}</p>
      <a href={newsItem.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
    </div>
  );
};

export default Specific;
