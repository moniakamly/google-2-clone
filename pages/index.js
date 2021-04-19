import Head from 'next/head'
import Avatar from '../components/Avatar'

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
        <Avatar url="https://media-exp1.licdn.com/dms/image/C4D35AQH4tXKFfESRwA/profile-framedphoto-shrink_200_200/0/1613494608179?e=1618912800&v=beta&t=9ZA0bofmk5d7hYRfeCRlpj7evaAS8gzg81L4Hu00cB8"/>
        </div>

      </header>
    </div>
  )
}
