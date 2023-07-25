import { FC } from "react";
import { closeModalSubject } from "../utils/modalSubject";
import styles from "./Modal.module.css";

const Modal: FC<{ show: boolean }> = ({ show }) => {
  const handleCloseModal = () => {
    closeModalSubject.next({});
  };

  return show ? (
    <>
      <div className={styles.darkBG} onClick={handleCloseModal} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={handleCloseModal}>
            x
          </button>
          <div className={styles.modalContent}>
            Are you sure you want to delete the item?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={handleCloseModal}>
                Delete
              </button>
              <button className={styles.cancelBtn} onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
