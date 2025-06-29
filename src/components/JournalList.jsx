import React from 'react';
import { useEffect, useState } from 'react';
import JournalItem from './JournalItem';


function JournalList() {
    const [storedEntries, setStoredEntries] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('entries');

        setStoredEntries(data ? JSON.parse(data) : []);

    }, [])

    const handleDelete = (id) => {
        const updatedEntry = storedEntries.filter((event) => event.id !== id);
        localStorage.setItem('entries', JSON.stringify(updatedEntry));
        setStoredEntries(updatedEntry);
    }

    return (

        <div className="p-4 sm:p-6 w-full bg-neutral-100 min-h-screen text-slate-800">

            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
                Your Journal Entries
            </h2>

            {storedEntries.length === 0 ? (
                <p className="text-center text-gray-500">No Journal Entries Yet!!</p>
            ) : (
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {storedEntries.map((entry) => (
                        <JournalItem
                            key={`${entry.id}-${entry.title}`}
                            entry={entry}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );

}

export default JournalList;