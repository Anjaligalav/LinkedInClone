import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import UserLayout from "@/layout/UserLayout";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();

  return (
    <UserLayout>
      <div className={styles.container}>
        <div className={styles.mainContainer}>

          <div className={styles.mainContainer_left}>
            <p>Connect with friends without Exaggeration</p>
            <p>A true social media platform with stories no buffs!</p>

            <div className={styles.buttonJoin} onClick={() => 
              router.push("/login")}>
              <p>Join Now</p>
            </div>
          </div>

          <div className={styles.mainContainer_right}>
            <img src="/images/connections.jpg" alt="" style={{width:"300px",height:"300px"}}/>
          </div>
        </div>

      </div>
    </UserLayout>
  );
}
