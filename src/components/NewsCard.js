import React from 'react';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

const NewsCard = ({ singleNews, addTotalTime, tittle, setTittle }) => {
    const { image, authorImage, authorName, date, title, time, details} = singleNews;
    // console.log(singleNews)
    const handleAddTittle = () => {
        const info = {
            title
        }
        if(tittle){
            const newTitle = [...tittle, info]
            setTittle(newTitle)

        }
    }

    return (
        <div className='cart mx-auto mb-4'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={image} alt="Sunset in the mountains"/>
                <div className="px-2 py-4">
                        <div className='pb-4 flex justify-between'>
                           <div className='flex'>
                            <img className='h-12 w-12 rounded-full mr-3' src={authorImage} alt="" />
                            <div>
                                <h2 className='font-bold text-xl'>{authorName}</h2>
                                <span className='text-gray-400'>{date}</span>
                            </div>
                           </div>
                           <div className='flex items-center'>
                            <span className='text-gray-400 mr-2'>{time} min read</span>
                            <BsFillBookmarkCheckFill className='hover:text-red-500'
                                onClick={handleAddTittle}
                            />
                           
                           </div>
                        </div>
                    <div className="font-bold text-2xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {details}
                        </p>
                    <button href='/' className='text-blue-900 font-bold hover:text-red-500' onClick={() => addTotalTime(singleNews)}>Mark as read</button>
                    </div>
                    
            </div>
        </div>
    );
};

export default NewsCard;