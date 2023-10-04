import React from 'react';

import { Container, Search, User } from './styles';


const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://music-player-img.s3.amazonaws.com/image_2023_06_30T07_44_30_176Z.png" alt="Avatar" />
      G SAI KUMAR
    </User>
  </Container>
);

export default Header;
