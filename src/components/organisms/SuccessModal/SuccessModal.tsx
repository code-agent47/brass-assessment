import React from 'react';
import SuccessModalStyle from './SuccessModalStyle';
import HeaderText from '../../atoms/HeaderText/Text';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Img';
import close from '../../../assets/images/close.svg';

type SuccessModalProps = {
    handleClose: Function,
}

const SuccessModal = ({handleClose}: SuccessModalProps) => {
    return (
        <SuccessModalStyle className={`container-full`}>
          <div className={`container-full center modal-container`}>
             <div className={`modal-container__box`}>
               <div className={`container-full modal-container__box__header`}>
                 <HeaderText value="Transfer Successful" />
                 <Image image={close} onClick={() => handleClose()}/>
               </div>
               <div className={`container-full modal-container__box__content`}>
                 <Text value="Transaction queued successfully." />
               </div>
             </div>  
          </div>
        </SuccessModalStyle>
      );
}

export default SuccessModal;