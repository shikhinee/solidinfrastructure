//Next, React (core node_modules) imports must be placed here

//Styles must be imported here
import styles from './Center.module.scss'

//Components must be imported here
import Navbar from '../../components/Navbar';

const CenterLayout = ({children, ...props}) => {
    return (
        <div className={styles.container}>
            <Navbar />
            {children}
        </div>
    )
};

export default CenterLayout;