import SelectV1 from "../../components/Input/Select"
import { MainLayout } from "../../components/Layout"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import InputV1 from "../../components/Input/InputV1";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CKEditor } from 'ckeditor4-react';
import Button from "../../components/Button";

const options = [
    {
        label: 'Tất cả',
        value: '',
        selected: true
    },
    {
        label: 'Chờ duyệt',
        value: 'wait'
    }
]

const schema = yup.object({
    category: yup.string().required(),
    title: yup.string().required(),
    content: yup.string().required(),
})

type IFormPost = yup.InferType<typeof schema>;

function AddPost() {
    const { handleSubmit, control, formState : { errors } } = useForm<IFormPost>({
        resolver: yupResolver(schema),
        defaultValues: {
            category: '',
            title: '',
            content: '',
        }
    });

    const onSubmit : SubmitHandler<IFormPost> = (data) => {
        console.log("==data==", data);
    }

    return (
        <MainLayout>
            <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto px-4 md:px-10 border border-gray-300 rounded-lg py-5 my-10">
                <div className="text-lg font-semibold">Thêm bài viết</div>
                
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) =>
                        <SelectV1
                            label="Chọn danh mục"
                            value={field.value}
                            onChange={field.onChange}
                            options={options}
                            className="mt-5 w-full lg:w-72"
                            required
                        />
                    }
                />
                <p className="text-red-600 mt-1">{errors.category?.message}</p>

                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => {
                        return <InputV1 label="Tựa đề" onChange={field.onChange} value={field.value} required />;
                    }}
                />
                <p className="text-red-600 mt-1">{errors.title?.message}</p>

                <p className="mt-5 font-semibold">Nội dung bài viết <span className="text-red-600">{"*"}</span></p>
                <div className="mt-2">
                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) => {
                            return <CKEditor initData={field.value} onChange={(e) => {field.onChange(e.editor.getData())}} />
                        }}
                    />
                </div>
                <p className="text-red-600 mt-1">{errors.content?.message}</p>

                <div className="mt-5">
                    <label className="block mb-2 text-sm font-semibold text-gray-900" htmlFor="default_size">Ảnh bài viết (Kích thước lớn hơn 320px.)</label>
                    <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="default_size" type="file"></input>
                </div>

                <div className="flex mt-20">
                    <Button variant="secondary" className="w-32 g:w-32 border border-solid border-green-500 text-center">
                        <span className="text-gray-900">Quay lại</span>
                    </Button>
                    <Button variant="primary" className="w-32 g:w-32 ml-4 lg:ml-8 border border-solid border-green-500 text-center" type="submit">
                        <span className="text-white">Tạo mới</span>
                    </Button>
                </div>

                <div>
                    <p className="text-red-600 font-semibold mt-3">Lưu ý khi viết bài:</p>
                    <ul className="text-green-600 list-disc ml-10">
                        <li>Những nội dung được duyệt chỉ gói gọn trong các chia sẻ về "nghề" MMO, kiến thức, kinh nghiệm, trải nghiệm về mọi mảng trong cách kiếm tiền online!</li>
                        <li>Các nội dung về chính trị, tôn giáo, kích động... sẽ không được duyệt!</li>
                        <li>Không đăng các bài viết quảng cáo, tuyển ref, giới thiệu dự án, lùa gà... (không cần biết dự án có lừa đảo hay không)</li>
                        <li>Không đăng nội dung vi phạm quyền sở hữu trí tuệ của người khác, bao gồm vi phạm nhãn hiệu hàng hóa và bản quyền.</li>
                        <li>Những bài viết chất lượng sẽ được lựa chọn để làm điểm tuần và nhận thưởng từ sàn.</li>
                        <li>Tiền donate sẽ được nhận sau 3 ngày.</li>
                    </ul>
                </div>
            </form>
        </MainLayout>
    )
}

export default AddPost
