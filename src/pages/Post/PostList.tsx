import { AiOutlineSearch } from "react-icons/ai"
import { MainLayout } from "../../components/Layout"
import Button from "../../components/Button"
import Image from "../../components/Image"

function PostList() {
    return (
        <MainLayout>
            <div className="container mx-auto sm:px-5 md:px-5">
                <div className="font-bold">Kinh nghiệm MMO</div>
                <p className="mt-5">Nơi chia sẻ kiến thức, kinh nghiệm và trải nghiệm về kiếm tiền online.</p>
                <div className="grid grid-cols-3 mt-5 gap-5">
                    <div className="col-span-1 p-3 pl-0">
                        <div className="flex items-center border border-gray-400 rounded-lg px-2 py-2">
                            <input className="w-full" placeholder="" />
                            <AiOutlineSearch />
                        </div>
                        <Button variant="primary" className="w-full mt-5 text-left" type="submit">
                            <span className="text-white">Quản lý bài viết</span>
                        </Button>
                        <div className="border border-gray-400 rounded-lg mt-5 p-5">
                            <span className="font-bold">Thể loại</span>
                            <div className="mt-5">
                                <ul>
                                    <li>AAAAA....</li>
                                    <li>BBBBB....</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-5">
                        <div>
                            <Image custom={{ height: '220px' }}/>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </MainLayout>
    )
}

export default PostList
