import React from "react";
import { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;

  console.log("Data in Cards - courses");
  console.log(courses);

  const [likedCourse, setLikedCourse] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      console.log("All Courses");
      console.log(allCourses);
      return allCourses;
    } else {
      // only specific cards data
      return courses[category];
    }
  }

  let allc = getCourses();
  console.log("All ", allc);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {allc.map((course) => {
          return (
            <Card
              course={course}
              key={course.id}
              likedCourse={likedCourse}
              setLikedCourse={setLikedCourse}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cards;
