import React from "react"
import   './grid.css'
/*
	
https://www.w3schools.com/w3images/wedding.jpg
https://www.w3schools.com/w3images/rocks.jpg  
https://www.w3schools.com/w3images/falls2.jpg 
https://www.w3schools.com/w3images/paris.jpg  
https://www.w3schools.com/w3images/nature.jpg 
https://www.w3schools.com/w3images/mist.jpg   
https://www.w3schools.com/w3images/paris.jpg
https://www.w3schools.com/w3images/underwater.jpg"  
https://www.w3schools.com/w3images/ocean.jpg       
https://www.w3schools.com/w3images/mountainskies.jpg

*/

const Grid = () => {
    let data = [
        {
            id :1,
            imgSrc : 'https://www.w3schools.com/w3images/wedding.jpg'
        },
        {
            id : 2,
            imgSrc : 'https://www.w3schools.com/w3images/rocks.jpg'
        },
        {
            id : 3,
            imgSrc : 'https://www.w3schools.com/w3images/falls2.jpg'
        },
        {
            id : 4,
            imgSrc : 'https://www.w3schools.com/w3images/paris.jpg'
        },
        {
            id : 5,
            imgSrc : 'https://www.w3schools.com/w3images/nature.jpg'
        },
        {
            id : 6,
            imgSrc : 'https://www.w3schools.com/w3images/mist.jpg'
        },
        {
            id : 7,
            imgSrc : 'https://www.w3schools.com/w3images/underwater.jpg'
        },
        {
            id : 8,
            imgSrc : 'https://www.w3schools.com/w3images/ocean.jpg'
        },
        {
            id : 9,
            imgSrc : 'https://www.w3schools.com/w3images/mountainskies.jpg'
        },
        {
            id : 10,
            imgSrc : 'https://www.w3schools.com/w3images/mountainskies.jpg'
        },
        {
            id : 11,
            imgSrc : 'https://www.w3schools.com/w3images/ocean.jpg'
        },
        {
            id : 12,
            imgSrc : 'https://www.w3schools.com/w3images/underwater.jpg'
        },{
            id : 13,
            imgSrc : 'https://www.w3schools.com/w3images/mist.jpg'
        },{
            id : 14,
            imgSrc : 'https://www.w3schools.com/w3images/nature.jpg'
        },{
            id : 15,
            imgSrc : 'https://www.w3schools.com/w3images/paris.jpg'
        },{
            id : 16,
            imgSrc : 'https://www.w3schools.com/w3images/falls2.jpg'
        },{
            id : 17,
            imgSrc : 'https://www.w3schools.com/w3images/rocks.jpg'
        }, {
            id :18,
            imgSrc : 'https://www.w3schools.com/w3images/wedding.jpg'
        },
        
    ]
    return(
        <>
        <div className = "grid">
        {data.map((item,index)=>{
            return(
                <div className="pics" key={index}>
                    <img src = {item.imgSrc} style={{width:'100%'}}/>
                </div>
            )
        })
        }
        </div>
        </>
    )
}

export default Grid;