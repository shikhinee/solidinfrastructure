//Next, React (core node_modules) imports must be placed here
import { useState, useEffect } from "react";

import axios from "axios";

//Styles must be impoerted here
//import styles from '../PATH/TO/sass/templates/STYLES.module.scss'
import styles from "../../sass/templates/Dash.module.scss";

//Fetchers must be imported here
//import useFETCHER from '../PATH/TO/tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from '../PATH/TO/layouts/LAYOUT'
import CenterLayout from "../../layouts/Center";

//Component must be imported here
//import COMPONENT from '../PATH/TO/components/COMPONENT'

const DashPage = (props) => {
  const [requestData, setRequestData] = useState([]);

  // {UserName, FullName, PhoneNumber}

  useEffect(() => {
    axios.get("/api/request").then((data) => {
      setRequestData(data.data);
    }) 

    // setRequestData([
    //   {
    //     id: 1,
    //     userName: "JSKHAN",
    //     fullName: "Jargalsaikhan Erdenetsetseg",
    //     phoneNumber: "94363495",
    //   },
    //   {
    //     id: 2,
    //     userName: "JSKHAN",
    //     fullName: "Jargalsaikhan Erdenetsetseg",
    //     phoneNumber: "94363495",
    //   },
    //   {
    //     id: 3,
    //     userName: "JSKHAN",
    //     fullName: "Jargalsaikhan Erdenetsetseg",
    //     phoneNumber: "94363495",
    //   },
    //   {
    //     id: 4,
    //     userName: "JSKHAN",
    //     fullName: "Jargalsaikhan Erdenetsetseg",
    //     phoneNumber: "94363495",
    //   },
    // ]);
  }, []); 

  console.log(requestData)

  return (
    <CenterLayout>
      <main className={styles.container}>
        <div className={`${styles.row} ${styles.head}`}>
          <div className={styles.column}>USERNAME</div>
          <div className={styles.column}>FULLNAME</div>
          <div className={styles.column}>PHONENUMBER</div>
          <div className={styles.column}>ROLE</div>          
          <div className={styles.column}>ACTIONS</div>
        </div>
        {requestData.map((request, index) => {
          return (
            <div className={styles.row} key={index}>
              <div className={styles.column}>{request.username}</div>
              <div className={styles.column}>{request.fullname}</div>
              <div className={styles.column}>{request.phoneNumber}</div>
              <div className={styles.column}>
                <button className={styles.action}>Accept</button>
                <button className={styles.action}>Deny</button>
              </div>
            </div>
          );
        })}
      </main>
    </CenterLayout>
  );
};

export default DashPage;
