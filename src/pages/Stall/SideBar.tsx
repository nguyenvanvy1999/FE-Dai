import { MdIntegrationInstructions } from 'react-icons/md'
import { DASHBOARD_SIDEBAR_STALL } from '../../constants/navigationSidebarStall'
const linkClasses =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rouded-sm text-base hover:cursor-pointer'

type Props = {
  setCurrentComponent: (component: any) => void
}
export default function SideBar({ setCurrentComponent }: Props) {
  return (
    <div className="flex flex-col bg-slate-800 p-3 w-60 text-white">
      <div className="flex items-center gap-2 pb-3">
        <MdIntegrationInstructions fontSize={30} />
        <span className="text-neutral-50 text-lg">taphoammo.net</span>
      </div>
      <div>
        {DASHBOARD_SIDEBAR_STALL.map((item) => (
          <div onClick={() => setCurrentComponent(item.component)} className={linkClasses}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
