import React, {useState, useEffect} from 'react';
import OTPModalStyle from './OTPModalStyle';
import HeaderText from '../../atoms/HeaderText/Text';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import Img from '../../atoms/Image/Img';
import FieldComponent from '../../molecules/FieldComponent/FieldComponent';
import close from '../../../assets/images/close.svg';
import { isOTPFieldValid } from '../../../helpers/FormValidations';
import {useDispatch, useStore, useSelector} from 'react-redux';
import { TypedDispatch, RootStore } from '../../../config/ConfigStore';
import {SubmitActionsPOST} from '../../../redux/actions/SubmitAction';
import cogoToast from "cogo-toast";

type TransferProps = {
    handleClose: Function,
    showSuccessModal: Function
}

type FormProps = {
    name: string;
    value: string;
    error: string | boolean;
};

const OTPModal = ({handleClose, showSuccessModal}: TransferProps) => {
    const [fields, setFields] = useState({
        OTP: '',
    })
    const [fieldErrors, setFieldErrors] = useState({
        OTP: '',
    })
    const dispatch: TypedDispatch = useDispatch();
    const state = useSelector( (state:RootStore) => state);
    const store = useStore();
    
    const onFormSubmit = () => {
        return async (evt: React.FormEvent) => {          
            evt.preventDefault();
            let validateFields: boolean = await validate();
            if (validateFields){
                return;
            }
            let value = {
                "transfer_code": state.submitReducer.results.data.transfer_code, 
                "otp": fields.OTP
            }
            await dispatch(SubmitActionsPOST(`/transfer/finalize_transfer`, value));
            const reduxStore:any = store.getState()
            console.log(reduxStore.submitReducer);
            if(reduxStore.alertReducer.type === "alert-success"){
                cogoToast.success(reduxStore.alertReducer.message, { position: "top-right" })
            }
            else{
                cogoToast.error(reduxStore.alertReducer.message, { position: "top-right" })
            }
            if(reduxStore.submitReducer.results.data.status === "success" ){
                showSuccessModal()
            }
            handleClose()
        }
    }

    const onInputChange = async ({ name, value, error }: FormProps) => {
        const fieldsValues: any = Object.assign({}, fields);
        const fieldErrorsValues: any = Object.assign({}, fieldErrors);
        fieldsValues[name] = value;
        fieldErrorsValues[name] = error;
        await setFieldErrors(fieldErrorsValues);
        await setFields(fieldsValues);
    };
        
    const validate = async () => {         
        const person:any = fieldErrors;
        if (Object.keys(fieldErrors).filter((k) => person[k]).length){
            return true;
        }
        return false;
    }
    
    
    return (
        <OTPModalStyle className={`container-full`}>
            <div className={`container-full center modal-container`}>
                <div className={`modal-container__box`}>
                <div className={`container-full modal-container__box__header`}>
                    <HeaderText value="Transfer Funds" />
                    <Img image={close} onClick={() => handleClose()}/>
                </div>
                <form onSubmit={onFormSubmit()}>
                    <div className={`modal-container__box__content`}>
                    <div className={`container-full modal-container__box__content__item`}>
                        <Text value="*OTP" className={`label`} />
                        <FieldComponent
                            value={fields.OTP}
                            name="OTP"
                            placeholder="OTP"
                            className={`auth-input`}
                            onChange={onInputChange}
                            validate={(value: string) => isOTPFieldValid(value)}
                            required={true}
                        />
                        <span>{fieldErrors.OTP}</span>
                    </div>
                    <Button
                        type="submit"
                        value="Confirm OTP"
                        isLoading={state.submitReducer.fetching}
                        className="button"
                    />
                    </div>
                </form>
                </div>  
            </div>
        </OTPModalStyle>
    );
}

export default OTPModal;