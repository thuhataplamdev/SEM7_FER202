import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { student } from '../data/student';
function Student({student}){
    console.log(student);
    return(
        <>
        <Card style={{ width:'18rem'}}>
        <Card.Img variant="top" src={student.avt}   ></Card.Img>
        <Card.Body>
            <Card.Title>ID: {student.id}</Card.Title>
            <Card.Text>Name: {student.name}</Card.Text>
        </Card.Body>
        <Button className ="w-100">View Details</Button>
        </Card>
        </>
    );
}
export default Student;