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

        const targetEntry = parsedData.find((entry) =>
            entry.id === id
        );

        if (targetEntry) {
            setTitle(targetEntry.title);
            setContent(targetEntry.contents);
        }

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
        navigate('home');

    }


    return (
        <div className="p-6 w-full bg-neutral-100 min-h-screen text-slate-800 flex justify-center">
            <div className="w-full max-w-3xl space-y-6">
                <h2 className="text-2xl font-semibold text-slate-800">Edit Journal Entry</h2>

                <input
                    className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="text"
                    value={title}
                    placeholder="Edit Title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    value={content}
                    className="w-full min-h-[200px] border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Edit Content"
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

                <div className="flex gap-4 justify-end pt-2 flex-wrap">
                    <button
                        className="px-4 py-2 bg-gray-300 text-slate-800 rounded hover:bg-gray-400 transition"
                        onClick={() => navigate('home')}
                    >
                        Cancel
                    </button>

                    <button
                        disabled={title.trim() === '' || content.trim() === ''}
                        className={`px-4 py-2 rounded text-white transition ${(title.trim() === '' || content.trim() === '')
                            ? 'bg-orange-300 cursor-not-allowed'
                            : 'bg-orange-500 hover:bg-orange-600'
                            }`}
                        onClick={handleSave}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditEntry;