import './App.css';
import { Table } from './table/Table';
import { CounterButton } from './counter-button/CounterButton';
import {NumberGeneratorFn} from './number-generator/NumberGeneratorFn';

function App() {
  return <>
    <NumberGeneratorFn pregeneratedCount={5} />
    <CounterButton />
    <Table rows={5} columns={3} />
  </>;
}

export default App;
