import { ReactNode } from "react";

export interface TextAreaProps {
    label?: string | ReactNode;
    onChange: (e: any) => void;
    id?: string;
    value: string;
    className?: string;
}

export default function TextAreaV1({ id = "id", label, onChange, value, className }: TextAreaProps) {
    return (
        <div className={`${className}`}>
            {label && <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>}
            <textarea
                id={id} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder=""
                onChange={onChange}
                value={value}
            ></textarea>
        </div>
    )
}
