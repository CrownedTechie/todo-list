import styles from "./style.module.css";
import { ButtonProps } from "../types";


const Button = ({children, variant} : ButtonProps) => {

    const variantClass = (() => {
        switch(variant) {
            case 'filled':
                return styles.filled;
            case 'outline':
                return styles.outline;
            case 'primary':
                return styles.primary;
        }
    }) ();


    return ( 
        <button  className={`${styles.button} ${variantClass}`}>
            <span className={styles.icon}>
                {children}
            </span>
        </button>
    );
};
 
export default Button;