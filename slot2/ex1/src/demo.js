// const tuoi = 21;
// const name = "Trịnh Thị Thu Hà";
// const greeting = tuoi < 18 ? "Chào bạn trẻ!" : "Chào người lớn!";
// console.log(greeting);
// console.log(`Xin chào, tôi tên là ${name} và tôi ${tuoi} tuổi.`);
const greet = (name, tuoi = 18) => {
  const greeting = tuoi < 18 ? "Chào bạn trẻ!" : "Chào người lớn!";
  console.log(greeting);
  console.log(`Tôi tên là ${name} và tôi ${tuoi} tuổi.`);
}
greet("Trịnh Thị Thu Hà", 21);
greet("Nguyễn Văn A");
// tính bình phương của 1 số x 
console.log("--------------------");
const square = x => x * x;
console.log(`Bình phương của 5 là: ${square(5)}`);
// in một đối tượng student gồm name,age,grade
console.log("--------------------");
const printStudent = (student) => {
  const { name, age, grade } = student;
  console.log(`Tên: ${name}, Tuổi: ${age}, Lớp: ${grade}`);
}
const student1 = { name: "Trịnh Thị Thu Hà", age: 21, grade: "12/3" };
printStudent(student1);
console.log("--------------------");
// khai báo 1 list of students và gọi hàm printStudent cho từng student trong list
const students = [
    {id:1,name:"Trịnh Thị Thu Hà", age:21, grade:"12.3"},
    {id:2,name:"Ng Văn A", age:21, grade:"12.3"},
    {id:3,name:"Ng Văn B", age:18, grade:"12.3"},
    {id:4,name:"Ng Văn C", age:10, grade:"5.4"},
    {id:5,name:"Ng Văn D", age:21, grade:"10.1"},
    {id:6,name:"Ng Văn E", age:21, grade:"9.3"},
    {id:7,name:"Ng Văn F", age:21, grade:"12.3"},
    {id:8,name:"Ng Văn G", age:21, grade:"12.3"},
    {id:9,name:"Ng Văn H", age:21, grade:"12.3"},
    {id:10,name:"Ng Văn I", age:21, grade:"12.3"}
];
students.forEach(student => printStudent(student));
console.log("--------------------");
students.forEach(({id,name,age,grade})=>{
    console.log(`Id: ${id},Tên: ${name},Tuổi: ${age},Lớp: ${grade}`)
})
console.log("--------------------");
students.map(student => printStudent(student));
console.log("--------------------");
const[studentA,studentB,...restStudents]=students;
console.log("Student A:",studentA);
console.log("Student B:",studentB);
console.log("Rest of students:",restStudents);
console.log("--------------------");
restStudents.map(s=> console.log(`Id: ${s.id},Tên: ${s.name},Tuổi: ${s.age},Lớp: ${s.grade}`));
console.log("--------------------");
//thêm một student mới vào danh sách students sử dụng spread operator

const newStd={id:11, name:"MM",age:10, grade:"4B2"};
const updatedStd=[...students,newStd];
updatedStd.map(s=>console.log(`Id: ${s.id},Tên: ${s.name},Tuổi: ${s.age},Lớp: ${s.grade}`));