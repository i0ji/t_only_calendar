interface IEvent {
  year: number;
  description: string;
}

interface IDataContent {
  id: number;
  count_number: number;
  name: string;
  events: Array<IEvent>;
}

interface IPointData {
  id: number;
  label: string;
  content: React.ReactNode;
}
