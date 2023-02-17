import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'




export default function NormalBoard() {
 const data = useContext(UserContext)
 console.log(data)

   return data.map((item) => (
    <div className='profile-card' key={item.id}>
        <figure>
            <img src={item.image} alt=""/>
        </figure>
        <section>
            <p className='user-details'><span>Name:</span>{item.name}</p>
            <p className='path'><span>Path:</span>{item.path}</p>
            <p className='user-details'><span>Aggregate Score:</span>{item.aggregateScore}</p>
        </section>
    </div>
  ))
}
