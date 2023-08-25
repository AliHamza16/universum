import React from "react";
import styles from "./Card.module.css";
import { setGlobalState } from "../../../../../state";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  const { post } = props;
  return (
    <div
      className={styles.card}
      onClick={() => {
        if (!isMobile) {
          setGlobalState("post", post);
          navigate("/post/" + post.id);
        } else {
          if (post.pdf) {
            window.location.href = post.pdf.url;
          } else {
            setGlobalState("post", post);
          }
        }
      }}
    >
      <div style={{ position: "relative" }}>
        <img src={post.featuredImage.url} id={styles.featuredImage} alt="" />
        <div id={styles.category}>{post.categories[0].name}</div>
      </div>
      <div
        style={{ padding: ".5em", display: "flex", flexDirection: "column" }}
      >
        <span id={styles.title}>{post.title}</span>
        <span id={styles.abstract}>
          {post.abstract.slice(0, 120)}
          {post.abstract.trim() ? "..." : null}
        </span>
      </div>
    </div>
  );
}
