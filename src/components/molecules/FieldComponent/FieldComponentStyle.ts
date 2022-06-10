import styled from "styled-components";

const FieldComponentStyle = styled.div`
    position:relative;
    .auth-input {
        border: 1px solid #dee1e6;
        border-radius: 4px;
        box-sizing:border-box;
        color: #4a4b4d;
        font-family: 'Ubuntu';
        font-size: 0.875em;
        height:47px;
        margin-bottom:0;
        padding: 13px 16px;
        width: 100%;
    }
    .success{
        border: 1px solid #20B92F;
    }
    .error{
        border: 1px solid #B92020;
    }
    .form-box-unit{
        position:relative;
        margin-bottom:0;
        width:100%;
        select{
            appearance:none;
            background:transparent;
            width:100%;
            option{
                font-family:Helvetica Neue;
            }
        }
    }
    
`

export default FieldComponentStyle;