import { Controller, SubmitHandler, useForm } from "react-hook-form";
import SelectV1, { InputNumber } from "../../components/Input/Select";
import ModalCustom from "../../components/Modal"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputV1 from "../../components/Input/InputV1";
import Button from "../../components/Button";

const options = [
  {
    label: 'Chọn',
    value: '',
  },
  {
    label: 'ViettinBank',
    value: 'vtb'
  }
]

interface IExchangeModal {
  openModal: boolean;
  setOpenModal: (e: any) => void;
}

const schema = yup.object({
  amount: yup.number().required().min(500000),
  bank: yup.string().required(),
  receiver: yup.string().required(),
  bankAccount: yup.string().required(),
})

type IFormPost = yup.InferType<typeof schema>;

function ExchangeModal({ openModal, setOpenModal }: IExchangeModal) {
  const { handleSubmit, control } = useForm<IFormPost>({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: 500000,
      bank: '',
      receiver: '',
      bankAccount: ''
    }
  });

  const onSubmit: SubmitHandler<IFormPost> = (data) => {
    console.log("==data==", data);
  }
  return (
    <ModalCustom
      title={<div className="text-lg font-medium">Yêu cầu rút tiền</div>}
      open={openModal}
      onCancel={setOpenModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-green-500 mt-5 italic">Hệ thống chỉ lưu số tài khoản cho đến khi giao dịch thành công.
          Số tiền GD tối thiểu là 500.000 và phải là bội số của 100.000 .</div>
        <div className="mt-2">
          <Controller
            name="amount"
            control={control}
            render={({ field }) => {
              return <InputNumber value={field.value} onChange={field.onChange} label="Số tiền"></InputNumber>
            }}
          />
          <div className="mt-2">
            <Controller
              name="bank"
              control={control}
              render={({ field }) => {
                return <SelectV1 value={field.value} onChange={field.onChange} options={options} label="Tên ngân hàng"></SelectV1>
              }}
            />
          </div>
          <div className="mt-2">
            <Controller
              name="receiver"
              control={control}
              render={({ field }) => {
                return <InputV1 label="Người thụ hưởng" onChange={field.onChange} value={field.value} required />;
              }}
            />
          </div>
          <div className="mt-2">
            <Controller
              name="bankAccount"
              control={control}
              render={({ field }) => {
                return <InputV1 label="Số tài khoản" onChange={field.onChange} value={field.value} required />;
              }}
            />
          </div>
        </div>
        <hr className="mt-5 bg-gray-400 mx-3 h-1px w-full" />
        <div className="mt-5 flex justify-end">
          <Button variant="text" className="w-32 g:w-32 ml-4 lg:ml-8 border border-solid border-green-500 text-center" onClick={() => {setOpenModal(false)}}>
            <span className="">Đóng</span>
          </Button>
          <Button variant="primary" className="w-32 g:w-32 ml-2 lg:ml-2 border border-solid border-green-500 text-center" type="submit">
            <span className="text-white">Rút tiền</span>
          </Button>
        </div>
      </form>
    </ModalCustom>
  )
}

export default ExchangeModal