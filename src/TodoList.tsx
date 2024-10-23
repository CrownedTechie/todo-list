import { api } from "./api/axios";



const TodoList = () => {

    const fetchData = async () => {
        const response = await api.get('/todos?limit=5');
        console.log(response.data);
    }

    fetchData();

    return ( 

     );
}
 
export default TodoList;