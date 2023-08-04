import { ReactNode } from "react";

export interface InputProps {
    label: string;
    placeHolder: string;
    type?: string;
    postNode?: ReactNode
}

export default function InputV1({ label, placeHolder, type = "text", postNode } : InputProps) {

    return (
        <div className="mt-5">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            <input
                id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type={type}
                placeholder={placeHolder}
            />
            {postNode}
        </div>
    )
}
