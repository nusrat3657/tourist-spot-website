import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const spots = useLoaderData();
    return (
        <div>
            <h2>details</h2>
        </div>
    );
};

export default Details;