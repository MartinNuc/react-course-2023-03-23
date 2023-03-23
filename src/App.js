import logo from './logo.svg';
import './App.css';
import { Table } from './table/Table';

function App() {
  return (
    <Table rows={5} columns={3} />
  );
}

export default App;
