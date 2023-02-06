import React, { useState } from "react";
import PropTypes from "prop-types";

export const ModalAddNewProject = (props) => {

const [name, setName] = useState('');
const [id, setID] = useState ('');
const [imgUrl, setIMG] = useState('');
const [cost, setCost] = useState(0);
const [dl, setDL] = useState('');
const [description, setDescription] = useState('');

const sendProjectInfo = () => {
  const newProject = {
    name: name,
    id: id,
    imgUrl: imgUrl,
    cost: parseInt(cost),
    dl: dl,
    description: description
  };
  props.onSend(newProject);
}

const projectName = (event) => {
  setName(event.target.value)
}

const projectID = (event) => {
  setID(event.target.value)
}

const projectIMG = (event) => {
  setIMG(event.target.value)
}

const projectCost = (event) => {
  setCost(event.target.value)
}

const projectDL = (event) => {
  setDL(event.target.value)
}

const projectDescription = (event) => {
  setDescription(event.target.value)
}

  React.useEffect(() => {
    const exampleModal = document.getElementById("exampleModal");
    exampleModal.addEventListener("show.bs.modal", () => {
      const modalTitle = exampleModal.querySelector(".modal-title");
      modalTitle.textContent = "Creacte a New Imperial Project";
    });
  });

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary new-project"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add a New Imperial Project
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    onChange={projectName}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  ></input>
                  <label htmlFor="recipient-name" className="col-form-label">
                    ID:
                  </label>
                  <input
                   onChange={projectID}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  ></input>
                  <label htmlFor="recipient-name" className="col-form-label">
                    IMG Url:
                  </label>
                  <input
                    onChange={projectIMG}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  ></input>
                  <label htmlFor="recipient-name" className="col-form-label">
                    Cost:
                  </label>
                  <input
                    onChange={projectCost}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  ></input>
                  <label htmlFor="recipient-name" className="col-form-label">
                    Danger Level:
                  </label>
                  <input
                    onChange={projectDL}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  ></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    onChange={projectDescription}
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={sendProjectInfo}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalAddNewProject.propTypes = {
  onSend: PropTypes.func,
};

