import './App.css';
import { Table } from './table/Table';
import { CounterButton } from './counter-button/CounterButton';

function App() {
  return <>
    <CounterButton />
    <Table rows={5} columns={3} />
  </>;
}

export default App;
