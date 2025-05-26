import styles from './FloatDescription.module.scss';

export default function FloatDescription() {
  return (
    <div className={styles.description}>
      <div className={styles.description_gradient} />
      <h2>
        Исторические <br />
        даты
      </h2>
    </div>
  );
}


