import React, { HTMLProps } from 'react';

export interface ImgProps extends HTMLProps<HTMLElement>{
    image: string | any,
    className?: string,
    alt?: string,
    onClick?: ((event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void) | any
}

const Img = ({
    image,
    className,
    alt,
    onClick
}: ImgProps): JSX.Element => {
    return (
        <>
            <img src={image} className={className} alt={alt} onClick={onClick}/>
        </>
    );
};

export default Img;