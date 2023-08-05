import { ReactNode } from "react";

export interface CheckboxProps {
    label: string | ReactNode;
    checked: boolean;
    onChange: (e: any) => void;
    id: string;
}

export default function CheckboxV1({ id = "id", checked, label, onChange } : CheckboxProps) {
    return (
        <div className="mt-5">
            <input id={id} type="checkbox" checked={checked} onChange={onChange} />
            <label htmlFor={id} className="ml-2">{label}</label><br></br>
        </div>
    )
}
