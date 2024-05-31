import styles from './Loading.module.sass';

function Loading() {
  return (
    <div className={`${styles.loadingWrapper} d-flex justify-content-center align-items-center`}>
      <div className={styles.basic}></div>
    </div>
  );
}

export default Loading;
