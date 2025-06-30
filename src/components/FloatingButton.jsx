import React from 'react';
import { Link } from 'react-router-dom';

function FloatingButton() {
    return ( 
       <Link to='/journal/new'>
        <button className='fixed bottom-6 right-6 bg-blue-500 text-white text-3xl w-14 h-14 rounded-full shadow-lg hover:bg-blue-600' >
            +
        </button>
       </Link>
     );
}

export default FloatingButton;