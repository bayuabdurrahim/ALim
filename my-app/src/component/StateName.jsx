import React, { useState } from 'react';

const StateName = () => {
    const [name, setName] = useState("John");

    const handleName = () => {

        setName("Doe");
    };
    return (
    <div>
        <h1>Ganti Nama {name}</h1>
        <button onClick={handleName}>Ganti Nama </button>
    </div>
    );
};

export default StateName;