import React from "react";
import PropTypes from "prop-types";

export const EmpireProjects = (props) => {
  
  const handleDelete = () => {
    props.onDelete(props.id);
  }

  return (
      <div className="contenedor-cart">
        <div
          className="card projects"
          style={{
            width: "18rem",
          }}
        >
          <img src={props.imgUrl} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title"><b>Project Name: </b>{props.name}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>ID: </b>{props.id} </li>
            <li className="list-group-item"><b>Cost: </b>{props.cost} </li>
            <li className="list-group-item"><b>Danger Level: </b>{props.dangerLevel}</li>
          </ul>
          <button 
          className="btn btn-danger"
          onClick={handleDelete}
          >
            Delete
            </button>
        </div>
      </div>
  );
};

EmpireProjects.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  id: PropTypes.string,
  dangerLevel: PropTypes.number,
  description: PropTypes.string,
  cost: PropTypes.number,
  onDelete: PropTypes.func,
};
