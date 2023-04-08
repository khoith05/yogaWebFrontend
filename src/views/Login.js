function Login () {

    return (
      <div className="login">
          <div className="wrapper">
              <div className= "form-box"> 
                  <h2>Login</h2>
                  <form action="#">
                      <div className="input-box">
                          <span class="icon">
                              <ion-icon name="mail"></ion-icon>
                          </span>
                          <input type="email" required />
                          <label>Email</label>
                      </div>
                      <div class="input-box">
                          <span class="icon">
                              <ion-icon name="lock-closed"></ion-icon>
                          </span>
                          <input type="password" required />
                          <label>Password</label>
                      </div>
                      <button type="submit" class="btn">Submit</button>
                      <div class="login-register">
                          <p>Don't have an account? <a href="signup" 
                          class="register-link">Register</a></p>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    )
  }
  
  export default Login;