import { JSX } from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😔</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутствует
      </p>
    </div>
  );
};

export default NotFoundBlock;
