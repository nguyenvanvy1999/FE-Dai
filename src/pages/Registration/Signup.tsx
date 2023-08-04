import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import Button from "../../components/Button"
import CheckboxV1 from "../../components/Input/CheckboxV1"
import InputV1 from "../../components/Input/InputV1"

const schema = yup.object({
    username: yup.string().required().min(8),
    email: yup.string().required().trim().email(),
    password: yup.string().required().trim().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    repeat_password: yup.string().required().oneOf([yup.ref('password'), ""], 'Passwords must match'),
    policy: yup.boolean().required(),
})

type IFormSignUp = yup.InferType<typeof schema>;

function Signup() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: '',
            password: '',
            email: '',
            repeat_password: '',
            policy: false,
        }
    });

    const onSubmit : SubmitHandler<IFormSignUp> = (data) => {
        console.log("==data==", data);
    }

    return (
        <form className="container col-span-2 border-solid border rounded-lg border-gray-200 p-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p className="text-left font-semibold text-xl">Đăng ký</p>
                <p className="text-green-600 mt-5">
                    Chú ý: Nếu bạn sử dụng các chương trình <span className="text-red-500">Bypass Captcha</span> có thể không đăng ký tài khoản được.
                </p>
                <hr className="bg-gray-500 mt-5" />
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => {
                                return <InputV1 label="Tài khoản" onChange={field.onChange} value={field.value} />;
                            }}
                        />
                        <p className="text-red-600 mt-1">{errors.username?.message}</p>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) =>
                                <InputV1 label="Mật khẩu" type="password" value={field.value} onChange={field.onChange}/>
                            }
                        />
                        <p className="text-red-600 mt-1">{errors.password?.message}</p>
                    </div>
                    <div>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => {
                                return <InputV1 label="Email" onChange={field.onChange} value={field.value} />;
                            }}
                        />
                        <p className="text-red-600 mt-1">{errors.email?.message}</p>
                        <Controller
                            name="repeat_password"
                            control={control}
                            render={({ field }) =>
                                <InputV1 label="Nhập lại mật khẩu" type="password" value={field.value} onChange={field.onChange} />
                            }
                        />
                        <p className="text-red-600 mt-1">{errors.repeat_password?.message}</p>
                    </div>
                </div>
                <Controller
                    name="policy"
                    control={control}
                    render={({ field }) =>
                        <CheckboxV1
                            id="policy-signup"
                            label={<span>Tôi đã đọc và đồng ý với<span className="text-green-600 cursor-pointer ml-2">Điều khoản sử dụng Tạp Hóa MMO</span></span>}
                            checked={field.value}
                            onChange={(e: any) => {
                                field.onChange(e.target.checked)
                            }}
                        />
                    }
                />
                <p className="text-red-600 mt-1">{errors.policy?.message}</p>

                <Button variant="primary" className="w-32 mt-14 text-center" type="submit">
                    <span className="text-white">Đăng ký</span>
                </Button>
            </div>
        </form>
    )
}

export default Signup
