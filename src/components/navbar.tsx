import { Bell, } from 'lucide-react';
import profile from '../assets/profile.png';

function Nav() {
    return (
        <>
            <header className="font-poppins flex w-full bg-[#D8DEDC] justify-between px-10 items-center py-5 ">

                <nav>
                    <ul className="flex gap-10 items-center text-[#A1A6A9] hover: text-black">
                        <li>
                            <img src={profile} alt="as" className='h-12'/>
                        </li>
                        <li>
                            <a href="" className='font-medium'>Find Jobs</a>
                        </li>
                        <li>
                            <a href="">Employers</a>
                        </li>
                        <li>
                            <a href="">Upload Job</a>
                        </li>
                        <li>
                            <a href="">About us</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center justify-between gap-4">
                    <Bell />
                    <div className="flex flex-col">
                        <span className='font-medium'>Ho Lee Fuuk</span>
                        <span>Quality Assurance</span>
                    </div>
                    <img src={profile} alt="" className='border-1 border-gray-400 rounded-full h-12' />
                </div>
            </header>
        </>
    )
}
export default Nav