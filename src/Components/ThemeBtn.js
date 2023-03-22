import React from 'react';
import { Link } from 'react-router-dom';

const ThemeBtn = ({link,name, className}) => {
    return (
        <div>
            <Link to={`${link}`} className={`text-white border border-blue py-2 px-6 inline-block rounded-md hover:bg-blue duration-500 ${className}`}>{name}</Link>
        </div>
    );
};

export default ThemeBtn;