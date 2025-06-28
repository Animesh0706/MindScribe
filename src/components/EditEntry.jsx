import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditEntry() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [storedEntries, setStoredEntries] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('entries');
        const parsedData = data ? JSON.parse(data) : [];
        setStoredEntries(parsedData);

        const targetEntry = parsedData.find((entry) => {
            console.log(entry.id);
            console.log(id);
            return entry.id === id;
        });

        if (targetEntry) {
            setTitle(targetEntry.title);
            setContent(targetEntry.contents);
        }

        console.log(targetEntry)
        console.log(parsedData)
        console.log(parsedData)
    }, [id])

    const handleSave = () => {
        const data = localStorage.getItem('entries');
        const parsedData = data ? JSON.parse(data) : [];

        const updatedEntry = parsedData.map((entry) =>
            entry.id === id
                ? { ...entry, title, contents: content } : entry
        );

        localStorage.setItem('entries', JSON.stringify(updatedEntry));
        setStoredEntries(updatedEntry);
        navigate('/');

    }


    return (
        <div className='grid grid-cols-2 grid-rows-7 m-8'>
            <h2 className='col-span-2'>Edit Journal Entry</h2>
            <input
                className='border-2 col-span-2 mb-2'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                className='border-double border-5 col-span-2 row-span-4 '
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <button className='border-2 border-solid mt-2 w-50 text-center justify-self-center' onClick={() => navigate('/')}>Cancel</button>

            <button className='border-2 border-solid mt-2 w-50 text-center justify-self-center' onClick={handleSave}>Save Changes</button>
        </div>
    );
}

export default EditEntry;