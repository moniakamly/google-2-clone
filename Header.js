import { MicrophoneIcon, SearchIcon, ViewGridIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import Avatar from './components/Avatar';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null); 

    const search = e => {
        e.preventDefault(); 
        const term = searchInputRef.current.value;

        if (!term) return; 

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-2 items-center">
                <Image
                    src="https://eticeo.com/wp-content/uploads/2016/11/featured.png"
                    height={40}
                    width={120} 
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />
                <form className="form flex flex-grow">
                    <input 
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none" 
                        type="text"
                    />
                    <XIcon className="h-10 sm:mr-3 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                        onClick={() => searchInputRef.current.value = ""}    
                    />
                    <MicrophoneIcon className="h-10 p-2 hidden sm:inline-flex text-blue-500 boredr-l-2
                        pl-4 border-gray-300"/>
                    <SearchIcon className="h-10 p-2 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="https://media-exp1.licdn.com/dms/image/C4D35AQH4tXKFfESRwA/profile-framedphoto-shrink_200_200/0/1613494608179?e=1619092800&v=beta&t=lxfVwuBBOsY3qx073mzKRX2n3PZjo25ubLsX75uRwAk" />
            </div>
        </header>
    )
}

export default Header
