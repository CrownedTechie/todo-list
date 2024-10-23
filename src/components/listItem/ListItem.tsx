import styles from './style.module.css';
import { LuDelete } from "react-icons/lu";
import { Button } from "../index";
import { ListItemProps } from '../types';

const ListItem = ({item}: ListItemProps ) => {
    return ( 
        <li className={styles.li}>
            <div className={styles.div1}>
                <input type="checkbox" name="" id="" />
                {item}
            </div>
            

            <div className={styles.div2}>
                <Button variant='primary'>Mark Complete</Button>
                <LuDelete />
            </div>
           
        </li>
     );
}
 
export default ListItem;