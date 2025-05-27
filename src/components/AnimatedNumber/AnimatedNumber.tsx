import FlipNumbers from 'react-flip-numbers';
import styles from './AnimatedNumber.module.scss';

export default function AnimatedNumber(props: IAnimatedNumber) {
  return (
    <FlipNumbers
      height={140}
      width={100}
      perspective={600}
      play
      color={props.color}
      numberStyle={{ fontSize: '7rem', fontWeight: 'bold' }}
      numbers={props.numbers.toString()}
      // nonNumberStyle={{ fontSize: '8rem', fontWeight: 'bold' }}
    />
  );
}
