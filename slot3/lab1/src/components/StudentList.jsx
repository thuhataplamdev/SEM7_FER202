import {listOfStudent} from "../data/student";
import { Container, Row, Col, Card, Button } from "react-bootstrap";    

function StudentList(){
    return(
        <>
        <Container className="mt-4">
        <Row className="justify-content-center mt-4">
            {listOfStudent.map((student) => (
          <Col md={4} className="mb-4" key={student.id}>
          <Card className="text-center h-100">
          <Card.Img
            src={student.avt}
            alt={student.name}
            className="rounded-circle mx-auto mt-3"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />

          <Card.Body>
            <Card.Title>{student.name}</Card.Title>
            <Card.Text>Age: {student.age}</Card.Text>
            <Card.Text>Major: {student.major}</Card.Text>
            <Button variant="outline-primary" className="mt-auto w-50">
              View Details
            </Button>
          </Card.Body>
          </Card>
          </Col>
    ))}
  </Row>
</Container>
        </>
    );
}
export default StudentList;