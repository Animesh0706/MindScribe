import React from 'react';
 function About() {
    return ( 
        <div className="p-6 w-full bg-neutral-100 min-h-screen text-slate-800 flex justify-center items-start">
            <div className="max-w-3xl w-full space-y-6">
                <h1 className="text-3xl font-bold text-orange-500">About MindScribe Journal</h1>

                <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>MindScribe</strong> is your personal digital journaling companion — designed to help you 
                    capture, reflect, and organize your thoughts seamlessly. Whether you're documenting your daily 
                    emotions, writing down creative ideas, or maintaining logs for personal growth, MindScribe offers 
                    a distraction-free and minimal interface to keep your journaling habit simple and consistent.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                    This app allows you to:
                </p>
                    <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside mt-2 space-y-1">
                        <li>Add and manage multiple journal entries</li>
                        <li>Edit or delete past reflections with ease</li>
                        <li>Store entries locally in your browser</li>
                        <li>Use on any screen — mobile, tablet, or desktop</li>
                        {/* <li>Export your journal entries anytime</li> */}
                    </ul>

                <p className="text-gray-600 italic pt-4">
                    "The faintest ink is more powerful than the strongest memory."
                </p>
            </div>
        </div>
    );
}
 
 export default About;