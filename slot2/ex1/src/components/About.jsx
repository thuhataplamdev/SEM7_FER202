//Khai báo đối tượng Student gồm id,name,age,avatar,grade
// In thông tin của h1,p

function About(){

    const student ={
        id:1,
        name:"Hà",
        age:21,
        avatar:"/images/avt.png",
        grade:"12C3"
    }
    return(
        <>
        <h1>This is Student informations</h1>
        <p>ID: {student.id}</p>
        <p>name: {student.name}</p>
        <img src={student.avatar} />
        <p>grade: {student.grade}</p>
        </>
    );
}
export default About;