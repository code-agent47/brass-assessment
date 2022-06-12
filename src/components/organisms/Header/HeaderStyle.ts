import styled from 'styled-components';

const HeaderStyle = styled.header`
  background: #000000;  
  height: 70px;
  .logo{
    margin-top: 12px;
    @media screen and (max-width: 576px){
      height: auto;
      margin-top: 17px;
      width: 100px;
    }
  }
  .avatar{
    margin-top: 15px;
  }
`;

export default HeaderStyle;
