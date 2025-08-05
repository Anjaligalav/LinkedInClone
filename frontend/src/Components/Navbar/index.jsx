import React from 'react'
import style from "./style.module.css"
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reset } from '@/config/redux/reducer/authReducer';
export default function NavbarComponent() {

    const dispatch = useDispatch();
    const router = useRouter();
    const authState = useSelector((state) => state.auth);
  return (
    <div className={style.container}>
        
        <nav className={style.navbar}>

            <h1 style={{cursor:"pointer"}}  onClick={() => router.push("/") }>Pro Connect</h1>

            <div className={style.navbarOptionContainer}>
                

                {authState.profileFeched && 
                <div style={{display:"flex",gap:"1.2rem"}}>
                    {/* <p>Hey, {authState.User.userId.name}</p> */}
                    <p onClick={() => router.push("/profile")} style={{fontWeight:"bold",cursor:"pointer"}}>Profile</p>
                </div>}

                {authState.profileFeched && 
                <div style={{display:"flex",gap:"1.2rem"}}>

                    <p onClick={() => {
                            localStorage.removeItem("token");
                            router.push("/login");
                            dispatch(reset());
                            }
                        } style={{fontWeight:"bold",cursor:"pointer"}}>logout</p>
                </div>}

                {!authState.profileFeched && 
                <div onClick={()=>{
                    router.push("/login")
                }} className={style.buttonJoin}>
                    <p>Be a Part</p>
                </div>}


                
            </div>

        </nav>
    </div>
  )
}
