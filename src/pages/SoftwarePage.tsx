import { CategoryLayout } from '../components/Layout'
import { FormSoftwareFields } from '../models'

export default function SoftwarePage() {
  const tabs = [
    {
      label: 'Phổ biến',
      content: <div>Phổ biến</div>,
    },
    {
      label: 'Giá tăng dần',
      content: <div>Giá tăng dần</div>,
    },
    {
      label: 'Giá giảm dần',
      content: <div>Giá giảm dần</div>,
    },
  ]
  return (
    <CategoryLayout
      formFields={FormSoftwareFields}
      title="Gian hàng Phần mềm"
      total={112}
      tabs={tabs}
    >
      Email Page
    </CategoryLayout>
  )
}
