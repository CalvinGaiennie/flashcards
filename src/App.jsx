import styles from "./App.module.css";
import CardList from "./components/CardList";

function App() {
  return (
    <div className={styles.flex}>
      <CardList />
    </div>
  );
}

export default App;
