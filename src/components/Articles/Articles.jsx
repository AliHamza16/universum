import { setGlobalState } from "../../../state";
import styles from "./Articles.module.css";
import Card from "./components/Card/Card.jsx";

export default function Articles(props) {
  if (props.data) {
    setGlobalState("data", props.data);
  }
  return (
    <div id={styles.articles}>
      {!props.loading
        ? props.data.posts
            .filter(
              props.filter
                ? (x) => {
                    return (
                      x.title
                        .toLowerCase()
                        .includes(props.filter.toLowerCase()) ||
                      x.abstract
                        .toLowerCase()
                        .includes(props.filter.toLowerCase())
                    );
                  }
                : (x) => x,
            )
            .map((post) => <Card key={post.id} post={post}></Card>)
        : null}
    </div>
  );
}
