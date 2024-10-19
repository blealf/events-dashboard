import Card from './Base/Card'
import ArrowUpRight from '../Icons/ArrowUpRight'
import ArrowDownRight from '../Icons/ArrowDownRight'
import InfoIcon from '../Icons/InfoIcon'
import { useTheme } from '../Context/ThemeProvider'
import Styled from 'styled-components'

const HighlightsWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  width: 100%;
  gap: 12px;
`

const Highlights = () => {
  const { darkMode } = useTheme()

  const cardItems = [
    {
      title: 'Total Events',
      value: '100,000',
      percentageChange: 5
    },
    {
      title: 'Active Speakers',
      value: '25',
      percentageChange: -5
    },
    {
      title: 'Total Registrations',
      value: '300',
      percentageChange: 5
    },
    {
      title: 'Total Revenue',
      value: '$500,000',
      percentageChange: 5
    },
  ]

  return (
    <HighlightsWrapper>
      {cardItems.map((item, index ) => (
        <Card key={index} className="p-4">
          <div className="">
            <div className="flex items-center gap-1">
              <p className="text-table-header font-[600] leading-6 text-[16px] dark:text-text-dark">{item.title}</p>
              {darkMode ? <InfoIcon color="#fff" /> : <InfoIcon />}
            </div>
            <div className="flex items-center gap-1">
              <p className="text-text-alt-light leading-8 text-xl font-[600] dark:text-text-dark">{item.value}</p>
              <p className="flex items-center gap-1 text-2xl font-bold">
                {item.percentageChange > 0 ? <ArrowUpRight /> : <ArrowDownRight />}
                <span className={`${item.percentageChange > 0 ? 'text-green-text' : 'text-danger'}
                  leading-3 text-xs font-[600]`}
                >{item.percentageChange}%</span>
              </p>
            </div>
          </div>
        </Card>
      ))}
    </HighlightsWrapper>
  )
}

export default Highlights