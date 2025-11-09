import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import Card from "@/components/Card";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Glossary</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.cardGrid}>
              <Card
                imageUrl="https://picsum.photos/300/200"
                title="Policy 1"
                summary="This is policy 1 summary."
                link="https://example.com/1"
              />
              <Card
                imageUrl="https://picsum.photos/300/200"
                title="Policy 2"
                summary="This is policy 2 summary."
                link="https://example.com/2"
              />
              <Card
                imageUrl="https://picsum.photos/300/200"
                title="Policy 3"
                summary="This is policy 3 summary."
                link="https://example.com/3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
