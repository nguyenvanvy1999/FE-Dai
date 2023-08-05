import { createElement } from "react"
import { ContactList } from "../../models"
import { Link } from "react-router-dom"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import InputV1 from "../../components/Input/InputV1";
import TextAreaV1 from "../../components/Input/TextAreaV1";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    email: yup.string().required().email(),
    phone: yup.string().required(),
    subject: yup.string().required(),
    content: yup.string().required(),
})

type IFormSupport = yup.InferType<typeof schema>;

function Support() {
    const { control, handleSubmit } = useForm<IFormSupport>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            phone: '',
            subject: '',
            content: ''
        }
    });

    const onSubmit : SubmitHandler<IFormSupport> = (data) => {
        console.log("==data==", data);
    };

    return (
        <form className="container mx-auto px-14" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-10 mb-6 md:grid-cols-2 p-10 border border-gray-300 rounded-lg">
                <div>
                    <p className="text-left font-semibold text-xl mt-2">Liên hệ hỗ trợ</p>
                    <div className="mt-10">
                        <p className="text-green-600 cursor-pointer">Câu hỏi thường gặp</p>
                        <ul className="mt-5">
                            {ContactList.map((contact, idx) => (
                                <li key={contact.title} className={`px-1 ${idx <= 1 && 'text-green-600'}`}>
                                    <Link
                                        to="/"
                                        className={`mt-3 flex items-center gap-2 text-sm text-black-light font-normal ${idx <= 1 && 'text-green-600'}`}
                                    >
                                        {createElement(contact.icon, { className: contact.iconClassName })}
                                        {contact.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p>
                        Nhân viên hỗ trợ của chúng tôi sẽ cố gắng xử lý khiếu nại và giải quyết thắc mắc của các bạn nhanh nhất có thể.
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-left font-semibold text-xl mt-2">Tin nhắn</p>
                    <div className="mt-2">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => {
                                        return <InputV1 label="Email" onChange={field.onChange} value={field.value} />;
                                    }}
                                />
                            </div>
                            <div>
                                <Controller
                                    name="phone_number"
                                    control={control}
                                    render={({ field }) => {
                                        return <InputV1 label="Số điện thoại" onChange={field.onChange} value={field.value} />;
                                    }}
                                />
                            </div>
                        </div>
                        <Controller
                            name="subject"
                            control={control}
                            render={({ field }) => {
                                return <InputV1 label="Chủ đề" onChange={field.onChange} value={field.value} />;
                            }}
                        />
                        <Controller
                            name="content"
                            control={control}
                            render={({ field }) => {
                                return <TextAreaV1 label="Nội dung" onChange={field.onChange} value={field.value} />;
                            }}
                        />
                        <Button variant="primary" className="w-32 mt-5 text-center" type="submit">
                            <span className="text-white">Gửi</span>
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Support
