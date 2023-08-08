import { AiFillCheckCircle, AiFillFileImage, AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { MainLayout } from "../../components/Layout";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import TextAreaV1 from "../../components/Input/TextAreaV1";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

interface IUserChat {
    active?: boolean;
}

interface IBoxChat {
    left?: boolean;
}

function UserChat ({ active = false } : IUserChat) {
    return (
        <div className={`block md:flex items-center p-4 justify-between cursor-pointer ${active && "bg-gray-200"} hover:bg-gray-100`}>
            <img
                src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/117026679_896635357494291_6121757897088876808_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Na8nD4Q6xbwAX8wgJUF&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfBPlkUUlPwaqkZ-Qtnz6fcB-mLizdG2vvMlLAvgKYBuJg&oe=64F694B8"
                className="rounded-full w-6 h-6"
            />
            <div className="flex-grow md:px-4 text-sm">
                <div className="flex items-center">
                    <span className="font-semibold">taphoammo</span>
                    <span className="text-red-600 ml-2"><AiFillCheckCircle /></span>
                </div>
                <div>
                    <p className="text-min md:text-sm">Chào mừng bạn đến với taphoammo...</p>
                </div>
            </div>
            <div className="self-start">
                <span className="font-semibold text-min md:text-sm">2/8/2023</span>
            </div>
        </div>
    )
}

function BoxChat ({ left } : IBoxChat) {

    return (
        <div className={`flex mb-5 ${left ? "pr-5 lg:pr-60" : "pl-5 lg:pl-60"}`}>
            {left && <img
                src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/117026679_896635357494291_6121757897088876808_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Na8nD4Q6xbwAX8wgJUF&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfBPlkUUlPwaqkZ-Qtnz6fcB-mLizdG2vvMlLAvgKYBuJg&oe=64F694B8"
                className="mr-2 rounded-full w-12 h-12"
            />}
            <div className="text-sm w-full">
                <p className="bg-gray-200 p-2 rounded-md">Chào mừng bạn đến với taphoammo. Nếu có khó khăn gì trong quá trình sử dụng trang, nhắn tin cho mình ngay nhé. Bạn có thể tham khảo thêm về các câu hỏi thường gặp trên menu chính (FAQs). Xin cảm ơn.</p>
                <span>22:01 02/08</span>
            </div>
            {!left && <img
                src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/117026679_896635357494291_6121757897088876808_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Na8nD4Q6xbwAX8wgJUF&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfBPlkUUlPwaqkZ-Qtnz6fcB-mLizdG2vvMlLAvgKYBuJg&oe=64F694B8"
                className="ml-2 rounded-full w-12 h-12"
            />}
        </div>
    )
}

function Chatbox () {
    const [textChat, setTextChat] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);  
    const [isExpand, setIsExpand] = useState(true);

    const addEmoji = (e: any) => {  
        const sym = e.unified.split("-");  
        const codesArray: number[] = [];  
        sym.forEach((el: any) => codesArray.push(Number("0x" + el)));  
        const emoji = String.fromCodePoint(...codesArray);  
        setTextChat(textChat + emoji);  
    };

    return (
        <MainLayout>
            <div className={`box border border-gray-300 rounded-lg grid grid-cols-5`}>
                {isExpand &&
                    <div className="col-span-2">
                        <div className="border-b border-gray-300 flex justify-between items-center py-3 px-5">
                            <div className="flex items-center">
                                <p className="font-semibold">Gần đây</p>
                                <span className="ml-2 ">
                                    <HiSpeakerWave /> 
                                </span>
                            </div>
                            <div>
                                <button className="bg-gray-200 p-2 px-5 rounded-lg text-blue-400" onClick={() => setIsExpand(false)}>
                                    <AiOutlineDoubleLeft size={24} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <UserChat active />
                            <UserChat />
                        </div>
                    </div>
                }
                <div className={`border-l border-gray-300 ${isExpand ? "col-span-3" : "col-span-5"}`}>
                    <div className="bg-gray-200 text-center py-2 relative">
                        {!isExpand &&
                            <button className="bg-gray-300 p-0.5 px-1 md:p-2 md:px-5 rounded-lg text-blue-400 absolute left-3 top-1 md:left-5 md:top-3" onClick={() => setIsExpand(true)}>
                                <AiOutlineDoubleRight size={24} />
                            </button>
                        }
                        <div className="flex items-center justify-center">
                            <div className="flex items-center">
                                <span className="text-green-600 font-semibold">@taphoammo</span>
                                <span className="text-red-600 ml-1"><AiFillCheckCircle /></span>
                            </div>
                            <span className="text-gray-500 text-min ml-3">
                                Online 10 giờ trước.
                            </span>
                        </div>
                        <div>
                            <span className="p-1 bg-yellow-500 text-min">
                                Xin hãy cảnh giác với giao dịch không được bảo hiểm bên ngoài sàn!
                            </span>
                        </div>
                    </div>

                    {/* --------------- */}

                    <div className="p-2 h-600px overflow-y-auto">
                        <BoxChat left />
                        <BoxChat left={false} />
                    </div>

                    <div className="flex border-t border-gray-300 p-2 items-start">
                        <div className="flex items-center px-5">
                            <label htmlFor="upload-photo" className="cursor-pointer">
                                <AiFillFileImage />
                            </label>
                            <input type="file" name="photo" id="upload-photo" className="hidden" />

                            <button className="button ml-5 relative" onClick={() => setShowEmojis(!showEmojis)}>  
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"  
                                    className="icon w-5 h-5"  
                                    fill="none"  
                                    viewBox="0 0 24 24"  
                                    stroke="currentColor"  
                                    >  
                                    <path  
                                        stroke-linecap="round"  
                                        stroke-linejoin="round"  
                                        stroke-width="2"  
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"  
                                    />  
                                </svg>
                                {showEmojis &&
                                    <div className="absolute bottom-9 md:left-0 -left-16">
                                        <Picker data={data} onEmojiSelect={addEmoji} />
                                    </div>
                                }
                            </button> 
                            <div className="ml-5">
                                <FaBook />
                            </div>
                            
                        </div>
                        <TextAreaV1 className="flex-grow" value={textChat} onChange={(e) => { setTextChat(e.target.value) }} />
                        <button className="ml-3 bg-blue-500 rounded-full text-white p-2">
                            <FaTelegramPlane size={26} />
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Chatbox;