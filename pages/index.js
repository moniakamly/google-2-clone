import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon, ViewGridIcon} from "@heroicons/react/solid"
import {SearchIcon} from "@heroicons/react/outline"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
        <Avatar url="https://media-exp1.licdn.com/dms/image/C4D35AQH4tXKFfESRwA/profile-framedphoto-shrink_200_200/0/1613494608179?e=1618912800&v=beta&t=9ZA0bofmk5d7hYRfeCRlpj7evaAS8gzg81L4Hu00cB8"/>
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow"> 
        <Image 
          src="https://eticeo.com/wp-content/uploads/2016/11/featured.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full 
        border border-gray-200 px-5 py-3 items-center 
        sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="mt-8 flex flex-col w-1/2 space-y-2 justify-center 
          sm:space-y-0 sm:flex-row sm:space-x-4"> 
          <button className="btn">Google Search</button>
          <button className="btn" >I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  )
}
