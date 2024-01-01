import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img from '../../assets/image/image.jpg'
import { useEffect } from 'react';

const UserDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const user = useLoaderData()
    const {name, website, phone, email} = user;

    return (
        <div className='container my-5'>
            <h1>Show User Details</h1>

     <div className="card">
      <img style={{height:'800px'}} src={img} className="card-img-top rounded-circle" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <h4 className="">{phone} </h4>
        <p className="card-text">{email}</p>
        <p className="card-text">{website}</p>
      </div>
      <Link to='/' className='btn btn-sm btn-outline-success'>Back to Home</Link>
    </div>
        </div>
    );
};

export default UserDetails;