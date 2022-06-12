import React, { useState, useEffect } from 'react';
import Text from '../../atoms/Text/Text';
import TransfersTableStyle from './TransfersTableStyle';
import Pagination from '../Pagination/Pagination';
import {useDispatch, useSelector, useStore} from 'react-redux';
import { TypedDispatch, RootStore } from '../../../config/ConfigStore';
import {DashboardActions} from '../../../redux/actions/DashboardAction';
import {SubmitActionsGET} from '../../../redux/actions/SubmitAction';
import FetchLoading from '../../molecules/FetchLoading/FetchLoading';
import DetailsModal from '../DetailsModal/DetailsModal';
const CurrencyFormat = require('react-currency-format');

const TransfersTable = () => {
  const [toggleDetailsModal, setToggleDetailsModal] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showTable, setShowTable] = useState(false);
  const dispatch: TypedDispatch = useDispatch();
  const dashboardState = useSelector( (state:RootStore) => state.dashboardReducer);
  const store = useStore();

  useEffect(() => {
    const generatePageContent = async () => {
      setFetchLoading(true);
      await dispatch(DashboardActions(`/transfer?perPage=10&page=${page}`));
      if(dashboardState.results !== null && dashboardState.results.data.length > 0){
        setShowTable(true)
      }
      setFetchLoading(false);
    }
    generatePageContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  

  const showDetailsModal = async (id: string) => {
    setFetchLoading(true);
    await dispatch(SubmitActionsGET(`/transfer/${id}`));
    const reduxStore:any = store.getState()
    if(reduxStore.submitReducer.results !== null){
      setToggleDetailsModal(true)
    }
    setFetchLoading(false);
  }
  
  const hideDetailsModal = () => {
    setToggleDetailsModal(false)
  }

  const renderDetailsModal = () => {
    if(toggleDetailsModal){
      return(
        <DetailsModal handleClose={hideDetailsModal} />
      )
    }
  }

  const renderFetchLoading = () => {
    if(fetchLoading){
        return(
          <FetchLoading />
        )
    }
  }

  const renderTableRow = () => {
    let responses = dashboardState.results?.data.map((response: Record<any, any>,key: number) => {
      return(
        <tr className={`table-row`} key={key}>
          <td> {response.createdAt.split("T")[0]} </td>
          <td> {response.recipient.details.account_name} </td>
          <td> {response.recipient.details.bank_name} </td>
          <td> {response.recipient.details.account_number}  </td>
          <td>
            <CurrencyFormat value={response.amount / 100} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
          </td>
          <td> {response.reason} </td>
          <td> 
            <button className={`button`} onClick={() => showDetailsModal(response.id)}> View Details </button>
          </td>
        </tr>
      )
    })
    return responses
  }

  const renderTableGroup = () => {
    if(dashboardState.results !== null && showTable){
      return(
        <>
          <table>
            <thead>
              <tr className={`table-header`}>
                <th>
                  <Text value="Date" className={`table-title`} />
                </th>
                <th>
                  <Text value="Account Name" className={`table-title`} />
                </th>
                <th>
                  <Text value="Bank" className={`table-title`} />
                </th>
                <th>
                  <Text value="Account Number" className={`table-title`} />
                </th>
                <th>
                  <Text value="Amount Transferred" className={`table-title`} />
                </th>
                <th>
                  <Text value="Narration" className={`table-title`} />
                </th>
                <th>
                <Text value="Action" className={`table-title`} />
                </th>
              </tr>
            </thead>
            <tbody className={`table-body`}>
              {renderTableRow()}
            </tbody>
          </table>
          <div className={`container-full`}>
          {renderPagination()}
          </div>
        </>
      )
    }
    if(dashboardState.results !== null && showTable === false){
      return(
        <table>
          <thead>
            <tr className={`table-header`}>
              <th>
                <Text value="Date" className={`table-title`} />
              </th>
              <th>
                <Text value="Account Name" className={`table-title`} />
              </th>
              <th>
                <Text value="Bank" className={`table-title`} />
              </th>
              <th>
                <Text value="Account Number" className={`table-title`} />
              </th>
              <th>
                <Text value="Amount Transferred" className={`table-title`} />
              </th>
              <th>
                <Text value="Narration" className={`table-title`} />
              </th>
              <th>
              <Text value="Action" className={`table-title`} />
              </th>
            </tr>
          </thead>
          <tbody className={`table-body`}>
            <tr>
              <td colSpan={7}> You're yet to make any transfer </td>
            </tr>
          </tbody>
        </table>
      )
    }
  }

  const changePage = async (value: number) => {
    await setPage(value)
  } 

  const renderPagination = () => {
    if(dashboardState.results !== null && dashboardState.results.meta !== undefined){
        return(
          <Pagination changePage={changePage}/>
        )
    }
  } 

  return (
    <TransfersTableStyle>
      {renderDetailsModal()}
      {renderFetchLoading()}
      <div className={`container-full`}>
        {renderTableGroup()}
      </div>  
    </TransfersTableStyle>
  );
};

export default TransfersTable;
