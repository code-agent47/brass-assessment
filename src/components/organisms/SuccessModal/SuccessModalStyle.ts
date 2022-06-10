import styled from "styled-components";
import Colors from "../../../helpers/Colors";

const SuccessModalStyle = styled.div`
    animation: show-bg 0.5s linear forwards;
    box-sizing:border-box;
    display:flex;
    height:100%;
    left:0;
    position:absolute;
    position:fixed;
    top: 0;
    width:100%;
    z-index:5000;
    @keyframes show-bg{
        0%{
            background:rgba(0, 0, 0, 0)
        }
        100%{
            background: rgba(0, 0, 0, 0.25);
        }
    }
    .modal-container{
        box-sizing:border-box;
    }
    .modal-container__box{
        -ms-flex: 0 0 400px;
        -webkit-flex: 0 0 400px;
        flex: 0 0 400px;
        max-width: 400px;
        background:#FFFFFF;
        border-radius: 8px;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
        box-sizing:border-box;
        padding:24px 24px 24px 24px;
    }
    .modal-container__box__header{
        h2{
            color: #000000;
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 700;
            font-size: 1.5em;
            line-height: 36px;
        }
        img{
            cursor: pointer;
        }
    }
    .modal-container__box__content{
        margin-top: 50px;
        p{
            color: #000000;
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 400;
            font-size: 1.25em;
            line-height: 32px;
        }
    }
    .modal-container__box__action{
        justify-content: flex-end;
        margin-top: 49px;
        .button{
            background: #0275D8;
            border-radius: 8px;
            color: white;
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 600;
            font-size: 1em;
            height: 56px;
            margin-bottom: 0;
            width: 144px;
        }
    }
    
`
export default SuccessModalStyle;