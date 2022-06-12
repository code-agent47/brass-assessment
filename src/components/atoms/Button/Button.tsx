import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './ButtonStyle';
import LoadSpinner from '../Loader/Loader';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    type?: 'button' | 'submit' | 'reset',
    id?: string,
    value: string | any,
    useStyle?: boolean,
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
    className?: string,
    isLoading?: boolean,
    loaderColor?: '#fff',
    disabled?: boolean,
}

const Button = ({
    type,
    id = '',
    value,
    useStyle,
    onClick,
    className = '',
    isLoading = false,
    loaderColor = '#fff',
    disabled = false,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <>
           { (useStyle === undefined) ? (
               <ButtonStyle
               id={id}
               type={type}
               onClick={onClick}
               className={className}
               disabled={isLoading || disabled}
               {...props}
           >
               {isLoading ? (
                   <LoadSpinner type={`Oval`} color={loaderColor} height={20} width={20} />
               ) : (
                   value
               )}
           </ButtonStyle>
           ) : 
           <button
                id={id}
                type={type}
                onClick={onClick}
                className={className}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading ? (
                    <LoadSpinner type={`Oval`} color={loaderColor} height={20} width={20} />
                ) : (
                    value
                )}
            </button>           
           }
            
        </>
    );
};

export default Button;