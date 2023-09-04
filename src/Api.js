import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Api() {
  const [Fac, setFac] = useState([]);
  useEffect(() => {
    fetch("https://64dd9113825d19d9bfb13f17.mockapi.io/Faculties/")
      .then((res) => res.json())
      .then((res) => {
        console.warn(res);
        setFac(res);
      });
  }, []);

  const FacultyFormeted = Fac.map((fo) => {
    return (
      <>
        <div class="card m-3 p-4" style={{ width: "18rem" }}>
          <img src={fo.FacultyImg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{fo.FacultyName}</h5>
            <p class="card-text">{fo.FacultyExp}</p>
            <Link to={"/Fac/" + fo.id} class="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="container d-flex justify-content-center align-center flex-wrap">
        {FacultyFormeted}
      </div>
      <Link to={"/Form/0"} class="btn btn-primary">
        INSERT
      </Link>
    </>
  );
}
