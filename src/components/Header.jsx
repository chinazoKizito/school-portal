import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Header({signOut, handleViewBoard, viewBoard}) {
    const data = useContext(UserContext)
  return (
    <header className="App-header">
      <section>
            <figure>
                <img src={data.image} alt="cordinator's face"/>
            </figure>
            <h4>{data.name}</h4>
            <h4>{data.title}</h4>
    </section>
      <article>
        <h3>Learnable Students Dashboard</h3>
        <p>Learnable 2022  Frontend Development Interns</p>
      </article>
    <button className='signout-btn' onClick={signOut}>Log out</button>
    <button className='viewboard-btn' onClick={handleViewBoard}>
      { viewBoard ? "Close LeaderBoard" : "View LeaderBoard" }
      </button>
    </header>
  )
}

export default Header
