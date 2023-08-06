import { CategoryLayout } from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { FormEmailFields } from '../models'

export default function EmailPage() {
  const tabs = [
    {
      label: 'Phổ biến',
      content: (
        <div>
          <div className="grid grid-cols-2 gap-2">
            <ProductCard className="col-span-2" />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      ),
    },
    {
      label: 'Giá tăng dần',
      content: (
        <div>
          <div className="grid grid-cols-2 gap-2">
            <ProductCard className="col-span-2" />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      ),
    },
    {
      label: 'Giá giảm dần',
      content: (
        <div>
          <div className="grid grid-cols-2 gap-2">
            <ProductCard className="col-span-2" />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      ),
    },
  ]
  return (
    <CategoryLayout
      formFields={FormEmailFields}
      title="Gian hàng Email"
      total={462}
      tabs={tabs}
      contentNotification="Đối với gian hàng không trùng, chúng tôi
    cam kết sản phẩm được bán ra 1 lần duy nhất trên hệ thống, tránh
    trường hợp sản phẩm đó được bán nhiều lần."
    >
      Email Page
    </CategoryLayout>
  )
}
