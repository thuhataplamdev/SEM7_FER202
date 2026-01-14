import './App.css';
// import Student from './components/Student';
import StudentList from './components/StudentList';
import {listOfStudent } from './data/student';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-4">Student List</h1>
      <StudentList student={listOfStudent}/>
    </div>
  );
}

export default App;
