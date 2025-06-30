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

        navigate('home');


    }
    return (

        <div className="w-full px-4 py-6 sm:px-6 md:px-8 bg-neutral-100 min-h-screen text-slate-800">
            <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md border border-slate-200 space-y-6">
                <h2 className="text-2xl font-semibold text-slate-800">New Journal Entry</h2>

                <input
                    type="text"
                    placeholder="Name of your journal"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <textarea
                    placeholder="Write your thoughts here..."
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    rows={8}
                    className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
                    <button
                        onClick={() => navigate('home')}
                        className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-100 transition w-full sm:w-auto"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleChanges}
                        disabled={heading.trim() === '' || entry.trim() === ''}
                        className={`px-4 py-2 rounded text-white transition w-full sm:w-auto ${(heading.trim() === '' || entry.trim() === '')
                            ? 'bg-orange-300 cursor-not-allowed'
                            : 'bg-orange-500 hover:bg-orange-600'
                            }`}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddEntries;