import News from './components/News';

export default function Home() {
  return (
    <>

      <div className='divide-y divide-gray-200'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14'>Latest News About <span className='gradient-text'>SM & YTM Movement</span></h1>
        </div>
        <News />
        <News />
      </div>

    </>
  )
}