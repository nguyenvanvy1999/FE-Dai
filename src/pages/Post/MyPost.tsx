import { AiOutlineSearch } from "react-icons/ai"
import { MainLayout } from "../../components/Layout"

function MyPost() {
    return (
        <MainLayout>
            <div className="container mx-auto sm:px-5 md:px-5">
                <div>Kinh nghiệm MMO</div>
                <p>Nơi chia sẻ kiến thức, kinh nghiệm và trải nghiệm về kiếm tiền online.</p>
                <div className="cols grid-cols-3">
                    <div>
                        <div className="border border-gray-50 rounded-lg">
                            <input placeholder="" />
                            <AiOutlineSearch />
                        </div>
                    </div>
                    <div className="cols col-span-1 md:col-span-2">

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default MyPost
