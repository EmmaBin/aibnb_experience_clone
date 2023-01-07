import React from 'react'
import group from '../assets/group_pics.png'

export default function Hero(){
    return(
        <div className='hero'>
            <img className='group'src={group} />
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by one-of-a-kind
                hosts -- all without leaving home
            </p>
        </div>
    )
}
