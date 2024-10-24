import { FormEvent, useContext, useState } from "react";
import styles from "./style.module.css";
import { TodoProps } from "../../types";
import { TodoContext } from "../../context/TodoContext";
import { ModalProps } from "../types";

const Modal = ({isModal} : ModalProps) => {
    const [ todoText, setTodoText ] = useState<string>('');
    const { addTodo } = useContext(TodoContext); // Access addTodo from context

    const handleAddClick = (e:FormEvent) => {
        e.preventDefault();

        // Create a new todo object
        const newTodo: TodoProps = {
            id: Date.now(),
            item: todoText,
            category: "Uncategorized",
        };
        
        addTodo(newTodo);

        setTodoText("");
    };

  return (
    <>
    {
        isModal ? (
        <div className={styles.modalOverlay} aria-modal="true" role="dialog">
            <div className={styles.modalBackground}></div>

            <div className={styles.modalContent}>
                <form onSubmit={handleAddClick} className={styles.modalForm}>
                    <textarea
                        role="textbox"
                        required
                        className={styles.modalTextarea}
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        placeholder="Add a Todo"></textarea>
                                
                    <button 
                        type="submit" 
                        className={styles.modalButton}>
                        Add
                    </button>
                </form>
            </div>
        </div>
        ) : null
    }
        

    </>
  )
}

export default Modal;