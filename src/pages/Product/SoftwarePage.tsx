import { CategoryLayout } from '../../Layout'
import ProductList from '../../components/ProductList'
import useType from '../../hooks/useType'
import { ProductTypeResponse } from '../../models'

export default function SoftwarePage() {
  //const [page, setPage] = useState(1)
  //const { products } = useProductList({ page })

  const { productType } = useType()

  const productTypeSoftware = productType.slice(8, 17).map((productType: ProductTypeResponse) => ({
    name: productType.slug,
    value: productType._id,
    label: productType.name,
  }))

  const tabs = [
    {
      label: 'Phổ biến',
      content: <ProductList />,
    },
    {
      label: 'Giá tăng dần',
      content: <ProductList />,
    },
    {
      label: 'Giá giảm dần',
      content: <ProductList />,
    },
  ]

  return <CategoryLayout title="Gian hàng Phần mềm" formFields={productTypeSoftware} tabs={tabs} />
}
