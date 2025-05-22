interface IEvent {
  year: number;
  description: string;
}

interface IDataSet {
  id: number;
  name: string;
  events: Array<IEvent>;
}

interface PointData {
  id: number;
  label: string;
  content: React.ReactNode;
}
