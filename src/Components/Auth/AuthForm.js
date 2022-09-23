import { useState, useRef } from "react";
import "../Auth/authForm.css";
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";

const AuthForm = () => {
  const [isLogged, setIsLogged] = useState(false);
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const [error, setError] = useState(false);

const authContext =useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogged) {
      
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBr-sIgUeHAxoVHHpfIiMX6nEFj5t51Bhc",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
       
        if (res.ok) {


          return res.json()

        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            
            
            throw new Error(errorMessage);
          });
        }
      }).then(data=>{

        authContext.login(data.idToken)

      }).catch((err)=>alert(err.message))
    }  





     fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBr-sIgUeHAxoVHHpfIiMX6nEFj5t51Bhc ",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }


  const switchMode = (e) => {
    e.preventDefault();
    setIsLogged((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="formPage" onClick={() => setError(false)}>
      <form className="form" onSubmit={submitHandler}>
        <h1>{isLogged ? "Login" : "Sign Up"}</h1>
        {error && (
          <h4
            style={{
              color: "red",
              fontSize: "15px",
              backgroundColor: "lightcyan",
              padding: "0.5rem",
            }}
          >
            Some Error Occured
          </h4>
        )}
        <div className="formInputs">
          <label>Your Email: </label>
          <input type="email" ref={emailInputRef} />
        </div>

        <div className="formInputs">
          <label>Your password: </label>
          <input type="password" ref={passwordInputRef} />
        </div>

        <div className="formButton">
          <button
            type="submit"
            className={isLogged ? "btn_loginIn" : "btn_Sign_up"}
          >
            {isLogged ? "Login" : "Sign Up"}
          </button>

          <button className="btn_toggle" onClick={switchMode}>
            {isLogged ? "Create new Account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
