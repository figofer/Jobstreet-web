import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchInputProps {
    onSearch: (keyword: string, location: string) => void;
}

function FindS ({ onSearch }: SearchInputProps) {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');

    const handleOnClick = () => {
        onSearch(keyword, location);
    };

    return (
        <section className="bg-[#D8DEDC] flex flex-col px-10 py-10 gap-5 font-poppins">
            <h1 className="text-[24pt] font-bold">Find Your Dream Job Here</h1>
            <div className="bg-white h-20 flex p-5 h-16 rounded-full p-2 border border-gray-300 items-center gap-4">
                <Search className="" />
                <input
                    type="text"
                    className="h-10 flex focus:outline-none"
                    placeholder="Job title or Keyword"
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                />
                <div className="flex items-center">
                    <span className="text-[30pt]">|</span>
                </div>
                <MapPin />
                <input
                    type="text"
                    className="h-10 w-full flex focus:outline-none"
                    placeholder="Add country City"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                />
                <button
                    className="bg-blue-600 text-white p-3 rounded-full w-[200px] hover:scale-x-110 transition-transform"
                    disabled={!keyword}
                    onClick={handleOnClick}
                    
                >
                    Search
                </button>
            </div>
        </section>
    );
}

export default FindS;
