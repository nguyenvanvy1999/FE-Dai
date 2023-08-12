import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Button from '../../components/Button'
import InputV1 from '../../components/Input/InputV1'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../constants'

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
})

type IFormSignIn = yup.InferType<typeof schema>

function SignIn() {
  const { handleLogin } = useAuth()
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormSignIn>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<IFormSignIn> = (data) => {
    handleLogin(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container border-solid border rounded-lg border-gray-200 p-5">
        <p className="text-left font-semibold text-xl">Đăng nhập</p>
        <hr className="bg-gray-500 mt-5" />
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return <InputV1 label="Tài khoản" onChange={field.onChange} value={field.value} />
          }}
        />
        <p className="text-red-600 mt-1">{errors.email?.message}</p>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputV1
              label="Mật khẩu"
              type="password"
              value={field.value}
              onChange={field.onChange}
              postNode={
                <div className="mt-1">
                  <Link className="text-green-600 cursor-pointer" to={RoutePath.Forgotpassword}>
                    Quên mật khẩu
                  </Link>
                </div>
              }
            />
          )}
        />
        <p className="text-red-600 mt-1">{errors.password?.message}</p>
        {/* <Controller
          name="policy"
          control={control}
          render={({ field }) => (
            <CheckboxV1
              id="policy-signin"
              label="Ghi nhớ đăng nhập"
              checked={field.value}
              onChange={(e: any) => field.onChange(e.target.checked)}
            />
          )}
        />
        <p className="text-red-600 mt-1">{errors.policy?.message}</p> */}

        <Button variant="primary" className="w-32 mt-5 text-center" type="submit">
          <span className="text-white">Đăng nhập</span>
        </Button>
        {/* 
                    Login google
                */}
      </div>
    </form>
  )
}

export default SignIn
