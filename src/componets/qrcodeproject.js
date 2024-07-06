import React from 'react'

const qrcodeproject = () => {
  return (
    <>
      <body>
      <header>
        <h2>Career-path-recommondation</h2>
    </header>
    <br/>
    <br/>
    <br/>
    <div className="wrapper">
    <h3 class="respon_wrapper" >
        HI welcome to our page 
        <a href="login.html"><button id="btn" >Login-in</button></a>
    </h3>
    <br />
    <div className='form'>
      <form className='form'>
        <h2>Enter your details to continue</h2>
        <label htmlFor='name'>Name
          <input type='text' id="name " placeholder='Enter Name' />
        </label><br />
        <label for="mail">Email
          <input type="email" id="mail" placeholder='E-mail' />
        </label><br />
        <label for="phone">Phone
         <input type="number" id="phone" placeholder='phone'/>
        </label><br />
        <label for="phone">password
            <input type="password" id="phone" name="password" placeholder='Password' />
        </label><br />
         <button>Sign-in</button>
      </form>
      <center>
      <a href="/main.html"><button id="next" >continue</button></a>
      </center>
    </div>
    </div>
    </body>
    </>
  )
}

export default qrcodeproject