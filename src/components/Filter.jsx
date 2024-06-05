import React from "react";

function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <>
      <div className="w-11/12 flex flex-wrap max-w-max space-x-6 gap-y-4 mx-auto py-4 justify-center">
        {filterData.map((data) => {
          return (
            <button
              className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-slate-700 hover:bg-opacity-50 border-2 "
                ${
                  category === data.title
                    ? "bg-opacity-60 border-white"
                    : "bg-opacity-40 border-transparent"
                } transitiom-all duration-300`}
              onClick={() => filterHandler(data.title)}
              key={data.id}
            >
              {data.title}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Filter;
