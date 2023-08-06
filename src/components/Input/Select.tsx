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

export default SelectV1;