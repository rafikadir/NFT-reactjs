import React from 'react';

const SectionHeading = ({title,centered}) => {
    return (
        <div className="mb-[40px]">
            <h2 className={`text-white text-[40px] font-bold ${centered ? "text-center":"text-left"}`}>{title}</h2>
        </div>
    );
};

export default SectionHeading;