import Highlights from './Highlights'
import Table from './Table/Index'

const Dashboard = () => {
  

  return (
    <div className="w-full flex flex-col p-0 md:pt-4 md:pl-7 md:pr-[5vw]">
      <h1 className="p-5 md:p-0 text-[22px] leading-[20px] font-[400] text-text-light my-2 sm:my-6 dark:text-text-dark">
        Welcome! here’s your summary
      </h1>
      <Highlights />
      <div></div>
      <Table />
    </div>
  )
}

export default Dashboard