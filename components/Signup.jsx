import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function CreateAccountForm() {
  

   
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
    
      const passwordsMatch = (password === confirmPassword);

    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwordsMatch) {
          alert("Passwords do not match.");
          return;
        }
       
        
        let information = {
            "name":name,
            "email":email,
            "password":password,
            "confirmpassword":confirmPassword
        }
        
        console.log(information);

        axios.post("/api/user/signup",information)
        .then((response)=>{
            console.log(response.data);
            if(response.data){
              alert("Signup successfully! you can now log in");

            }
            localStorage.setItem("messenger",JSON.stringify(response.data));
        })
        .catch((error)=>{
           console.error(error);
        })


        alert("Account created successfully!");


        
        
      };
    
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Create an Account</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 text-black-400 focus:outline-none text-gray-400 "
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-400"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none text-gray-400 ${
                    confirmPassword
                      ? passwordsMatch
                        ? "border-green-500 focus:ring-green-300"
                        : "border-red-500 focus:ring-red-300"
                      : "focus:ring-blue-400"
                  }`}
                  placeholder="••••••••"
                  required
                />
                {confirmPassword && (
                  <p
                    className={`text-sm mt-1 ${
                      passwordsMatch ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {passwordsMatch ? "Passwords match" : "Passwords do not match"}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition "
              >
                Sign Up
              </button>
            </form>
            <p className="flex gap-5 p-5">
            <p className="text-blue-600">Do you already have an account ?</p>
            <Link to ={"/LoginPage"} className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
          </div>
        </div>

        
      );
    }
    

