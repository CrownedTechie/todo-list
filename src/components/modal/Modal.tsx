import styles from "./style.module.css";

const Modal = () => {
  return (
    <>
        <div className={styles.modalOverlay} aria-modal="true" role="dialog">
            <div className={styles.modalBackground}></div>

            <div className={styles.modalContent}>
                <form action="" className={styles.modalForm}>
                    <textarea
                        role="textbox"
                        required
                        className={styles.modalTextarea}
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