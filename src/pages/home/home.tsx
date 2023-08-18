
import { Search, MapPin, Bookmark } from 'lucide-react';
// import Logo from "../../assets/logo.png"
import { getjob } from '../../api/cosmic';
import { useEffect, useState } from 'react';
import { JobsApiResponse } from '../../types';
import toCalendar from '../../util/time';



function Home() {
    const [jobs, setJobs] = useState<JobsApiResponse>();

    useEffect(() => {
        const fetchJobs = async () => {
            const jobs = await getjob()
            setJobs(jobs)
            
        }
        fetchJobs();
    }, []);
console.log(getjob)
    return (
        <>
            <section className="bg-[#D8DEDC] flex flex-col px-10 py-10 gap-5 font-poppins">
                <h1 className="text-[24pt] font-bold">Find Your Dream Job Here</h1>
                <div className="bg-white h-20 flex p-5 h-16 rounded-full p-2 border border-gray-300 items-center gap-4">
                    <Search className="" />
                    <input
                        type="text"
                        className="h-10 flex focus:outline-none"
                        placeholder="Job title or Keyword"


                    />
                    <div className="flex items-center">
                        <span className="text-[30pt]">|</span>
                    </div>
                    <MapPin />
                    <input
                        type="text"
                        className="h-10 w-full flex focus:outline-none"
                        placeholder="Add country City"

                    />
                    <button
                        className="bg-blue-600 text-white p-3 rounded-full w-[200px] hover:scale-x-110 transition-transform"


                    >
                        Search
                    </button>
                </div>
            </section>

            <section className='p-4 gap-2 flex font-poppins'>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
                <span className='border border-gray-300 p-1 px-4 rounded-md'>Remote</span>
            </section>
            <section className='flex '>
                <div className="flex flex-col w-1/4 gap-5 h-full p-4 g-">
                    <div className="flex flex-col gap-2">
                        <b>Filter</b>
                        <input type="search" className='p-2 bg-slate-50' placeholder='Company Skill' />
                    </div>
                    <div className='flex gap-2'>
                        <b>Speciality</b>
                        <select className='bg-slate-50'>
                            <option value="" className=''>
                            </option>


                        </select>
                        <div className="flex">figo</div>
                        <nav>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </nav>

                    </div>
                    <div>
                        <b>Employment</b>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" /><span>full time</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" /><span>Senior level</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" /><span>Remote</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" /><span>Contract</span>
                        </div>

                    </div>
                    <div className='flex gap-2 '>
                        <b>Salary</b>
                        <b>Speciality</b>
                        <select className='bg-slate-50 flex justify-center'>
                            <option value="" className=''>

                            </option>

                        </select>
                    </div>
                </div>
                <div className='flex flex-col gap-5 w-full'>

                    {jobs?.objects.map((job, index) => (
                        <div key={index} className="h-20 w-full flex gap-20 items-center rounded-lg px-4 hover:bg-[#D8DEDC] transition-all duration-200 border-t border-gray-300">
                            <div className="flex gap-3">
                                <img src={job.metadata.img.url} alt="as" className='h-11' />
                                <div className="whitespace-normal w-[200px] ">
                                    <b>{job.title}</b>
                                    <h1>asdsa</h1>
                                </div>
                            </div>
                            <div className="deskrip flex gap-4">
                                <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                                <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                                <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            </div>
                            <b>{job.metadata.location}</b>
                            <p>{toCalendar(job.created_at)}</p>
                            <Bookmark className='' />
                        </div>
                    ))}





                </div>

            </section>

        </>
    )
}
export default Home