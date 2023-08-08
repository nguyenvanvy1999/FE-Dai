import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export interface InputProps {
    id?: string;
    value: string;
    onChange: (e: any) => void;
    options: Record<string, any>;
    label?: string;
    className?: string;
    required?: boolean;
}

function SelectV1({ id, value, onChange, options, label = "", className = "", required = false } : InputProps) {
    return (
        <div className={`${className}`}>
            {label && <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-900`}>{label}<span className="text-red-600">{required && " *"}</span></label>}
            <select value={value} onChange={onChange} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                {options.map((item: any, key: number) => <option key={key} value={item.value}>{item.label}</option>)}
            </select>
        </div>
    )
}

export interface InputNumberProps {
    id?: string;
    value: number;
    onChange: (e: any) => void;
    label?: string;
    className?: string;
    required?: boolean;
}

export function InputNumber({ id, value, onChange, label = "", className = "", required = false } : InputNumberProps) {
    const handleUp = () => {
        onChange(Number(value) + 100000)
    }

    const handleDown = () => {
        if (value <= 500000) return;
        onChange(Number(value) - 100000)
    }

    return (
        <div className={`${className}`}>
            {label && <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-900`}>{label}<span className="text-red-600">{required && " *"}</span></label>}
            <div className="flex justify-center rounded-lg border border-gray-300 bg-gray-50">
                <input
                    className="outline-none block w-full p-2.5 ml-1 bg-transparent"
                    value={value}
                    onChange={onChange}
                />
                <div className="flex flex-col items-center justify-center mr-1" >
                    <button onClick={handleUp} className="hover:bg-gray-200" type="button" ><MdKeyboardArrowUp /></button>
                    <button onClick={handleDown} className="hover:bg-gray-200" type="button" ><MdKeyboardArrowDown /></button>
                </div>
            </div>
        </div>
    )
}

export default SelectV1;