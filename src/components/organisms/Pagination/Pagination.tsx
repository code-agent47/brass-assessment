import React, { useEffect } from 'react';
import PaginationStyle from './PaginationStyle';
import HeaderText from '../../atoms/HeaderText/Text';
import Button from '../../atoms/Button/Button';
import {useSelector} from 'react-redux';
import { RootStore } from '../../../config/ConfigStore';
const {swipeHorizontally} = require('swipepackage')

type PaginationProps = {
    changePage: Function
}
const Pagination = ({changePage}: PaginationProps) => {
    const dashboardState = useSelector( (state:RootStore) => state.dashboardReducer);
    useEffect(() => {
        invokeSlider()
    }, [])

    const invokeSlider = () => {
        swipeHorizontally(document.getElementsByClassName("pagination-numbers")[0],2);
    }

    const updateActivePage = (value: number) => {
        changePage(value)
    }

    const pagination = 10;

    const renderPageNumbers = () => {
        let pageNumber = 0;
        let pageNumbers = [];
        let activePage = dashboardState.results.meta.page;
        let totalPage = dashboardState.results.meta.pageCount;
        for(let i=0; i < totalPage; i++){
            pageNumber++
            pageNumbers.push(pageNumber);
        }
        let pageNumberListing = pageNumbers.map( (pageNumber,key) => {
            if(pageNumber === activePage){
                return(
                    <div className={`pagination-number__item pagination-number__active-item`}
                     key={key} onClick={ ()=> { updateActivePage(pageNumber) } } >
                        <HeaderText value={`${pageNumber}`} />
                    </div> 
                )  
            }
            return(
                <div className={`pagination-number__item`} key={key} onClick={ ()=> { updateActivePage(pageNumber)} }>
                    <HeaderText value={`${pageNumber}`} />
                </div> 
            )
        })
        return pageNumberListing;
    }

    const renderNextButton = () => {
        let nextPage = dashboardState.results.meta.page + 1;
        if(nextPage > 1 && nextPage <= dashboardState.results.meta.pageCount){
            return(
                <Button className={`button`} onClick={ () => updateActivePage(nextPage)} value="NEXT" />   
            )
        }
        else{
            return(
                <Button className={`button button--disabled`} value="NEXT" />
            )
        }
    }

    const renderPrevButton = () => {
        let prevPage = dashboardState.results.meta.page - 1;
        if(prevPage >= 1){
            return(
                <Button className={`button`} onClick={ () => updateActivePage(prevPage)} value="PREV" />   
            )
        }
        else{
            return(
                <Button className={`button button--disabled`} value="PREV" />
            )
        }
    }

    return(
        <PaginationStyle className={`container-full`}>
            <div className={`pagination-info`}>
                <HeaderText value={`Showing 1 of ${
                (pagination > dashboardState.results.meta.total) ? dashboardState.results.meta.total : pagination
            } of ${dashboardState.results.meta.total} entries`} />
            </div>
            <div className={`pagination-action-group`}>
                <div className={`pagination-action-group__button`}>
                    {renderPrevButton()}
                </div>
                <div className={`pagination-numbers pagination-number`}>
                    {renderPageNumbers()}       
                </div>
                <div className={`pagination-action-group__button`}>
                    {renderNextButton()}
                </div>
            </div>
        </PaginationStyle>
    )
}

export default Pagination;