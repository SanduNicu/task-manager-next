import styles from "./page.module.scss";
import Tasks from "./tasks";

function Home() {
  return (
    <main className={styles.main}>
      <Tasks />
    </main>
  );
}

export default Home;
