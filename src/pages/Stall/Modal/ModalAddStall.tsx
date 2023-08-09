import {
  Button as ButtonAntd,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Space,
} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Option } from 'antd/es/mentions'
import { FaUpload } from 'react-icons/fa'
type Props = {
  setIsOpenModalAddStall: (value: boolean) => void
  isOpenModalAddStall: boolean
}
function ModalAddStall({ setIsOpenModalAddStall, isOpenModalAddStall }: Props) {
  const optionsCheckbox = [
    { label: 'Bạn có muốn cho reseller bán hàng không?', value: 'isReseller' },
    {
      label:
        'Sản phẩm không trùng lặp (Cam kết sản phẩm chỉ được bán ra 1 lần và duy nhất trên hệ thống)',
      value: 'isDuplicate',
    },
    {
      label:
        'Sử dụng kho hàng riêng (Hàng sẽ không tải trực tiếp lên TaphoamMMO mà sử dụng API lấy hàng từ kho của bạn)',
      value: 'isPrivate',
    },
  ]
  return (
    <Modal
      open={isOpenModalAddStall}
      title="Thêm gian hàng"
      centered
      width={800}
      onOk={() => setIsOpenModalAddStall(false)}
      onCancel={() => setIsOpenModalAddStall(false)}
      footer={false}
      destroyOnClose={false}
      closable={false}
    >
      <Form layout="vertical" labelAlign="left">
        <Row>
          <Col span={12} className="pr-1">
            <Form.Item label="Tên gian hàng">
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

        <Row>
          <Col span={12} className="pr-1">
            <Form.Item label="Loại gian hàng">
              <Select placeholder="Select a option and change input text above">
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Loại chiết khấu cho sàn">
              <Select placeholder="Select a option and change input text above">
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Form.Item
            label={
              <span>
                Đánh giá hoàn tiền(%) - "0":tắt | Khuyến khích khách hàng đánh giá bằng cách hoàn
                lại một khoản tiền (từ 0.1% - tối đa 5%)
              </span>
            }
          >
            <InputNumber className="w-full" min={0} precision={1} step={0.1} />
          </Form.Item>
          <Form.Item>
            <Checkbox.Group>
              {optionsCheckbox &&
                optionsCheckbox.map((item) => {
                  return (
                    <Col span={24}>
                      <Checkbox value={item.value}>{item.label}</Checkbox>
                    </Col>
                  )
                })}
            </Checkbox.Group>
          </Form.Item>
          <Form.Item className="w-full" label="Mô tả ngắn">
            <Input />
          </Form.Item>
          <Form.Item className="w-full" label="Mô tả chi tiết">
            <TextArea
              showCount
              maxLength={100}
              style={{ height: 120, marginBottom: 24 }}
              placeholder="can resize"
            />
          </Form.Item>

          <Form.Item className="w-full" label="Ảnh gian hàng (Kích thước lớn hơn 320px.)">
            {' '}
            <ButtonAntd icon={<FaUpload />}>Upload</ButtonAntd>
          </Form.Item>

          <Form.Item className="w-full text-center">
            <Space className="">
              <ButtonAntd
                onClick={() => setIsOpenModalAddStall(false)}
                style={{
                  width: '150px',
                  border: '1px solid grey',
                  borderRadius: '0px',
                }}
              >
                Huỷ
              </ButtonAntd>
              <ButtonAntd
                htmlType="submit"
                className="w-36 rounded-none border-black-100 bg-green-100 text-white"
                //   style={{ width: '150px', borderRadius: '0px', border: '1px solid grey',backgroundColor: "" }}
              >
                Thêm mới
              </ButtonAntd>
            </Space>
          </Form.Item>
        </Row>
      </Form>
    </Modal>
  )
}

export default ModalAddStall
