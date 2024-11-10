import React from "react";
import "./newsCard.css"

// 
const Cards = ({article}) =>{
    return<div className="Container">
        <div>
         <img src={article.img}/>
         </div>
         <div className="naslov">
        <h1 >{article.title}</h1>
        <a href="#">{article.location}</a>
        <p className="description">{article.description}</p>
        </div>
        <div className="ocena">
            <h4>Vrlo dobar</h4>
        <p className="grade">{article.grade}</p>
        </div>
        
    </div>
};
export default  Cards;


// const squareOfNum = (number) => 3 * 3;