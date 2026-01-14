import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function About(){
    const student ={
        id:1,
        name:"Hà",
        age:21,
        avatar:"/images/avt.jpg",
        grade:"12C3"
    }
    return (
    <div className="container mt-4">
      <h1 className="mb-4">Student Information</h1>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={student.avatar}
          className="card-img-top"
          alt="student avatar"
        />

        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>

          <p className="card-text">
            <strong>ID:</strong> {student.id} <br />
            <strong>Age:</strong> {student.age} <br />
            <strong>Grade:</strong> {student.grade}
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;