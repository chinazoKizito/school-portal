import React from 'react'

function LoginPage({signIn}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        signIn()
    }


  return (
    <div>
      <h2 className='welcome-message'>Welcome to Learnable-2022 dashboard, Log into the portal to see how our students are performing</h2>
        <main className='login'>
          <form action="" className='profile-card' onSubmit={handleSubmit}>
              <input type="email"  placeholder='Enter Your Email here' />
              <input type="password" placeholder='Enter your password here'/>
              <input  type="submit" value='Login' className='submit-btn' />
          </form>
        </main>
    </div>
  )
}

export default LoginPage
