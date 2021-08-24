//Styles must be imported here
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  // const [session, loading] = useSession();

  // let userData = loading
  //   ? []
  //   : Object.entries(session.user).map((param, i) => {
  //       return (
  //         <div key={i} className={styles.row}>
  //           {param[0]} {param[1]}
  //         </div>
  //       );
  //     });

  return (
    <div className={styles.container}>
      <button className={styles.button}>LOG OUT</button>
      <div className={styles.userRow}></div>
    </div>
  );
};

export default Navbar;
