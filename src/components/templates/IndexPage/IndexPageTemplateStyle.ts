import styled from 'styled-components';

const IndexPageTemplateStyle = styled.div`
  .transactions{
    margin-top: 180px;
    @media screen and (max-width: 576px){
      margin-top: 130px;
    }
  }
  .transactions__desc{
    h2{
      color: #0D0000;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 1.125em;
      line-height: 22px;
      margin-top: 5px;
    }
    .button{
      background: #0BCE5A;
      border-radius: 5px;   
      color: white;
      font-family: 'Ubuntu';
      font-weight: 400;
      font-size: 0.875em;
      height: 45px;  
      margin-bottom: 0;
      width: 168px;
      @media screen and (max-width: 576px){
        width: 108px;
      }
    }
  }
  .transactions__table{
    overflow-x: auto;
    overflow-y : visible;
  }
`;

export default IndexPageTemplateStyle;
