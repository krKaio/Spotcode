import React, { Fragment } from 'react';
// import { Navbar, Container, Columns } from 'react-bulma-components';
import NavbarFooter from '../../components/common/navbar_footer';
import Abums from '../../components/albums';
import SectionWrapper from '../../components/common/section_wrapper';
import Albums from '../../components/albums';


const AlbumScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Albums/>
        <NavbarFooter/>
      </SectionWrapper>
    </Fragment>
  )
}

export default AlbumScreen;