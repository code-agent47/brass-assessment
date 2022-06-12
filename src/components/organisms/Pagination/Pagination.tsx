import React, {Component} from 'react';
import PaginationStyle from './PaginationStyle';
import Text from '../../atoms/Text/Text';
import Img from '../../atoms/Image/Img';
import { connect, ConnectedProps } from 'react-redux';
import { RootStore } from '../../../config/ConfigStore';
import nextImg from '../../../assets/images/next.svg';
import prevImg from '../../../assets/images/prev.svg';

type MenuProps = HeaderProps & {
  pagination: string,
  changePage: Function
}

type MenuState = {
  
};

class Pagination extends Component<MenuProps, MenuState>{

  updateActivePage(value: string){
    this.props.changePage(value)
  }

  renderNextButton(){
    // let nextPage = this.props.dashboardState.results.data.meta.next;
    let nextPage = 1;
    if(nextPage > 1){
        return(
            <Img image={nextImg} onClick={ () => this.updateActivePage(nextPage.toString())} alt="next-btn" />  
        )
    }
    else{
        return(
            <Img image={nextImg} className={`disabled`} onClick={ () => this.updateActivePage(nextPage.toString())} alt="next-btn" />  
        )
    }
  }

  renderPrevButton(){
    // let prevPage = this.props.dashboardState.results.data.meta.previous;
    let prevPage = 0;
    if(prevPage >= 1){
        return(
            <Img image={prevImg} alt="prev-btn" onClick={ () => this.updateActivePage(prevPage.toString())}/>
        )
    }
    else{
        return(
          <Img image={prevImg} className={`disabled`} alt="prev-btn" onClick={ () => this.updateActivePage(prevPage.toString())}/>
        )
    }
  }

  render(){
    return (
      <PaginationStyle>
        <div className={`controls`}>
          <div className="controls-con">
            <div className={`count-control`}>
              {/* <Text value={`1 - ${
                    (this.props.pagination > this.props.dashboardState.results.data.meta.totalRecords) ? this.props.dashboardState.results.data.meta.totalRecords : this.props.pagination
                } of ${this.props.dashboardState.results.data.meta.totalRecords}`} className={`page-count`} /> */}
              <div className={`pagination`}>
                {this.renderPrevButton()}
                {this.renderNextButton()}
              </div>
            </div>
          </div>
        </div>
      </PaginationStyle>
    );
  }
}

const mapStateToProps = (state: RootStore) => ({
  alertState: state.alertReducer,
  dashboardState: state,
});

const connector = connect(mapStateToProps, {});
type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Pagination);
