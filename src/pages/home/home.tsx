
import { Search, MapPin, Bookmark } from 'lucide-react';
import Logo from "../../assets/logo.png"
function Home() {

    const items = [
        {
            img:' ',
            role:' ',
            brand:'Yamaha ',
            city: ' Pekanbaru',

        },
    ]

    return (
        <>
            <section className="bg-[#D8DEDC] flex flex-col px-10 py-10 gap-5 font-poppins">
                <h1 className="text-[24pt] font-bold  ">Find Your Dream Job Here</h1>
                <div className="bg-white h-20 flex p-5 h-16 rounded-full p-2 border border-gray-300 items-center gap-4">
                    <Search className='' />
                    <input type="text" className=" h-10 flex focus:outline-none" placeholder='Job tittle or Keyword' />
                    <div className="flex items-center">
                        <span className='text-[30pt]'>|</span>
                    </div>
                    <MapPin />
                    <input type="text" className=" h-10 w-full flex focus:outline-none" placeholder='Add country City ' />
                    <button className='bg-blue-600 text-white p-3 rounded-full w-[200px] hover:scale-x-110 transition-transform'>Search</button>
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

                    <div className="h-20 w-full flex gap-20 items-center rounded-lg px-4 hover:bg-[#D8DEDC] transition-all  duration-200">
                        <div className="flex gap-3">
                            <img src={Logo} alt="as" className='h-11' />
                            <div className="  whitespace-normal w-[200px] ">
                                <b>Web developer</b>
                                <h1>Yamaha</h1>
                            </div>
                        </div>
                        <div className="deskrip flex gap-4">
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                        </div>

                        <b>Pekanbaru</b>
                        <p>time</p>
                      
                      <Bookmark className='' />
                      
                    </div>

                    <div className="h-20 w-full flex gap-20 items-center rounded-lg px-4 hover:bg-[#D8DEDC] transition-all  duration-200">
                        <div className="flex gap-3">
                            <img src={Logo} alt="as" className='h-11' />
                            <div className="  whitespace-normal w-[200px] ">
                                <b>Web developer</b>
                                <h1>Yamaha</h1>
                            </div>
                        </div>
                        <div className="deskrip flex gap-4">
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                        </div>

                        <b>Pekanbaru</b>
                        <p>time</p>
                      
                      <Bookmark className='' />
                      
                    </div>
                    <div className="h-20 w-full flex gap-20 items-center rounded-lg px-4 hover:bg-[#D8DEDC] transition-all  duration-200">
                        <div className="flex gap-3">
                            <img src={Logo} alt="as" className='h-11' />
                            <div className="  whitespace-normal w-[200px] ">
                                <b>Web developer</b>
                                <h1>Yamaha</h1>
                            </div>
                        </div>
                        <div className="deskrip flex gap-4">
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                        </div>

                        <b>Pekanbaru</b>
                        <p>time</p>
                      
                      <Bookmark className='' />
                      
                    </div>
                    <div className="h-20 w-full flex gap-20 items-center rounded-lg px-4 hover:bg-[#D8DEDC] transition-all  duration-200">
                        <div className="flex gap-3">
                            <img src={Logo} alt="as" className='h-11' />
                            <div className="  whitespace-normal w-[200px] ">
                                <b>Web developer</b>
                                <h1>Yamaha</h1>
                            </div>
                        </div>
                        <div className="deskrip flex gap-4">
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                        </div>

                        <b>Pekanbaru</b>
                        <p>time</p>
                      
                      <Bookmark className='' />
                      
                    </div>
                    <div className="h-20 w-full flex gap-20 items-center rounded-lg px-4 hover:bg-[#D8DEDC] transition-all  duration-200">
                        <div className="flex gap-3">
                            <img src={Logo} alt="as" className='h-11' />
                            <div className="  whitespace-normal w-[200px] ">
                                <b>Web developer</b>
                                <h1>Yamaha</h1>
                            </div>
                        </div>
                        <div className="deskrip flex gap-4">
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                        </div>

                        <b>Pekanbaru</b>
                        <p>time</p>
                      
                      <Bookmark className='' />
                      
                    </div>
                    <div className="h-20 w-full flex gap-20 items-center rounded-lg px-4 hover:bg-[#D8DEDC] transition-all  duration-200">
                        <div className="flex gap-3">
                            <img src={Logo} alt="as" className='h-11' />
                            <div className="  whitespace-normal w-[200px] ">
                                <b>Web developer</b>
                                <h1>Yamaha</h1>
                            </div>
                        </div>
                        <div className="deskrip flex gap-4">
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                            <span className='border border-gray-300 p-1 px-4 rounded-md bg-[#F4F4F4]'>Remote</span>
                        </div>

                        <b>Pekanbaru</b>
                        <p>time</p>
                      
                      <Bookmark className='' />
                      
                    </div>

                </div>

            </section>

        </>
    )
}
export default Home