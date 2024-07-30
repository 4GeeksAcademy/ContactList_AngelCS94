import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="container card mb-3 p-3">
        <div className="text-center">
          <img 
            src="https://via.placeholder.com/150" 
            className="img-fluid rounded-circle mb-3" 
            alt="Contact" 
            style={{ width: '150px', height: '150px' }} 
          />
          <h5 className="card-title">Mike Anamendolla</h5>
          <div className="mb-3">
            <Link to="/editcontact">
              <button className="btn btn-info mx-2">Edit</button>
            </Link>
            <Link to="/">
              <button className="btn btn-secondary mx-2">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </Link>
          </div>
          <p className="card-text">
            <small className="text-muted d-block">5842 Hillcrest Rd</small>
            <small className="text-muted d-block">(870) 288-4149</small>
            <small className="text-muted d-block">mike.ana@example.com</small>
          </p>
        </div>
      </div>
    )
}

export default Contact