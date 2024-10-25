import styles from "./style.module.css";
import { FcSearch } from "react-icons/fc";


const SearchBar = () => {
    return ( 
        <div className={styles.searchBox}>
            <input
            type="text"
            className={styles.searchBar}
            placeholder="Search tasks..."
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            />

            <FcSearch />
        </div>
    );
}
 
export default SearchBar;