import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select, Space } from 'antd'
import { Option } from 'antd/es/mentions'
type Props = {
  isOpenModalAddPromotion: boolean
  setIsOpenModalAddPromotion: (value: boolean) => void
}

function ModalAddPromotion({ isOpenModalAddPromotion, setIsOpenModalAddPromotion }: Props) {
  return (
    <Modal
      title="Thêm mã giảm giá"
      centered
      width={800}
      open={isOpenModalAddPromotion}
      footer={false}
      onOk={() => setIsOpenModalAddPromotion(false)}
      onCancel={() => setIsOpenModalAddPromotion(false)}
      closable={false}
    >
      <Form layout="vertical" labelAlign="left">
        <Row>
          <Col span={12} className="pr-1">
            <Form.Item label="Mã giảm giá">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Loại hình kinh doanh">
              <Select placeholder="Select a option and change input text above">
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Mô tả">
          <Input />
        </Form.Item>

        <Row>
          <Col span={12} className=" pr-1">
            <Form.Item label="Ngày bắt đầu">
              <DatePicker showTime format="DD-MM-YYYY" className="w-full" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Ngày kết thúc">
              <DatePicker showTime format="DD-MM-YYYY" className="w-full " />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12} className="pr-1">
            <Form.Item label="Loại giảm giá">
              <Select placeholder="Select a option and change input text above">
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Số tiền tối đa">
              <InputNumber min={0} precision={0} step={1} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Số lần sử dụng" wrapperCol={{ offset: 0, span: 12 }}>
          <InputNumber min={0} precision={0} step={1} className="w-full" />
        </Form.Item>

        <Form.Item className="w-full text-center">
          <Space className="">
            <Button
              onClick={() => setIsOpenModalAddPromotion(false)}
              style={{
                width: '150px',
                border: '1px solid grey',
                borderRadius: '0px',
              }}
            >
              Huỷ
            </Button>
            <Button
              htmlType="submit"
              className="w-36 rounded-none border-black-100 bg-green-100 text-white"
              //   style={{ width: '150px', borderRadius: '0px', border: '1px solid grey',backgroundColor: "" }}
            >
              Thêm mới
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalAddPromotion
