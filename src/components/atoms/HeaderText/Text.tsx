import React from 'react';
import TextStyle from './TextStyle';

export interface TextProps {
    value: string,
    className?: string,
    useStyle?: boolean,
    onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined,
}

const Heading = ({
    value,
    className,
    useStyle,
    onClick
}: TextProps): JSX.Element => {
    return (
        <>
           { (useStyle === undefined) ? (
                <TextStyle className={className} onClick={onClick}>
                    {value}
                </TextStyle>
           ) : 
                <h2 className={className} onClick={onClick}>
                    {value}
                </h2>
           }
            
        </>
    );
};

export default Heading;