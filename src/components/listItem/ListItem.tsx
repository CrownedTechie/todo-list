import styles from './style.module.css';
import { LuDelete } from "react-icons/lu";
import { Button } from "../index";
import { ListItemProps } from '../types';

const ListItem = ({item, handleDelete, handleComplete, isComplete}: ListItemProps ) => {
    return ( 
        <li className={`${styles.li}  `}>
            <div className={`${styles.div1} ${isComplete ? styles.completed : null} `}>
                <input 
                    type="checkbox"  
                    checked={isComplete}
                    onChange={handleComplete}
                />
                {item}
            </div>

            <div className={styles.div2}>
                <Button handleClick={handleComplete} variant='primary'>Mark Complete</Button>
                <LuDelete onClick={handleDelete} />
            </div>
           
        </li>
     );
}
 
export default ListItem;