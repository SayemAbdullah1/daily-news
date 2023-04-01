import React from 'react';
import { toast } from 'react-hot-toast';

const SideBar = ({ time, tittle, setTittle }) => {


    let totalTimes = 0

    for (const addTime of time) {
        toast('Successfully added!')
        totalTimes = totalTimes + addTime.time;
    }
    return (
        <div>
            <h2 className='border-2 border-indigo-500 p-4 font-bold'>Spend time on read: {totalTimes} min</h2>
            <div className= 'border-indigo-500 p-4 font-bold'>
                <h2 className='pb-2 border-blue-600'>Total read: {tittle.length}</h2>
                <div className=''>
                    {
                        tittle.map(singleTitle =>(
                            
                            <h2 className='mb-2 pl-2 text-lg py-4 bg-white border-indigo-500'>{singleTitle.title}</h2>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SideBar;