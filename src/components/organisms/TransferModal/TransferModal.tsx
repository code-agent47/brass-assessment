import React, {useState, useEffect} from 'react';
import TransferModalStyle from './TransferModalStyle';
import HeaderText from '../../atoms/HeaderText/Text';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import Img from '../../atoms/Image/Img';
import FieldComponent from '../../molecules/FieldComponent/FieldComponent';
import close from '../../../assets/images/close.svg';
import { isAmountFieldValid, isAccountNumberFieldValid } from '../../../helpers/FormValidations';
import {useDispatch, useSelector, useStore} from 'react-redux';
import { TypedDispatch, RootStore } from '../../../config/ConfigStore';
import {SubmitActionsGET, SubmitActionsPOST} from '../../../redux/actions/SubmitAction';
import cogoToast from "cogo-toast";

type TransferProps = {
    handleClose: Function,
    showOTPModal: Function
}

type FormProps = {
    name: string;
    value: string;
    error: string | boolean;
};

type PromiseBoolean = (value: string, code: string) => Promise <Boolean> 

const TransferModal = ({handleClose, showOTPModal}: TransferProps) => {
    const [fields, setFields] = useState({
        accountName: '',
        bank: '',
        accountNumber: '',
        amount: '',
        narration: ''
    })
    const [fieldErrors, setFieldErrors] = useState({
        accountName: '',
        bank: '',
        accountNumber: '',
        amount: '',
        narration: ''
    })
    const [banks, setBanks] = useState([]);
    const dispatch: TypedDispatch = useDispatch();
    const state = useSelector( (state:RootStore) => state);
    const store = useStore();

    useEffect(() => {
        async function fetchMyAPI() {
            await dispatch(SubmitActionsGET('/bank?currency=NGN'));
            const reduxStore:any = store.getState();
            if(reduxStore.alertReducer.type === "alert-success"){
                cogoToast.success(reduxStore.alertReducer.message, { position: "top-right" })
            }
            else{
                cogoToast.error(reduxStore.alertReducer.message, { position: "top-right" })
            }
            await setBanks(reduxStore.submitReducer.results.data)
        }

        fetchMyAPI()
    })
    
    const onFormSubmit = () => {
        return async (evt: React.FormEvent) => {          
            evt.preventDefault();
            let validateFields: boolean = await validate();
            if (validateFields){
                return;
            }
            let value = {
                "type": "nuban",
                "name": fields.accountName,
                "account_number": fields.accountNumber,
                "bank_code": fields.bank,
                "currency": "NGN"
            }
            await dispatch(SubmitActionsPOST(`/transferrecipient`, value));
            const reduxStore:any = store.getState();
            if(reduxStore.alertReducer.type === "alert-success"){
                cogoToast.success(reduxStore.alertReducer.message, { position: "top-right" })
            }
            else{
                cogoToast.error(reduxStore.alertReducer.message, { position: "top-right" })
            }
            if(reduxStore.submitReducer.results.data.active === true){
                let value = {
                    "source": "balance", 
                    "amount": Number(`${fields.amount}`) * 100,
                    "recipient": reduxStore.submitReducer.results.data.recipient_code, 
                    "reason": fields.narration 
                }
                await dispatch(SubmitActionsPOST(`/transfer`, value));
                const updatedStore:any = store.getState();
                console.log(updatedStore);
                if(updatedStore.alertReducer.type === "alert-success"){
                    cogoToast.success(updatedStore.alertReducer.message, { position: "top-right" })
                }
                else{
                    cogoToast.error(updatedStore.alertReducer.message, { position: "top-right" })
                }
                if(updatedStore.submitReducer.results.data.transfer_code !== undefined){
                    showOTPModal()
                }
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

    const verifyBankAccount: PromiseBoolean  =  (value: string, code: string) => {
        return isAccountNumberFieldValid(value, code).then((returnResponse: any) => {
            return returnResponse;
        })
    }

    
    
    return (
        <TransferModalStyle className={`container-full`}>
            <div className={`container-full center modal-container`}>
                <div className={`modal-container__box`}>
                <div className={`container-full modal-container__box__header`}>
                    <HeaderText value="Transfer Funds" />
                    <Img image={close} onClick={() => handleClose()}/>
                </div>
                <form onSubmit={onFormSubmit()}>
                    <div className={`modal-container__box__content`}>
                    <div className={`container-full modal-container__box__content__item`}>
                        <Text value="*Account Name" className={`label`} />
                        <FieldComponent
                            value={fields.accountName}
                            name="accountName"
                            placeholder="Account Name"
                            className={`auth-input`}
                            onChange={onInputChange}
                            validate={(val: string) =>
                                val ? false : 'Account Name is Required'
                            }
                            required={true}
                        />
                        <span>{fieldErrors.accountName}</span>
                    </div>
                    <div className={`container-full modal-container__box__content__item`}>
                        <Text value="*Bank" className={`label`} />
                        <FieldComponent
                            value={fields.bank}
                            name="bank"
                            inputType="select"
                            options={banks} 
                            className={`auth-input`}
                            onChange={onInputChange}
                            validate={(val: string) =>
                                val ? false : 'Bank is Required'
                            }
                            required={true}
                        />
                        <span>{fieldErrors.bank}</span>
                    </div>
                    <div className={`container-full modal-container__box__content__item`}>
                        <Text value="*Account Number" className={`label`} />
                        <FieldComponent
                            value={fields.accountNumber}
                            name="accountNumber"
                            placeholder="Account Number"
                            className={`auth-input`}
                            onChange={onInputChange}
                            validate={ (value: string) => verifyBankAccount(value, fields.bank)}
                            required={true}
                        />
                        <span>{fieldErrors.accountNumber}</span>
                    </div>
                    <div className={`container-full modal-container__box__content__item`}>
                        <Text value="*Amount" className={`label`} />
                        <FieldComponent
                            value={fields.amount}
                            name="amount"
                            placeholder="Amount"
                            className={`auth-input`}
                            onChange={onInputChange}
                            validate={(value: string) => isAmountFieldValid(value)}
                            required={true}
                        />
                        <span>{fieldErrors.amount}</span>
                    </div>
                    <div className={`container-full modal-container__box__content__item`}>
                        <Text value="Narration" className={`label`} />
                        <FieldComponent
                            value={fields.narration}
                            name="narration"
                            placeholder="Naration"
                            className={`auth-input`}
                            onChange={onInputChange}
                            validate={(val: string) =>
                                val ? false : false
                            }
                            required={false}
                        />
                        <span>{fieldErrors.narration}</span>
                    </div>
                    <Button
                        type="submit"
                        value="Fund Transfer"
                        isLoading={state.submitReducer.fetching}
                        className="button"
                    />
                    </div>
                </form>
                </div>  
            </div>
        </TransferModalStyle>
    );
}

export default TransferModal;