import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';




function AddEntries() {
    const [entry, setEntry] = useState('');
    const [heading, setHeading] = useState('');
    const navigate = useNavigate();

    const handleChanges = () => {
        const newEntry = {
            id: Date.now().toString(),
            title: heading,
            contents: entry,
            date: new Date().toISOString()
        }

        const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];
        const updatedEntry = [...existingEntries, newEntry];

        localStorage.setItem('entries', JSON.stringify(updatedEntry));

        navigate('/');


    }
    return (

        <div className='grid grid-cols-2 grid-rows-7 '>
            <h2 className='col-span-2'>New Journal Entry.</h2>
            <input type="text"
                className='border-2 col-span-2 mb-2'
                placeholder='Name of your journal'
                value={heading}
                onChange={(e) => setHeading(e.target.value)} />

            <textarea name="Journal_Entry"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder='Write your thoughts here...'
                className='border-double border-5 col-span-2 row-span-4 ' />


            <button className='border-2 border-solid mt-2 w-50 text-center justify-self-center'
                onClick={() => navigate('/')}>
                Cancel
            </button>

            <button className='border-2 border-solid mt-2 w-50 text-center justify-self-center'
                onClick={() => handleChanges()}
                disabled={entry.trim() === ''} >
                Save
            </button>

        </div>

    );
}

export default AddEntries;