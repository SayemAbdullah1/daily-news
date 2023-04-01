import React, { useEffect, useState } from 'react';
import author from '../assets/author.jpg'
import NewsCard from './NewsCard';
import SideBar from './SideBar';

const Home = () => {
    const [news, setNews] = useState([])
    const [tittle, setTittle] = useState([])
    const [time, setTime] = useState([])

    useEffect( ()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setNews(data))
    },[])


    const addTotalTime = (addTime)=>{
        const newTime = [...time, addTime]
        setTime(newTime)
    }

 


    return (
            <div>
            <div className='flex justify-between my-6 border-b-2 mx-12 border-indigo-500 pb-4'>
                <h2 className='text-3xl font-bold'>Daily News</h2>
                <img className='rounded-xl h-12' src={author} alt="" />
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1  mx-12'>
                <div className='col-span-3 lg:p-12 '>

                    <div className='grid sm:grid-cols-1 lg:grid-cols-1 min-w-full mx-auto gap-6'>
                        {
                            news.map(singleNews => <NewsCard
                                key={singleNews.id}
                                singleNews={singleNews}
                                addTotalTime={addTotalTime}
                                
                                tittle={tittle}
                                setTittle={setTittle}

                            ></NewsCard>

                            )
                        }
                    </div>

                </div>


                <div className='col-span-1 w-full bg-slate-200 h-screen p-2'>
                    <SideBar 
                    time={time}
                        tittle={tittle}
                        setTittle={setTittle}
                    ></SideBar>
                </div>
            </div>
            </div>
    );
};

export default Home;