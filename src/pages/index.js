import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>my posts</h1>
        <ul className={styles.posts}>
          <li>
            <p className={styles.postContent}>
              since 2016 I've started working professionally as a frond-end
              developer.i have rich experience working with micro-services,
              popular design-pattrens, ComponentsBase Framework(i love react)
              and styling code to make sure delivering simple
            </p>
            <p className={styles.postDate}>2/23/2018</p>
          </li>
          <li>
            <p className={styles.postContent}>
              since 2016 I've started working professionally as a frond-end
              developer.i have rich experience working with micro-services,
              popular design-pattrens, ComponentsBase Framework(i love react)
              and styling code to make sure delivering simple
            </p>
            <p className={styles.postDate}>2/23/2018</p>
          </li>
          <li>
            <p className={styles.postContent}>
              since 2016 I've started working professionally as a frond-end
              developer.i have rich experience working with micro-services,
              popular design-pattrens, ComponentsBase Framework(i love react)
              and styling code to make sure delivering simple
            </p>
            <p className={styles.postDate}>2/23/2018</p>
          </li>
        </ul>
        <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.buttonContent}>Add New Tweet</button>
        </form>
      </main>
    </div>
  );
}
