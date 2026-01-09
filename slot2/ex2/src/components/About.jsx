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
    return(
        <>
        <div className="container mt-4">
      <h1 className="mb-4">Student Information</h1>

      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={student.avatar}
          alt="student avatar"
        />

        <Card.Body>
          <Card.Title>{student.name}</Card.Title>

          <Card.Text>
            <strong>ID:</strong> {student.id} <br />
            <strong>Age:</strong> {student.age} <br />
            <strong>Grade:</strong> {student.grade}
          </Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </div>
        </>
    );
}
export default About;