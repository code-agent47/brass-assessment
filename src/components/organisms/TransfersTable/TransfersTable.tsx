import React, { useState, useEffect } from 'react';
import Text from '../../atoms/Text/Text';
import TransfersTableStyle from './TransfersTableStyle';
// import Pagination from '../Pagination/Pagination';
import {useDispatch} from 'react-redux';
import { TypedDispatch } from '../../../config/ConfigStore';
import {DashboardActions} from '../../../redux/actions/DashboardAction';

const TransfersTable = () => {
  const [toggleDetailsModal, setToggleDetailsModal] = useState(false);
  const [page] = useState(1);
  const dispatch: TypedDispatch = useDispatch();
  // const dashboardState = useSelector( (state:RootStore) => state.dashboardReducer);

  useEffect(() => {
    dispatch(DashboardActions(`/transfer?perPage=10&page=${page}`));
  }, [dispatch, page])

  // const setPagination = (value: number) => {
  //   setPage(value)
  // }

  const showDetailsModal = () => {
    setToggleDetailsModal(true)
  }
  
  // const hideDetailsModal = () => {
  //   setToggleDetailsModal(false)
  // }

  const renderDetailsModal = () => {
    if(toggleDetailsModal){
      return(
        <></>
      )
    }
  }

  // const renderTableRow = () => {
  //   let responses = dashboardState.results?.data.map((response: Record<any, any>,key: number) => {
  //     return(
  //       <tr className={`table-row`}>
  //         <td> Sept 04, 2021 </td>
  //         <td> Eigege Samantha </td>
  //         <td> Kuda </td>
  //         <td> 0918390229 </td>
  //         <td> ₦60,000 </td>
  //         <td> NIBSS Instant Payment Outward </td>
  //         <td> 
  //           <button className={`button`} onClick={() => showDetailsModal()}> View Details </button>
  //         </td>
  //       </tr>
  //     )
  //   })
  //   return responses
  // }

  return (
    <TransfersTableStyle>
      {renderDetailsModal()}
      <div className={`container-full`}>
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
            <tr className={`table-row`}>
              <td> Sept 04, 2021 </td>
              <td> Eigege Samantha </td>
              <td> Kuda </td>
              <td> 0918390229 </td>
              <td> ₦60,000 </td>
              <td> NIBSS Instant Payment Outward </td>
              <td> 
               <button className={`button`} onClick={() => showDetailsModal()}> View Details </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </TransfersTableStyle>
  );
};

export default TransfersTable;
