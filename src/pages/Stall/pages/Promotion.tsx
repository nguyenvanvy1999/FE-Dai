import { Button, Table } from 'antd'
import ModalAddPromotion from '../Modal/ModalAddPromotion'
import { useState, useEffect } from 'react'
import { StallLayout } from '../../../components/Layout'
import axios from 'axios' 
import authStorage from '../../../utils/authStorage'  

function Promotion() {
  const columns = [
    {
      title: 'Thao tác',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tên gian hàng',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Loại',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trùng',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Reseller',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Đơn giá',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Sàn',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Kho',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const [isOpenModalAddPromotion, setIsOpenModalAddPromotion] = useState(false)
  const [data, setData] = useState([])  


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const token = authStorage.getToken()

      const response = await axios.get('http://localhost:3333/api/discount/getAll', {
        headers: {
          Authorization: `Bearer ${token}`, // Gửi access token trong tiêu đề Authorization
        },
      })
      setData(response.data.data) 
    } catch (error) {
      console.log(error)
    }
  } 


  
  return (
    <StallLayout>
      <div className="m-4 max-w-full bg-[#ffff] pl-2">
        <div className="flex items-center justify-between">
          <p className="text-md	font-bold	mb-2 mt-3">Mã giảm giá</p>
          <Button
            onClick={() => setIsOpenModalAddPromotion(true)}
            type="primary"
            className="bg-blue-700 mr-3 rounded-xl"
          >
            Thêm mới
          </Button>
        </div>
        <Table dataSource={data} columns={columns} />
        <ModalAddPromotion
          isOpenModalAddPromotion={isOpenModalAddPromotion}
          setIsOpenModalAddPromotion={setIsOpenModalAddPromotion}
        />
      </div>
    </StallLayout>
  )
}

export default Promotion
