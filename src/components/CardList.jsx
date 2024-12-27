import Card from "./Card";

import styles from "./CardList.module.css";

function CardList() {
  return (
    <div className={styles.cardList}>
      <Card term={"term"} definition={"big long definiton"} />
      <Card term={"word"} definition={"super big long definiton"} />
      <Card term={"key"} definition={"value value value "} />
      <Card term={"term"} definition={"definiton plus more definition"} />
    </div>
  );
}

export default CardList;
