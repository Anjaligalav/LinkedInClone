import React, { useEffect } from 'react'
import UserLayout from '@/layout/UserLayout'
import DashboardLayout from '@/layout/DashBoardLayout'
import { useDispatch } from 'react-redux';
import { getMyConnectionRequests, acceptConnectionRequest } from '@/config/redux/action/authAction';
import { useSelector } from 'react-redux';
import styles from "./style.module.css"
import { BASE_URL } from '@/config/index';
import { useRouter } from 'next/router';

export default function MyConnectionsPage() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(()=>{
    dispatch(getMyConnectionRequests({token: localStorage.getItem("token")}));
  },[])

  useEffect(()=>{
    if(authState.connectionRequest.length!==0){
      console.log(authState.connectionRequest);
    }
  },[authState.connectionRequest])

  return (
    <UserLayout>
          <DashboardLayout>
            <div style={{display:"flex",flexDirection:"column",gap:"1.2rem"}}>
              <h4>My Connections</h4>
            {authState.connectionRequest.length===0 && <h1>No Connection Request Pending</h1>}
            
            {authState.connectionRequest.length!==0 && authState.connectionRequest.filter((request) => request.status === null).map((request,index) => {
              
              return(
              <div onClick={() => router.push(`/view_profile/${request.userId.username}`)} key={index} className={styles.userCard}>
                <div style={{display:"flex",alignItems:"center",gap:"1.2rem",justifyContent:"space-between"}}>
                  <div className={styles.profilePicture}>
                    <img src={`${BASE_URL}/${request.userId.profilePicture}`} alt="" />
                  </div>
                  <div className={styles.userInfo}>
                    <h1>{request.userId.name}</h1>
                    <p>{request.userId.email}</p>
                  </div>

                  <button onClick={(e)=>{
                    e.stopPropagation();
                    dispatch(acceptConnectionRequest({token: localStorage.getItem("token"),connectionId: request._id,action:"accept"}));

                  }} className={styles.connectedButton}>Accept</button>
                </div>
              
              </div>

              )
              })}

              <h4>My Network</h4>
              {authState.connectionRequest.length!==0 && authState.connectionRequest.filter((request) => request.status !== null).map((request,index) => {
              
              return(
              <div onClick={() => router.push(`/view_profile/${request.userId.username}`)} key={index} className={styles.userCard}>
                <div style={{display:"flex",alignItems:"center",gap:"1.2rem",justifyContent:"space-between"}}>
                  <div className={styles.profilePicture}>
                    <img src={`${BASE_URL}/${request.userId.profilePicture}`} alt="" />
                  </div>
                  <div className={styles.userInfo}>
                    <h1>{request.userId.name}</h1>
                    <p>{request.userId.email}</p>
                  </div>
                </div>
              
              </div>

              )
              })}

            </div>

            
          </DashboardLayout>
    </UserLayout>
        
  )
}
