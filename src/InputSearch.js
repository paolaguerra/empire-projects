import React, { useState } from "react";
import PropTypes from "prop-types";
import { ModalAddNewProject } from "./ModalAddNewProject";

export const InputSearch = (props) => {
  const [value, setValue] = useState("");

  const metodoInclude = (event) => {
    setValue(event.target.value);
  };

  const handleSeach = (event) => {
    props.onSearch(value);
    event.preventDefault();
  };

  const onSend = (newProject) => {
    props.onSendContenedor(newProject);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">Imperial Projects</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active">Home</p>
              </li>
              <li className="nav-item">
                <ModalAddNewProject onSend={onSend}/>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="text"
                placeholder="search project"
                value={value}
                onChange={metodoInclude}
              ></input>
              <button className="btn btn-outline-success" onClick={handleSeach}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

InputSearch.propTypes = {
  onSearch: PropTypes.func,
  onModal: PropTypes.func,
};
