import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import LoginPage from './components/LoginPage';
import LeaderBoard from './components/LeaderBoard';

import { UserContext } from './context/UserContext';
import { programCordinator, sortedUsersData} from './context/UsersData';




function App() {
  const [isloggedIn, setLoggin] = useState(false)

 const handleSignIn = () => {
    setLoggin(!isloggedIn);
  }

  const handleSignOut = () => {
    setLoggin(false)
  }


  
  if(isloggedIn){
    return(
      <div className="App">
      <UserContext.Provider value={programCordinator} >
          <Header signOut={handleSignOut}/>
      </UserContext.Provider>
      <main>
        <UserContext.Provider value={sortedUsersData} >
          <LeaderBoard/>
        </UserContext.Provider>
      </main>
    </div>
    )
  }
  return(
    <LoginPage  signIn={handleSignIn}/>
  )
}

  
export default App;
