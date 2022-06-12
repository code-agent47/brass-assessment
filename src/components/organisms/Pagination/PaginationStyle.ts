import styled from "styled-components";
import {maxWidth} from '../../../helpers/mixins';

const maxWidthVar:any = maxWidth;

const PaginationStyle = styled.div`
    justify-content:space-between;
    margin-bottom:20px;
    margin-top:50px;
    padding-left:26px;
    padding-right:26px;
    width: 100%;
    .pagination-info{
        ${
            maxWidthVar.md`
                margin-bottom:20px;
                -ms-flex: 0 0 100%;
                -webkit-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
            `
        }
        align-self:center;
        h2{
            color:#000000;
            font-family:'Ubuntu';
            font-size:1.125em;
            font-weight:700;
        }
    }
    .pagination-action-group{
        ${
            maxWidthVar.md`
                display:flex;
                justify-content:normal;
                -ms-flex: 0 0 100%;
                -webkit-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
            `
        }
        align-self:center;
    }
    .pagination-action-group__button{
        float:left;
        margin-right:29px;
        &:last-child{
            float:right;
            margin-right:0;
        }
        .button{
            background:rgba(11, 206, 90, 0.5);
            border-radius:21px;
            color:#0BCE5A;
            font-family:'Ubuntu';
            font-size:1em;
            font-weight:500;
            height:41px;
            padding-bottom:10px;
            padding-top:10px;
            margin-bottom:0;
            width: 82px;
        }
    }
    .pagination-number{
        ${
            maxWidthVar.sm`
                max-width:250px;
            `
        }
        cursor:grab;
        display:inline-block;
        margin-right:29px;
        overflow:hidden;
        white-space: nowrap;
        max-width:263px;
    }
    .pagination-number__item{
        ${
            maxWidthVar.md`
                padding:4px;
                padding-left:12px;
            `
        }
        ${
            maxWidthVar.sm`
                padding:6px;
                padding-left:12px;
            `
        }
        border-radius:50%;
        box-sizing:border-box;
        display:inline-block;
        height:32px;  
        margin-right:15px;
        padding:11px;
        padding-top:3px;
        width:32px; 
        &:last-of-type{
            margin-right:0;
        } 
        h2{
            color:#222222;
            font-family:'Ubuntu';
            font-size:1.5em;
            font-weight:500;
        }
    }
    .pagination-number__active-item{
        background:#0BCE5A;
        h2{
            color:white;
            font-size:1.4em;
        }
    }
    .button--disabled{
        opacity:0.5;
        pointer-events:none;  
    }
`

export default PaginationStyle;