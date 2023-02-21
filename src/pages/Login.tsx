import "../styles/Login.css";
import bug from "../images/logo.png";

function Login() {
  return (
      <div>
        <div className="split left left-ratio">
        <div className="centered">
          <img src={bug}/>
          <h2>Creepy Crawly</h2>
          <h6>@{new Date().getFullYear()} Creepy Crawly</h6>
        </div>
      </div>
      <div className="split right grad right-ratio">
        <div className="container" id="container">
            <div>
                <form action="#">
                    <h1>Sign in</h1>
                    <input id="email" type="email" required placeholder="Email"/>
                    <span>We don't share your email with anyone.</span>
                    <input id="password" type="password" required placeholder="Password"/>
                    <a href="#">Forgot your password?</a>
                    <button>Identify Me</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;