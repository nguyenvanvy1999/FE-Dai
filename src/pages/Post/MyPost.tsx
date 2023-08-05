import { MainLayout } from "../../components/Layout"
import SearchBox from "../../components/Input/SearchBox"
import { useState } from "react";
import SelectV1 from "../../components/Input/Select";
import Button from "../../components/Button";

const options = [
    {
        label: 'Tất cả',
        value: 'all',
        selected: true
    },
    {
        label: 'Chờ duyệt',
        value: 'wait'
    }
]

function MyPost() {
    const [searchText, setSearchText] = useState("");
    const [selectValue, setSelectValue] = useState("");
    return (
        <MainLayout>
            <div className="container mx-auto sm:px-5 md:px-5">
                <div className="text-lg font-semibold">Bài viết của bạn</div>
                <div className="flex-noe lg:items-center lg:flex my-10">
                    <div className="w-full lg:w-96">
                        <SearchBox placeHolder={"Tìm bài viết"} value={searchText} onChange={(e: any) => { setSearchText(e.target.value) }} />
                    </div>
                    <div className="flex items-center justify-between lg:justify-start mt-5 lg:mt-0">
                        <SelectV1 value={selectValue} onChange={(e: any) => { setSelectValue(e.target.value); } } options={options} className="ml-0 lg:ml-8 w-full lg:w-28" />
                        <Button variant="primary" className="w-48 g:w-32 ml-4 lg:ml-8 border border-solid border-green-500 text-center" type="submit">
                            <span className="text-white">Tạo bài mới</span>
                        </Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default MyPost
