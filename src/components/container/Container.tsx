import styles from "./style.module.css";
import { ContainerProps } from "../types";


const Container = ({children} : ContainerProps) => {
    return ( 
        <div className={styles.container}>
            {children}
        </div>
     );
};
 
export default Container;