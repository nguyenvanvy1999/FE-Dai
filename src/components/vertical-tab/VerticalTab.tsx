import { useState } from 'react'
import { Tab } from '../../models'

interface VerticalTabProps {
  tabs: Tab[]
  contentNotification?: string
}

const VerticalTab = ({ tabs, contentNotification }: VerticalTabProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <ul className="text-15px font-medium text-gray-500 flex">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className="cursor-pointer rounded-t-lg pt-2 max-sm:text-center font-bold "
            onClick={() => handleTabChange(index)}
          >
            <p
              className={`${
                index === activeTab ? 'w-full border-b-2 border-green-600' : ''
              }  px-22px py-11px`}
            >
              {tab?.label}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex-1">
        {contentNotification && (
          <div className="p-15px text-base text-green-400 border-2 border-grey-200 mb-1">
            {contentNotification}
          </div>
        )}
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}

export default VerticalTab
