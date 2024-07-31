import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Card from "../component/Card";
import { Context } from "../store/appContext";
export const Home = () =>{ 
    const {store, actions} = useContext(Context)
    return (
        <div className="text-center">
        <Card/>
        </div>
//   <div><div>
//   <div className="container card mb-3">
//       <div className="row g-0">
//           <div className="col-md-2">
//               <img src="https://via.placeholder.com/150" className="img-fluid rounded-circle" alt="Contact" />
//           </div>
//           <div className="col-md-8">
//               <div className="card-body">
//                   <h5 className="card-title">Mike Anamendolla</h5>
//                   <Link to="/editcontact">
//                       <button className="btn btn-info">Edit</button>
//                   </Link>
//                   <Link to="/">
//                       <button className="btn btn-secondary"><FontAwesomeIcon icon={faTrash} /></button>
//                   </Link>
//                   <p className="card-text">
//                       <small className="text-muted">5842 Hillcrest Rd</small><br />
//                       <small className="text-muted">(870) 288-4149</small><br />
//                       <small className="text-muted">mike.ana@example.com</small>
//                   </p>
//               </div>
//           </div>
//           <div className="col-md-2 d-flex align-items-center justify-content-end">
//               <button className="btn btn-link text-dark"></button>
//               <button className="btn btn-link text-dark"></button>
//           </div>
//       </div>
//   </div>
// </div></div>
)};
