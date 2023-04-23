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

// JAVASCRIPT WALA PART AAKR KARUNGA ABHI BAHAR JARA HU :)

// Jab playlist me title daalo to "#{video_no}: {video_title}"
// Ya fir jo alag do chije hai unme hi karlo apna   