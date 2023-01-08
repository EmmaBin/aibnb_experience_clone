import React from 'react'
import star from '../assets/star.png'


export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {/* if badge has value, it will display some message, sold our has its first 
            priority to display, then online. If is has no badge, display nothing, which
            means badge is falsy  */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            
            <img src={`public/images/${props.img}`} className='card--image' />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
