import React from "react";
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Cards from "./components/Cards.jsx";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./Data.jsx";
import { useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [load, setLoad] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoad(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      //output
      setCourses(output.data);
      console.log(output.data);
    } catch (error) {
      toast.error("Network Error");
    }
    setLoad(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-600">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-slate-600">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {load ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      </div>
    </div>
  );
}

export default App;
