import React from 'react';
import image from '../../assets/image/image.jpg'
import { Link } from 'react-router-dom';


const User = ({user}) => {
  const { name,email,website,id} =user;
    return (
        <div>
  <div class="col">
    <div class="card">
      <img style={{height:'300px'}} src={image} class="card-img-top rounded-pill" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name} </h5>
        <p class="card-text">{email}</p>
        <p class="card-text">{website}</p>
      </div>
      <Link to='/user-detils' className='btn btn-sm btn-outline-success'>Show details</Link>
    </div>
  </div>
        </div>
    );
};

export default User;