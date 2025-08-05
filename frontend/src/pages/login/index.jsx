import UserLayout from '@/layout/UserLayout'
import React, { use } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./style.module.css"
import { useEffect, useState } from 'react';
import { loginUser, registerUser } from '@/config/redux/action/authAction';
import { emptyMessage } from '@/config/redux/reducer/authReducer';
// import { emptyMessage } from '@/config/redux/reducer/authReducer';

export default function LoginComponent() {

  const authState = useSelector((state) => state.auth);

  const router = useRouter();

  const dispatch = useDispatch();

  const [userLoginMethod, setUserLoginMethod] = useState(false);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
const [name, setName] = useState("");


  useEffect(() => {
    if(authState.loggedIn){
      router.push("/dashboard");
    }
  }, [authState.loggedIn]);

  useEffect(() => {
    if(localStorage.getItem("token")){
      router.push("/dashboard");
    }
  },[])

  useEffect(() => {
    dispatch(emptyMessage());
  }, [userLoginMethod]);

  const handleLogin = () => {
    console.log("login");
    dispatch(loginUser({email,password}));
  }
  const handleRegister = () =>{
    console.log("register");
    dispatch(registerUser({email,password,username,name}));
  }

  return (
    
  <UserLayout>
        <div className={styles.container}>
        <div className={styles.cardContainer}>

          <div className={styles.cardContainer_left}>
              <p className={styles.card_left_heading}>{userLoginMethod ? "Sign In":"Sign Up"}</p>
              <p style={authState.isError ? {color:"red"}:{color:"green"}}>{authState.message.message}</p>

              <div className={styles.inputContainers}>

                {!userLoginMethod && 
                <div className={styles.inputRow}> 
                  <input onChange={(e)=>setUsername(e.target.value)} className={styles.inputField} type='text' placeholder='Username' />
                  <input onChange={(e)=>setName(e.target.value)} className={styles.inputField} type='text' placeholder='Name' />
                </div>}
                <input onChange={(e)=>setEmail(e.target.value)} className={styles.inputField} type='email' placeholder='Email' />
                <input onChange={(e)=>setPassword(e.target.value)} className={styles.inputField} type='password' placeholder='Password' />

                <button onClick={()=>{
                  if(userLoginMethod){
                    handleLogin();
                  }else{
                    handleRegister();
                  }
                }} className={styles.buttonWithoutline}>
                  <p>{userLoginMethod ? "Sign In":"Sign Up"}</p>
                </button>
              </div>
              
          </div>

          <div className={styles.cardContainer_right}>
            
                {userLoginMethod ? <p>Don't have an account</p> :<p>Already have an account</p> }
                
                <button onClick={()=>{
                  setUserLoginMethod(!userLoginMethod);
                }} style={{backgroundColor:"white",color:"black"}} className={styles.buttonWithoutline}>
                  <p>{userLoginMethod ? "Sign Up":"Sign In"}</p>
                </button>
            
                
          </div>

        </div>
      </div>
  </UserLayout>
    
  )
}
