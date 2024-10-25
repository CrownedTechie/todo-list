import { SearchBarProps } from "../types";
import styles from "./style.module.css";
import { FcSearch } from "react-icons/fc";

const SearchBar = ({searchValue, handleSearch} : SearchBarProps) => {
    return ( 
        <div className={styles.searchBox}>
            <input
            type="text"
            className={styles.searchBar}
            placeholder="Search tasks..."
            value={searchValue}
            onChange={handleSearch}
            />

            <FcSearch />
        </div>
    );
}
 
export default SearchBar;