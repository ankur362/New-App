import React, { useEffect, useState } from 'react'
import "./New.css"
import Cards from '../Card/Cards'

const News = () => {
  const [searchname, setSearchname] = useState("india");
  const [newsData, setNewsData] = useState(null)
  const API_KEY = "459ab50506544cde9772ff6250572080";
  const handleSearchIconClick = async (e) => {

    console.log("Search icon clicked");
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchname}&apiKey=${API_KEY}`)
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };
  useEffect(() => {
    handleSearchIconClick()
  }, [searchname])
  const handleInput = (e) => {
    setSearchname(e.target.value);

  }
  const userInput = (e)=>{
    setSearchname(e.target.value)
    // handleSearchIconClick()
  }


  return (
    <div>
      <nav>
        <div className="top">
          <span className="topright"><h1 >Trendy News</h1></span>
          <span className="topmiddle">
            <h3 className="first">All News</h3>
            <h3 className="sec">Top Headlines</h3></span>
          <span className="search">
            <label For="text"></label>
            <input type="text" placeholder='search news' value={searchname} className="topsearch" onChange={handleInput} />
            <i onClick={handleSearchIconClick} className="topicon fas fa-search"></i
            ></span>

        </div>

      </nav>
      <div className="catbutton">
        <span className="title">
          <h1>Stay Updated with Trendy News!</h1>
          <div className="allbutton">
            <button className="sports" onClick={userInput} value="sports">sports</button>
            <button className="Politics" onClick={userInput} value="politics">Politics</button>
            <button className="Health" onClick={userInput} value="health">Health</button>
            <button className="Entertainment" onClick={userInput} value="entertainment">Entertainment</button>
            <button className="Technology" onClick={userInput} value="technology">Technology</button>
          </div>
        </span>
      </div>
      <div>
        {newsData ? < Cards data={newsData} /> : <div style={{display:"flex",justifyContent:'center',alignItems:"center",marginTop:"25px",color:"lightgray",fontSize:"2rem"}}>Loading....</div>}
      </div>



    </div>
  )
}

export default News