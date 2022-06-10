import React, {useState} from 'react';
import Button from '../../atoms/Button/Button';
import HeaderText from '../../atoms/HeaderText/Text';
import Header from '../../organisms/Header/Header';
import TransfersTable from '../../organisms/TransfersTable/TransfersTable';
import IndexPageTemplateStyle from './IndexPageTemplateStyle';
import TransferModal from '../../organisms/TransferModal/TransferModal';
import SuccessModal from '../../organisms/SuccessModal/SuccessModal';
import OTPModal from '../../organisms/OTPModal/OTPModal';

const IndexPageTemplate = () => {
  const [toggleTransferModal, setToggleTransferModal] = useState(false);
  const [toggleSuccessModal, setToggleSuccessModal] = useState(false);
  const [toggleOTPModal, setToggleOTPModal] = useState(false);

  const showTransferModal = () => {
    setToggleTransferModal(true)
  }
  
  const hideTransferModal = () => {
    setToggleTransferModal(false)
  }

  const renderTransferModal = () => {
    if(toggleTransferModal){
      return(
        <TransferModal handleClose={hideTransferModal} showOTPModal={showOTPModal}/>
      )
    }
  }

  const showSuccessModal = () => {
    setToggleSuccessModal(true)
  }
  
  const hideSuccessModal = () => {
    setToggleSuccessModal(false)
  }

  const renderSuccessModal = () => {
    if(toggleSuccessModal){
      return(
        <SuccessModal handleClose={hideSuccessModal}/>
      )
    }
  }

  const showOTPModal = () => {
    setToggleOTPModal(true)
  }
  
  const hideOTPModal = () => {
    setToggleOTPModal(false)
  }

  const renderOTPModal = () => {
    if(toggleOTPModal){
      return(
        <OTPModal handleClose={hideOTPModal} showSuccessModal={showSuccessModal}/>
      )
    }
  }

  return (
    <IndexPageTemplateStyle>
      {renderTransferModal()}
      {renderSuccessModal()}
      {renderOTPModal()}
      <Header />
      <div className={`container transactions`}>
        <div className={`container-full transactions__desc`}>
          <HeaderText value="Transfer History" />
          <Button value="Fund Transfer" className={`button`} onClick={() => showTransferModal()} />
          <div className={`container-full transactions__table`}>
            <TransfersTable />
          </div>
        </div>
      </div>
    </IndexPageTemplateStyle>
  );
};

export default IndexPageTemplate;
