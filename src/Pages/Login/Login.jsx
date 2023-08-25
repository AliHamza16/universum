import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Login.module.css";

export default function Login() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [password, setPassword] = useState(localStorage.getItem("password"));
  const navigate = useNavigate();
  const showToastMessage = () => {
    toast.error("Kullanıcı adı veya şifre yanlış!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  useEffect(() => {
    if (
      import.meta.env.VITE_USER_NAME === localStorage.getItem("userName") &&
      import.meta.env.VITE_PASSWORD === localStorage.getItem("password")
    ) {
      navigate("/");
    }
  }, []);
  return (
    <div id={styles.login}>
      <div className={styles["login-card"]}>
        <ToastContainer></ToastContainer>
        <div id={styles["user-icon"]}>
          <FontAwesomeIcon
            icon={faUser}
            size={isMobile ? "1x" : "2x"}
            color="white"
          />
        </div>
        <span
          style={{
            fontFamily: "Verdana",
            marginBottom: "1em",
            fontSize: isMobile ? "0.8rem" : "1.1rem",
          }}
        >
          Üye Girişi
        </span>
        <input
          className={styles.input}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          placeholder="kullanıcı adı"
        />
        <input
          className={styles.input}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="şifre"
        />
        <button
          onClick={() => {
            localStorage.setItem("userName", userName);
            localStorage.setItem("password", password);
            if (
              userName === import.meta.env.VITE_USER_NAME &&
              password === import.meta.env.VITE_PASSWORD
            ) {
              navigate("/");
            } else {
              showToastMessage();
            }
          }}
        >
          GİRİŞ
        </button>
      </div>
      <span id={styles.desc}>
        Dergimizin herhangi bir sayısının basımını satın alarak kullanıcı adı ve
        şifreye erişebilirsiniz. Bu kullanıcı adı ve şifre ile oturum açarak web
        sitemiz üzerinden dergimizin o ana kadar ki basılmış ve daha sonra
        basılacak sayılarının dijital versiyonunu görebilirsiniz.
      </span>
    </div>
  );
}
