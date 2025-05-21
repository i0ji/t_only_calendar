import styles from './App.module.scss';
import DateCarousel from './components/DateCarousel/DateCarousel';

console.log('21.05.25/0.0.1');

export default function App() {
  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <hr />
        <h1>
          Исторические
          <br /> даты
        </h1>
      </div>




      <DateCarousel />
      {/* <DateSlider/> */}
    </section>
  );
}
