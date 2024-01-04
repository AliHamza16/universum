import React from "react";
import styles from "./Footer.module.css";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";

export default function Footer() {
  return (
    <div id={styles.footer}>
      <div id="logos">
        <a href="">
          <img className={styles.logo} src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/universumdergi/">
          <img className={styles.logo} src={instagram} alt="instagram" />
        </a>
        <a href="">
          <img className={styles.logo} src={twitter} alt="twitter" />
        </a>
      </div>
      <span id={styles.copyright}>&copy; 2024 Liber Medya</span>
    </div>
  );
}
