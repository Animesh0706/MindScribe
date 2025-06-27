import React from 'react';
import { useEffect, useState } from 'react';
import JournalItem from './JournalItem';



function JournalList() {
    const [storedEntries, setStoredEntries] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('entries');
        
         setStoredEntries(data ? JSON.parse(data):[]);

    }, [])

    const handleDelete = (id) => {
    const updatedEntry = storedEntries.filter((event) => event.id !== id);
        localStorage.setItem('entries', JSON.stringify(updatedEntry));
        setStoredEntries(updatedEntry);
    }

    return (
        <div>
            {storedEntries.map((entry) =>
                <JournalItem key={`${entry.id}-${entry.title}`} entry={entry} onDelete={handleDelete}/>
            )}

            {storedEntries.length === 0 && (
                <p>No Journal Entries Yet!!</p>
            )}

        </div>
    );
    
}

export default JournalList;