import { Card } from 'antd'
import { MainLayout } from '../../components/Layout'
import { Typography } from 'antd'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputV1 from '../../components/Input/InputV1'
import Button from '../../components/Button'
const { Title } = Typography

const schema = yup.object({
  email: yup.string().required(),
})

type IFormSignIn = yup.InferType<typeof schema>

export default function ForgotPasswordPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormSignIn>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit: SubmitHandler<IFormSignIn> = (data) => {
    console.log(data)
  }

  return (
    <MainLayout>
      <div className="flex justify-center items-center mb-9">
        <Card style={{ width: '50%' }}>
          <Title level={3} className="text-28px font-bold">
            Lấy lại mật khẩu
          </Title>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <InputV1
                    label="Nhập email đã đăng ký"
                    onChange={field.onChange}
                    value={field.value}
                    className="mt-4"
                  />
                )
              }}
            />
            <p className="text-red-600 mt-1">{errors.email?.message}</p>
            <Button variant="primary" className="w-32 mt-5 text-center" type="submit">
              <span className="text-white">Reset</span>
            </Button>
          </form>
        </Card>
      </div>
    </MainLayout>
  )
}
