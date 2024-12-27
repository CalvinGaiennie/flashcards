import { useState } from "react";
import styles from "./Card.module.css";

function Card({ term, definition }) {
  const [frontOut, setFrontOut] = useState(true);

  function flip() {
    if (frontOut == true) {
      setFrontOut(false);
    } else {
      setFrontOut(true);
    }
  }

  return (
    <div className={styles.card} onClick={flip}>
      {frontOut ? (
        <p style={{ fontSize: "20px" }}>{term}</p>
      ) : (
        <p style={{ fontSize: "16px" }}>{definition}</p>
      )}
    </div>
  );
}

export default Card;
