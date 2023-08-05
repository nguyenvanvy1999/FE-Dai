export interface InputProps {
    id?: string;
    value: string;
    onChange: (e: any) => void;
    options: Record<string, any>;
    placeHolder?: string;
    className?: string;
}

function SelectV1({ id, value, onChange, options, placeHolder = "", className = ""} : InputProps) {
    return (
        <div className={`${className}`}>
            {placeHolder && <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-900`}>{placeHolder}</label>}
            <select value={value} onChange={onChange} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                {options.map((item: any) => <option value={item.value} selected={item.selected}>{item.label}</option>)}
            </select>
        </div>
    )
}

export default SelectV1;