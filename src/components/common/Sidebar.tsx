import { MdKeyboardArrowDown } from 'react-icons/md'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormField, ReferPost } from '../../models'
import CheckboxV1 from '../Input/CheckboxV1'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiFillLike } from 'react-icons/ai'
import { TbMessages } from 'react-icons/tb'

const schema = yup.object().shape({
  // Define validation schema dynamically based on formFields
})

interface SidebarProps {
  formFields: FormField[]
  className: string
}

export default function Sidebar({ formFields, className }: SidebarProps) {
  const {
    handleSubmit,
    control,
    //formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <div className={`${className} border-2 border-grey-200 mr-30px w-255px`}>
        <div>
          <div className="px-5 pt-5 border-b-2 border-grey-100">
            <h4 className="mb-5 font-bold text-xl">Bộ lọc</h4>
          </div>
          <div className="py-2 px-5">
            <button className="px-1.5 py-10px text-sm whitespace-nowrap rounded-sm active:bg-white-light flex items-center -mx-7px">
              Chọn một hoặc nhiều sản phẩm
              <MdKeyboardArrowDown
                className="text-grey-400 active:text-grey-500 w-full h-full"
                size={48}
              />
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
              {formFields.map((formItem) => {
                return (
                  <Controller
                    key={formItem.name}
                    name={formItem.name}
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <CheckboxV1
                        id={field.name}
                        label={formItem.label}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    )}
                  />
                )
              })}
              <Button type="submit" variant="success" className="font-bold mt-5">
                Tìm kiếm
              </Button>
            </form>
          </div>
        </div>
        <div className="border border-grey-200 p-7">
          <h4 className="mb-5 font-bold text-xl">Bài viết tham khảo</h4>
          <hr />
          {ReferPost.map((item, index) => (
            <div className="mb-3" key={index}>
              <img src={item.image} alt={item.author} className="w-full" />
              <Link to="" className="font-bold hover:text-green-600 text-15px leading-5">
                {item.title}
              </Link>
              <div className="flex items-center gap-1.5">
                <span className=" gap-1.5 text-13px">
                  <Link to="" className="flex items-center">
                    <AiOutlineEye size={13} />
                    {item.viewCount}
                  </Link>
                </span>
                <span className=" gap-1.5 text-13px">
                  <Link to="" className="flex items-center">
                    <AiFillLike size={13} />
                    {item.likeCount}
                  </Link>
                </span>
                <span className=" gap-1.5 text-13px">
                  <Link to="" className="flex items-center">
                    <TbMessages size={13} />
                    {item.cmtCount}
                  </Link>
                </span>
                -
                <span className="text-green-400 text-13px ">
                  <Link to="">{item.author}</Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
