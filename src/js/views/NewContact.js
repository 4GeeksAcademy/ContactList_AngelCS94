import React from 'react'
import { Link } from 'react-router-dom'
const NewContact = () => {
  return (
    <div>
        <div className="container mt-5">
      <h1 className="text-center">Add a new contact</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter address" />
        </div>
        <button type="submit" className="btn btn-primary w-100">
            
            FETCH a API

        </button>
      </form>
      <div className="text-center mt-3">
        <Link to="/">or get back to contacts</Link>
      </div>
    </div>
    </div>
  )
}

export default NewContact