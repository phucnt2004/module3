import './App.css';
import StudentList from './components/StudentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const list = [
  {
    id : "01",
    name : "Phuc",
    class : "A1"
  },
  {
    id : "02",
    name : "Phuc2",
    class : "A2"
  },
  {
    id : "03",
    name : "Phuc3",
    class : "A3"
  },
  {
    id : "04",
    name : "Phuc4",
    class : "A4"
  },
]
function App() {
  return (
    <>
    <StudentList list={list}/>
    </>
  );
}

export default App;
