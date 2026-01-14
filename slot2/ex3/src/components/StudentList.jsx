import listOfStudent from "../data/listOfStudent";
import About from "./About";

const StudentList = () => {
  return (
    <div className="container mt-4">
      <About />
      <div className="row mt-4">
        {listOfStudent.map((student) => (
          <div className="col-md-4 mb-4" key={student.id}>
            <div className="card text-center h-100">
              <img
                src={student.avt}
                alt={student.name}
                className="rounded-circle mx-auto mt-3"
                style={{ width: "80px", height: "80px" }}
              />
              <div className="card-body">
                <h5>{student.name}</h5>
                <p>Age: {student.age}</p>
                <p>Major: {student.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
