import React, { useContext } from 'react';
import AddEntries from './Entries';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"


function JournalItem({ entry, onDelete }) {

    const navigate = useNavigate();

    return (

        <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.5 },
                scale: { duration: 0.2 } 
            }}
            viewport={{ once: true }}
            className="bg-slate-200 p-5 rounded-xl shadow-md border border-slate-200  transition-all space-y-3" >

            <h1 className='text-xl font-bold text-slate-800'>{entry.title}</h1>
            <p className='text-sm text-gray-500'>{new Date(entry.date).toLocaleString()}</p>
            <p className='text-gray-700 line-clamp-1'>{entry.contents}</p>

            <div className="flex gap-4 justify-end pt-2">
                <button
                    className="px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                    onClick={() => onDelete(entry.id)}
                >
                    Delete
                </button>
                <button
                    className="px-4 py-1 border border-orange-500 text-orange-500 rounded hover:bg-orange-100 transition"
                    onClick={() => navigate(`/edit/${entry.id}`)}
                >
                    Edit
                </button>
            </div>

        </motion.div>
    );
}

export default JournalItem;