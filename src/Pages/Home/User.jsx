import React from 'react';
import image from '../../assets/image/image.jpg'
import { Link } from 'react-router-dom';


const User = ({user}) => {
  const { name, email, website, id} = user;
    return (
       
  <div className="col">
    <div className="card">
      <img style={{height:'300px'}} src={image} className="card-img-top rounded-pill" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <p className="card-text">{email}</p>
        <p className="card-text">{website}</p>
      </div>
      <Link to={`/user-details/${id}`} className='btn btn-sm btn-outline-success'>Show details</Link>
    </div>
  </div>
        
    );
};

export default User;