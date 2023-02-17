import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'






export default function LeaderBoard() {
 const data = useContext(UserContext)
 console.log(data)

  return data.map((item, index) => (
    <div className='profile-card' key={item.id}>
        <figure>
            <img src={item.image} alt=""/>
        </figure>
        <section>
            <p className='user-details'><span>Name:</span>{item.name}</p>
            <p className='path'><span>Path:</span>{item.path}</p>
            <p className='user-details'><span>Aggregate Score:</span>{item.aggregateScore}</p>
            <p className='rank'><span>Rank:</span>{index+1}</p>
        </section>
        
    </div>

  ))
}
