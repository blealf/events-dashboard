import Highlights from './Highlights'

const Dashboard = () => {
  

  return (
    <div className="w-full flex flex-col pt-0 sm:pt-4 px-5 sm:px-7 md:pr-[96px]">
      <h1 className="text-[22px] leading-[20px] font-[400] text-text-light my-2 sm:my-6 dark:text-text-dark">
        Welcome! here’s your summary
      </h1>
      <Highlights />
    </div>
  )
}

export default Dashboard