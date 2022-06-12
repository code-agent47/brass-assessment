import React from 'react';
import HeaderStyle from './HeaderStyle';
import Image from '../../atoms/Image/Img';
import logo from '../../../assets/images/brass-logo.png';
import avatar from '../../../assets/images/avatar.svg';

const Header = () => {

  return (
    <HeaderStyle>
      <div className={`container`}>
        <Image image={logo} alt="logo" className={`logo`} />
        <Image image={avatar} alt="avatar" className={`avatar`} />
      </div>
    </HeaderStyle>
  );
};

export default Header;
