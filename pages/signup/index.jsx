//Next, React (core node_modules) imports must be placed here
import Link from "next/link";
import { useState } from "react";

//Styles must be impoerted here
//import styles from '../PATH/TO/sass/templates/STYLES.module.scss'
import styles from "../../sass/templates/Signup.module.scss";

//Fetchers must be imported here
//import useFETCHER from '../PATH/TO/tools/useFETCHER'
import axios from "axios";

//Layout must be imported here
//import LAYOUT from '../PATH/TO/layouts/LAYOUT'
import CenterLayout from "../../layouts/Center";

//Component must be imported here
//import COMPONENT from '../PATH/TO/components/COMPONENT'

const SignupPage = (props) => {
  const [status, setStatus] = useState({
    status: null,
    message: "",
  });
  const [isPopped, setIsPopped] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({
    userName: "",
    fullName: "",
    phoneNumber: "",
    password: "",
  });

  const changeHandler = (e) => {
    setSignUpInfo({
      ...signUpInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsPopped(true);
    axios.post("/api/request", signUpInfo)
    // .then((res) => {
    //   setStatus({
    //     status: res.status,
    //     message: res.data.message
    //   })
    // });
  };

  return (
    <CenterLayout>
      <main className={styles.container}>
        {isPopped && (
          <div className={styles.pop}>
            <div>
              <h1>status {status.status}</h1>
              <p>{status.message}</p>
              <Link href="/login">Go to Login</Link>
            </div>
          </div>
        )}
        <form onSubmit={submitHandler} className={styles.form}>
          <label htmlFor="userName">USERNAME</label>
          <input
            type="text"
            id="userName"
            name="userName"
            onChange={changeHandler}
            required
          />

          <label htmlFor="fullName">FULLNAME</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={changeHandler}
            required
          />

          <label htmlFor="phoneNumber">PHONENUMBER</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={changeHandler}
            required
          />

          <label htmlFor="password">PASSWORD</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={changeHandler}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </main>
    </CenterLayout>
  );
};

export default SignupPage;
