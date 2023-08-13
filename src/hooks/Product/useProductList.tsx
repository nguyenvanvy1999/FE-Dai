// import { useEffect, useState } from "react";
// import { IResponsePaging } from "../../models/Product";
// import productApi from "../../api/productApi";

// interface IProductListHookProps {
//   page: number
// }

// const useProductList = ({ page } : IProductListHookProps) => {
//   const [products, setProduct] = useState<IResponsePaging>()

//   useEffect(() => {
//     async function callApi () {
//       const dataList : IResponsePaging = await productApi.productList({ page });
//       setProduct(dataList)
//     }
//     callApi()
//   }, [page])

//   return {
//     products,
//     setProduct
//   }
// }

// export default useProductList;