import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
export default function ApiPerform() {
  const param = useParams();
  const [Fac, setFac] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://64dd9113825d19d9bfb13f17.mockapi.io/Faculties/" + param.id)
      .then((res) => res.json())
      .then((res) => setFac(res));
  }, []);
  return (
    <>
      <div class="card m-3 p-4" style={{ width: "18rem" }}>
        <img src={Fac.FacultyImg} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Fac.FacultyName}</h5>
          <p class="card-text">{Fac.FacultyExp}</p>
        </div>
      </div>
      <Link to="/" class="btn btn-primary">
        Go to Home
      </Link>
      <Link to={"/Form/" + Fac.id} class="btn btn-primary">
        update
      </Link>
      <button
        onClick={() => {
          fetch(
            "https://64dd9113825d19d9bfb13f17.mockapi.io/Faculties/" + param.id,
            {
              method: "DELETE"
            }
          ).then((res) => navigate("/"));
        }}
        class="btn btn-primary"
      >
        DELETE
      </button>
    </>
  );
}
