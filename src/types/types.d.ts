interface IEvent {
  year: number;
  description: string;
}

interface IDataContent {
  id: number;
  countNumber: number;
  name: string;
  events: Array<IEvent>;
}

interface IPointData {
  id: number;
  label: string;
  content: React.ReactNode;
}

interface ICarouselNav {
  activeIndex: number;
  dataLength: number;
  handleNext: () => void;
  handlePrev: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

interface ICommonButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
