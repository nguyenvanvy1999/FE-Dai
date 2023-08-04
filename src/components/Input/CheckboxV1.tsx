import { ReactNode } from "react";

export interface CheckboxProps {
    label: string | ReactNode;
}

export default function CheckboxV1({ label } : CheckboxProps) {

    return (
        <div className="mt-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1" className="ml-2">{label}</label><br></br>
        </div>
    )
}
