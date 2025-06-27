import React, { useContext } from 'react';
import AddEntries from './Entries';
import { useNavigate } from 'react-router-dom';


function JournalItem({ entry , onDelete}) {

    const navigate = useNavigate();

    return (

        <div className='border-2 grid grid-cols-2 grid-rows-4 mb-5'>

            <h1 className='col-span-2'>{entry.title}</h1>
            <p className='col-span-2'>{new Date(entry.date).toLocaleString()}</p>
            <p className='col-span-2'>{entry.contents}</p>
            <button
                className='border-1 hover:cursor-pointer'
                onClick={() => onDelete(entry.id)}>Delete</button>
            <button
                className='border-1 hover:cursor-pointer'
                onClick={() => navigate(`/edit/${entry.id}`)}>Edit</button>

        </div>
    );
}

export default JournalItem;