import FlipNumbers from 'react-flip-numbers';

export default function AnimatedNumber({
  number,
}: {
  number: number;
}) {
  return (
    <FlipNumbers
      height={40}
      width={30}
      color="red"
      background="#fff"
      play
      perspective={100}
      numbers={number.toString()}
    />
  );
}
