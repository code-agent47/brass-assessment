import styled from "styled-components";

const TransfersTableStyle = styled.div`
  width: 100%;
  table {
    width: 100%;
    .table-header {
      th {
        padding: 30px 41px 16px 41px;
        position: relative;
        border-collapse: no-collapse;
        text-align: left;
        .table-title {
          border: 0 !important;
          color: #000000;
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 600;
          font-size: 0.875em;
          text-align: left;
        }
      }
    }
    .table-body{
      tr{
        &:nth-of-type(odd){
          td{
            background: #F3F5F6;
            box-sizing: border-box;
            padding: 8px 41px 8px 41px;
          }
          
        }
        &:nth-of-type(even){
          td{
            background: white;
            box-sizing: border-box;
            padding: 11.5px 41px 13.5px 41px;
          }
        }
        &:last-child{
          td{
            border-bottom: 1px solid #F3F5F6;
          }
        }
      }
      td {
        color: #000000;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875em;
        position: relative;
      }
      .button{
        background: grey !important;
        border-radius: 5px;   
        color: white;
        font-family: 'Ubuntu';
        font-weight: 400;
        font-size: 0.875em;
        height: 35px;  
        margin-bottom: 0;
        width: 100px;
      }
    }
  }
  table,
  td,
  th {
    border-collapse: collapse;
  }
`;

export default TransfersTableStyle;