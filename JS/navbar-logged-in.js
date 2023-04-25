// Things currently required from database:
// .top 3 courses
// .and link to their resourses (inside res folder) i.e. image, title, description

// This part is for dynamic top3 courses heading
// These array should contain the top 3 most viewed courses in past week from the DataBase
let topCoursesArray = ["Course 1", "Course 2", "Course 3"];
// These are links corresponding to the respective courses
let topCoursesArrayLinks = ["#", "#", "#"];
let headerCourses = [
  document.getElementById("TC1"),
  document.getElementById("TC2"),
  document.getElementById("TC3"),
]
for(let i=0; i<3; i++){
  headerCourses[i].textContent = topCoursesArray[i];
  headerCourses[i].href = topCoursesArrayLinks[i];
}
////////////////////////////////////////////////////////

// This username will come from Db after starting the session
userName_fromDB = "dipeshhhh_cvs";

userName_show = document.getElementById("user-name");
userName_show.textContent = `${userName_fromDB}`; 