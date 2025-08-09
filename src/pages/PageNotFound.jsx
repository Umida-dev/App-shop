import { NavLink } from "react-router-dom";
function PageNotFound() {
  return (
    <>
      <h1>PageNotFound</h1>
      <p>Bu sahifa bizda mavjud emas!</p>
      <NavLink to={"/"}>Home</NavLink>
    </>
  );
}

export default PageNotFound;
