function Signup () {

  return (
    <div className="signup">
        <div className="wrapper">
            <div className= "form-box"> 
                <h2>Registration</h2>
                <form action="#">
                    <div className="input-box">
                        <span class="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="username" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span class="icon">
                            <ion-icon name="person"></ion-icon>
                        </span>
                        <input type="username" required />
                        <label>Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" required />
                        <label>Re-enter Password</label>
                    </div>
                    <button type="submit" class="btn">Submit</button>
                    <div class="login-register">
                        <p>Already have an account? <a href="login" 
                        class="register-link">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;