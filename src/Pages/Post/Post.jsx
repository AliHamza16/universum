import React from "react";
import { useGlobalState } from "../../../state";
import { useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";
import styles from "./Post.module.css";

export default function Post() {
  const [data] = useGlobalState("data");
  if (!data) return;
  const { id } = useParams();
  const post = data.posts.filter((x) => x.id === id)[0];
  if (post.pdf) {
    if (isMobile) {
      window.location.href = post.pdf.url;
      return;
    }
    return (
      <div>
        <object
          type="application/pdf"
          id={styles.pdf}
          data={post.pdf.url + "#toolbar=0&scrollbar=0"}
        ></object>
      </div>
    );
  }
  return (
    <div
      id={styles.content}
      dangerouslySetInnerHTML={{ __html: post.content.html }}
    ></div>
  );
}
