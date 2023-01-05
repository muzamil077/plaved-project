import { type } from 'os';
import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    ref?: string;
    type?:string

}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ placeholder, type, label, ...otherProps }, ref) => {
    return (
        <label>
            {label}
            <input
                {...otherProps}
                placeholder={placeholder}
                ref={ref}
                type={type}
            />
        </label>
    );
};

const FormInput = React.forwardRef(Input);

export default FormInput;