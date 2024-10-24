import { FormEvent, useState } from "react";
import styles from "./style.module.css";
import { TodoProps } from "../../types";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useModal } from "../../hooks/ModalHook";
import { useTodo } from "../../hooks/TodoHook";

const Modal = () => {
    const [ todoText, setTodoText ] = useState<string>('');
    const { isModalOpen, closeModal } = useModal();
    const { addTodo } = useTodo(); // Access addTodo from context

    const handleAddClick = (e:FormEvent) => {
        e.preventDefault();

        // Create a new todo object
        const newTodo: TodoProps = {
            id: Date.now(),
            item: todoText,
            category: "Uncategorized",
            completed: false
        };
        
        addTodo(newTodo);

        setTodoText("");
        
        closeModal();
    };


    if (!isModalOpen) return null;

  return (
    <>
        <div className={styles.modalOverlay} aria-modal="true" role="dialog">
            <div className={styles.modalBackground}></div>

            <div className={styles.modalContent}>
                <span className={styles.modalCloseButton}><IoCloseCircleSharp onClick={closeModal} /></span>

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
    </>
  )
}

export default Modal;