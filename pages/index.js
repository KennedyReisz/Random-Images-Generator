import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.containerHome}>
      <title>Home</title>
      <h1 className={styles.homeTitle}>Which image generator do you want?</h1>

      <div className={styles.buttonsArea}>
        <a className={styles.buttons} href="/cat">
          Cat
        </a>
        <a className={styles.buttons} href="/fox">
          Fox
        </a>
        <a className={styles.buttons} href="/duck">
          Duck
        </a>
      </div>
    </section>
  );
}
