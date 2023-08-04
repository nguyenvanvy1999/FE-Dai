import { ReactNode } from "react";

export interface InputProps {
    label?: string;
    placeHolder?: string;
    type?: string;
    postNode?: ReactNode;
    value: string;
    onChange: () => void;
}

export default function InputV1({ label = "", placeHolder = "", type = "text", postNode, value, onChange } : InputProps) {

    return (
        <div className="mt-5">
            {label && <label className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            }
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type={type}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
            {postNode}
        </div>
    )
}
