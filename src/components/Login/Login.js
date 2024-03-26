
import LoginFrom from "./LoginForm";
import React from "react";
function Login(){
   const styleObj={
        width:"100%",
        height:"100%"
    }
   
    return(
        <>
            <div className="row">
                <div className="col-md-6">
                <img src={require('../../assets/login.jpg')} alt="login" style={styleObj}/>
                </div>
                <div className="col-md-6" style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <LoginFrom></LoginFrom>  
                </div>
            </div>

        </>
    )
}

export default Login;