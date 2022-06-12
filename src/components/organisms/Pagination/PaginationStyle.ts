import styled from 'styled-components';

const AuditTrailTableStyle = styled.div`
  box-sizing: border-box;
  padding:25px 170px 21px 85px;
  width: 100%;

  .controls {
    width:100%;
    .controls-con {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rows-control {
        display: flex;
        .row-text {
          color: #2d3748;
          font-family: 'Ubuntu';
          font-size: 14px;
          font-weight: 300;
          margin-top:6px;
        }
        .select {
          margin-left: 8.5px;
          border: 1px solid #E2E8F0;
          border-radius: 6px;
          padding: 5px 7px;
          font-family: 'Ubuntu';
          font-size: 14px;
          font-weight: 300;
          height:32px;
          width:75px;
          option {
            font-family: 'Ubuntu';
            font-size: 12px;
          }
        }
      }
      .count-control {
        display: flex;
        .pagination {
          margin-left: 37px;
          img {
            margin-right: 27px;
            margin-top:2px;
            cursor: pointer;
          }
        }
      }
      .page-count {
        color: #2d3748;
        font-family: 'Ubuntu';
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
`;

export default AuditTrailTableStyle;
