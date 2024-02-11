import React from 'react';

function Information({content}) {
    return (
        <div className='flex flex-col  mx-auto'>
            <div className='p-4 text-monospace whitespace-pre-wrap  break-words'>
                <div>{content}</div>
            </div>
        </div>
    );
}

export default Information;