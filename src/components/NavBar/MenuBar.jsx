import { PiCrownFill } from 'react-icons/pi';
import styles from "./Menubar.module.css";
import React, { useContext } from 'react';
import { OrderCountCtx } from "../App";

const MenuBar = () => {
  const { isOpen, setIsOpen } = useContext(OrderCountCtx);
 console.log(isOpen)
  return (
    <>
      {isOpen && (
        <div className={styles.parentContainer}>
          <div className={styles.firstSect}>
            <p>
              <PiCrownFill />
              Execlusive At Croma
            </p>
            <p>Top Brands</p>
            <p>Gift Card</p>
          </div>
          <div className={styles.secSect}>
            <h3>Shop by Cateory</h3>
            <p>Televisions</p>
            <p>Washing machines</p>
            <p>Audio</p>
            <p>Kitchen Appliances</p>
            <p>Health & Fitness</p>
            <p>Mobiles</p>
            <p>Tablets</p>
          </div>
        </div>
      )}
    </>
  );
};
export default MenuBar;
