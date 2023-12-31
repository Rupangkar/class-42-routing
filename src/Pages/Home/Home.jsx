import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Home = () => {

    const users = useLoaderData();
    

    return (
        <div className='container my-5'>
            <h1>All Users</h1>

            <div class="row row-cols-1 row-cols-md-3 g-4">

              {
                users.map(user=><User

                   user={user}
                ></User>)
              }

  
</div>

        </div>
    );
};

export default Home;