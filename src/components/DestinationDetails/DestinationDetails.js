import React from 'react';
import { useParams } from 'react-router';

const DestinationDetails = () => {
    const {ride} = useParams();
    return (
        <div>
            <h1>This is destination of {ride} </h1>
        </div>
    );
};

export default DestinationDetails;