import React, { useState } from "react";
import { createPortal } from "react-dom";
import NewCartDialog from "../CartManageDialogs/Dialogs/NewCartDialog/NewCartDialog";
import styles from "./SiteHeading.module.css";

const SiteHeading = () => {
  const [showNewCartDialog, setShowNewCartDialog] = useState(false);

  return (
    <>
      {showNewCartDialog &&
        createPortal(<NewCartDialog setShowDialog={setShowNewCartDialog} />, document.body)}
      <header className={styles.siteHeading}>
        <div>
          <h1
            style={{
              fontWeight: `600`,
              fontSize: `2.4rem`,
              margin: 0,
            }}
          >
            Dummy Carts Dashboard
          </h1>
          <h4
            style={{
              margin: 0,
              letterSpacing: `0.15rem`,
            }}
          >
            By Tomasz Kierzenkowski
          </h4>
        </div>
        <button
          className={styles.newCartButton}
          onClick={() => {
            setShowNewCartDialog(true);
          }}
        >
          <span style={{ textTransform: `none` }}>Add a new cart</span>
        </button>
      </header>
    </>
  );
};

export default SiteHeading;
