import React from 'react';
import DetailsModalStyle from './DetailsModalStyle';
import HeaderText from '../../atoms/HeaderText/Text';
import Text from '../../atoms/Text/Text';
import Img from '../../atoms/Image/Img';
import close from '../../../assets/images/close.svg';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../config/ConfigStore';
const CurrencyFormat = require('react-currency-format');


type DetailsModalProps = {
    handleClose: Function
}

const DetailsModal = ({handleClose}: DetailsModalProps) => {
    const state = useSelector( (state:RootStore) => state);

 
    return (
        <DetailsModalStyle className={`container-full`}>
            <div className={`container-full center modal-container`}>
                <div className={`modal-container__box`}>
                <div className={`container-full modal-container__box__header`}>
                    <HeaderText value="Transfer Details" />
                    <Img image={close} onClick={() => handleClose()}/>
                </div>
                <div className={`modal-container__box__content`}>
                    <div className={`modal-container__box__content__item`}>
                       <HeaderText value="Account Name" className={`label`} />
                       <Text value={state.submitReducer.results.data.recipient.details.account_name} />
                    </div>
                </div>
                <div className={`modal-container__box__content`}>
                    <div className={`modal-container__box__content__item`}>
                       <HeaderText value="Account Number" className={`label`} />
                       <Text value={state.submitReducer.results.data.recipient.details.account_number} />
                    </div>
                </div>
                <div className={`modal-container__box__content`}>
                    <div className={`modal-container__box__content__item`}>
                       <HeaderText value="Bank" className={`label`} />
                       <Text value={state.submitReducer.results.data.recipient.details.bank_name} />
                    </div>
                </div>
                <div className={`modal-container__box__content`}>
                    <div className={`modal-container__box__content__item`}>
                       <HeaderText value="Amount Transferred" className={`label`} />
                       <CurrencyFormat value={state.submitReducer.results.data.amount / 100} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                    </div>
                </div>
                <div className={`modal-container__box__content`}>
                    <div className={`modal-container__box__content__item`}>
                       <HeaderText value="Narration" className={`label`} />
                       <Text value={state.submitReducer.results.data.reason} />
                    </div>
                </div>
                <div className={`modal-container__box__content`}>
                    <div className={`modal-container__box__content__item`}>
                       <HeaderText value="Fee Charged" className={`label`} />
                       <Text value={state.submitReducer.results.data.fee_charged} />
                    </div>
                </div>
                <div className={`modal-container__box__content`}>
                    <div className={`modal-container__box__content__item`}>
                       <HeaderText value="Transfer Code" className={`label`} />
                       <Text value={state.submitReducer.results.data.transfer_code} />
                    </div>
                </div>
                <div className={`modal-container__box__content`}>
                    <div className={`modal-container__box__content__item`}>
                       <HeaderText value="Status" className={`label`} />
                       <Text value={state.submitReducer.results.data.status} />
                    </div>
                </div>
                </div>  
            </div>
        </DetailsModalStyle>
    );
}

export default DetailsModal;