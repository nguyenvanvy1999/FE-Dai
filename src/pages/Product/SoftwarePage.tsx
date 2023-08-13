import { CategoryLayout } from '../../components/Layout'
import ProductList from '../../components/ProductList'
import { FormSoftwareFields } from '../../models'
import useProductList from '../../hooks/Product/useProductList'
import { useState } from 'react';

export default function SoftwarePage() {
  const [page, setPage] = useState(1);
  const { products } = useProductList({ page });

  const tabs = [
    {
      label: 'Phổ biến',
      content: <ProductList page={page} list={products} setPage={setPage} />,
    },
    {
      label: 'Giá tăng dần',
      content: <ProductList page={page} list={products} setPage={setPage} />,
    },
    {
      label: 'Giá giảm dần',
      content: <ProductList page={page} list={products} setPage={setPage} />,
    },
  ]
  return (
    <CategoryLayout
      formFields={FormSoftwareFields}
      title="Gian hàng Phần mềm"
      total={products?.totalCount || 0}
      tabs={tabs}
    />
  )
}
