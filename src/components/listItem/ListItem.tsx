import styles from './style.module.css';
import { LuDelete } from "react-icons/lu";
import { Button } from "../index";

const ListItem = () => {
    return ( 
        <li className={styles.li}>
            <div className={styles.div1}>
                <input type="checkbox" name="" id="" />
                Go to bed
            </div>
            

            <div className={styles.div2}>
                <Button variant='primary'>Mark Complete</Button>
                <LuDelete />
            </div>
           
        </li>
     );
}
 
export default ListItem;