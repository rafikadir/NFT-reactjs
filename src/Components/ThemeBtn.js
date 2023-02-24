import React from 'react';
import { Link } from 'react-router-dom';

const ThemeBtn = ({link,name}) => {
    return (
        <div>
            <Link to={`${link}`} className="text-white border border-blue py-2 px-6 inline-block rounded-md hover:bg-blue duration-500">{name}</Link>
        </div>
    );
};

export default ThemeBtn;