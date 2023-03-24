import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import { DialogBaseProps } from "../types";
import XMarkSVG from "./../../../assets/x-mark.svg";
import styles from "./DialogBase.module.css";
const DialogBase = ({ children, title, clickAwayHandler }: DialogBaseProps) => {
  return (
    <ClickAwayListener clickAwayHandler={clickAwayHandler}>
      <div className={styles.dialog}>
        <header className={styles.header}>
          <button className={styles.closeButton} onClick={clickAwayHandler}>
            <img
              src={XMarkSVG}
              alt="Close"
              className={styles.closeSVG}
              style={{ width: `80%` }}
            ></img>
          </button>
          <h1
            style={{
              textAlign: `center`,
              margin: `0`,
            }}
          >
            {title}
          </h1>
        </header>
        {children}
      </div>
    </ClickAwayListener>
  );
};

export default DialogBase;
