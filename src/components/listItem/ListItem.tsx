import styles from './style.module.css';
import { LuDelete } from "react-icons/lu";
import { Button } from "../index";
import { api } from '../../api/axios';

const ListItem = () => {

    const fetchData = async () => {
        const response = await api.get('/todos');
        console.log(response);
    }

    fetchData();

    

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