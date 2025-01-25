import { useState } from "react";
import axios from "axios";

const Login = () => {
  // creating hooks for the email id and password

const [emailId,setEmailId] = useState(" "); 
const [password,setPassword] = useState(" ");

const handleLogin = async () =>{
  try
  {
    const res = await axios.post("http://localhost:7777/login",{
      emailId,password,
    });

  }
  catch (err){
    console.error(err);
  }


};

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email Id</span>
              
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
              
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </label>
          </div>
          <div className="card-actions justify-center py-2">
            <button className="btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
