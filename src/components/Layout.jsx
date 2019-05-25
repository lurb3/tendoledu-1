import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from './Global';
import Navbar from './Navbar';
import Footer from './Footer';

import { FOOTER_HEIGHT, alertSettings, HEADER_HEIGHT } from '../constants';


const BodyLayout = styled.div`
  min-height: ${(100 - FOOTER_HEIGHT - HEADER_HEIGHT).toString()}vh;
`;

const Main = styled.main`

`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <CssBaseline />
        <AlertProvider template={AlertTemplate} {...alertSettings}>
          <GlobalStyle />
          <Navbar siteTitle={data.site.siteMetadata.title} />
          <BodyLayout>
            <Main>{children}</Main>
          </BodyLayout>
          <Footer />
        </AlertProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
