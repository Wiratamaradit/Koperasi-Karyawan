import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Sidebar = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate(); // Initialize the navigate function
  function logOut() {
    localStorage.clear();
    navigate("/"); // Use the navigate function to redirect to "/"
  }
  console.log(user);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
      <span className="fs-4">Koperasi</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <p role="button" className="nav-link text-white">
            Dashboard
          </p>
        </li>
        <li>
          <p role="button" className="nav-link text-white">
            Pendaftaran
          </p>
        </li>
        <li>
          <p role="button" className="nav-link text-white">
            Anggota
          </p>
        </li>
        <li>
          <p role="button" className="nav-link text-white">
            Pinjaman
          </p>
        </li>
        <li>
          <p role="button" className="nav-link text-white">
            Angsuran
          </p>
        </li>
      </ul>

      <hr />
      <Dropdown>
        <Dropdown.Toggle variant="success" className="w-100">
          {user && user.email}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sidebar;
