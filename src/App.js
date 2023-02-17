import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import LoginPage from './components/LoginPage';
import LeaderBoard from './components/LeaderBoard';
import NormalBoard from './components/NormalBoard'

import { UserContext } from './context/UserContext';
import {programCordinator, sortedUsersData, UserDataGreen} from './context/UsersData';




function App() {
  const [isloggedIn, setLoggin] = useState(false)
  const [viewBoard, setViewBoard] = useState(false)

 const handleSignIn = () => {
    setLoggin(!isloggedIn);
  }

  const handleSignOut = () => {
    setLoggin(false)
  }

  const handleViewBoard = () => {
    setViewBoard(!viewBoard)
  }


  
  if(isloggedIn){
    return(
      <div className="App">
      <UserContext.Provider value={programCordinator} >
          <Header signOut={handleSignOut} handleViewBoard={handleViewBoard} viewBoard={viewBoard}/>
      </UserContext.Provider>

      {
        viewBoard ? 
      <main>
        <UserContext.Provider value={sortedUsersData} >
          <LeaderBoard/>
        </UserContext.Provider>
      </main> :
      <main>
        <UserContext.Provider value={UserDataGreen} >
          <NormalBoard/>
        </UserContext.Provider>
      </main>
      }
        
    </div>
    )
  }
  return(
    <LoginPage  signIn={handleSignIn}/>
  )
}

  
export default App;
