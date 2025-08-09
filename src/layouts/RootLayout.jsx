//react-router-dom
import { Outlet } from "react-router-dom";

//components
import Navbar from "../components/Navbar";
function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>{" "}
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RootLayout;
