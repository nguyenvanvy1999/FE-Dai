import { AiOutlineSearch } from "react-icons/ai";

export interface InputProps {
    placeHolder?: string;
    value: string;
    onChange: (e: any) => void;
}

function SearchBox({ placeHolder, value, onChange } : InputProps) {
    return (
        <div className="flex items-center border border-gray-300 rounded-lg px-2 py-2">
            <input className="w-full outline-none" placeholder={placeHolder} value={value} onChange={onChange} />
            <AiOutlineSearch />
        </div>
    )
}

export default SearchBox;