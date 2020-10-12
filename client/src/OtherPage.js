import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Je suis une autre page !!!
            <Link to="/"> Home Page </Link>
        </div>
    );
};