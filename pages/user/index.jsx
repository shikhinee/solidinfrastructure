//Next, React (core node_modules) imports must be placed here

//Styles must be impoerted here
//import styles from '../PATH/TO/sass/templates/STYLES.module.scss'
import styles from '../../sass/template/Signup.module.scss'

//Fetchers must be imported here
//import useFETCHER from '../PATH/TO/tools/useFETCHER'

//Layout must be imported here
//import LAYOUT from '../PATH/TO/layouts/LAYOUT'
import CenterLayout from "../../layouts/Center";

//Component must be imported here
//import COMPONENT from '../PATH/TO/components/COMPONENT'

const UserPage = (props) => {
  return (
    <CenterLayout>
      <main className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="bankName">BANKNAME</label>
          <input type="text" name="bankName" id="bankName" />

          <label htmlFor="bankNumber">BANKNUMBER</label>
          <input type="text" name="bankNumber" id="bankNumber" />

          <label htmlFor="changePassword">CHANGEPASSWORD</label>
          <input type="text" name="changePassword" id="changePassword" />

          <button type="submit">SUBMIT</button>
        </form>
      </main>
    </CenterLayout>
  );
};

export default UserPage;
