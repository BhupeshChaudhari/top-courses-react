import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  console.log("Inside Card");
  console.log(course);

  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;

  function clickHandler() {
    if (likedCourse.includes(course.id)) {
      // already liked
      setLikedCourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // not already liked
      if (likedCourse.length === 0) {
        setLikedCourse(course.id);
      } else {
        setLikedCourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <>
      <div className="w-[300px] bg-slate-800 rounded-md overflow-hidden">
        <div className="relative">
          <img src={course.image.url} />

          <div className="w-[40px] h-[35px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center">
            <button onClick={clickHandler}>
              {likedCourse.includes(course.id) ? (
                <FcLike fontSize="1.75rem" />
              ) : (
                <FcLikePlaceholder fontSize="1.75rem" />
              )}
              ;
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-white font-semibold text-lg leading-6">
            {course.title}
          </p>
          <p className="text-white mt-2">
            {course.description.length > 100
              ? course.description.substr(0, 100) + "..."
              : course.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
