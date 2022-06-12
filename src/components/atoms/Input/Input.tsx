import React from 'react';
import InputStyle from './InputStyle';

export interface InputProps{
    value?: string,
    type: string,
    id?: string,
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
    onFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined,
    onKeyPress?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined,
    onKeyUp?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined,
    className?: string,
    name?: string,
    placeholder?: string,
    useStyle?: boolean
    defaultChecked?: boolean,
    checked?: boolean
    onClick?: any
    ref?: any
    required?: boolean
}

const Input = ({
    value,
    type,
    id,
    onChange,
    onFocus,
    onKeyPress,
    onKeyUp,
    className,
    name,
    placeholder,
    defaultChecked,
    useStyle,
    checked,
    onClick,
    ref,
    required
}: InputProps): JSX.Element => {
    return (
        <>
           { (useStyle === undefined) ? (
                <InputStyle type={type} id={id} defaultChecked={defaultChecked} className={className} value={value} name={name} onChange={onChange} onFocus={onFocus} placeholder={placeholder} onKeyPress={onKeyPress} onKeyUp={onKeyUp} ref={ref} checked={checked} onClick={onClick} required={required}>
                    
                </InputStyle>
           ) : 
                <input type={type} id={id} className={className} value={value} name={name} onChange={onChange} placeholder={placeholder} onKeyPress={onKeyPress} onKeyUp={onKeyUp} checked={checked} ref={ref} onClick={onClick} required={required}/>
           }
            
        </>
    );
};

export default Input;