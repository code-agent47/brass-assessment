import styled from "styled-components";

const CreateRoleModalStyle = styled.div`
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
            background:rgba(40, 41, 40, 0.5);
        }
    }
    .modal-container{
        box-sizing:border-box;
        height:100vh;
    }
    .modal-container__box{
        -ms-flex: 0 0 482px;
        -webkit-flex: 0 0 482px;
        flex: 0 0 482px;
        max-width: 482px;
        background:#FFFFFF;
        border-radius:10px;
        box-sizing:border-box;
        overflow:scroll;
        padding:28px 70px 114px 54px;
        @media screen and (max-width: 576px){
            -ms-flex: 0 0 90%;
            -webkit-flex: 0 0 90%;
            flex: 0 0 90%;
            max-width: 90%;
            padding:28px 50px 114px 54px;
        }
    }
    .modal-container__box__header{
        h2{
            color: #4A4B4D;
            font-family:"Ubuntu";
            font-size:1.5em;
            font-weight:normal;
        }
        img{
            cursor: pointer;
        }
    }
    .modal-container__box__content{
        background: white;
        border-radius: 8px;
        height:100%;
        margin-top:36px;
        width:100%;
    }
    .modal-container__box__content__item{
        margin-bottom:26px;
        .label {
            color: #808080;
            font-family: 'Ubuntu';
            font-size: 0.875em;
            margin-bottom: 7px;
        }
        span{
            color: #B92020;
            font-family: 'Ubuntu';
            font-size: 0.875em;
        }
        .--category-desc{
            height:105px;
        }
    }
    .button{
        background: #0BCE5A;
        border-radius: 4px;
        color:white;
        font-family: 'Ubuntu';
        font-size: 1em;
        height:56px;
        margin-top:50px;
        width:100%;
    }
    
`
export default CreateRoleModalStyle;