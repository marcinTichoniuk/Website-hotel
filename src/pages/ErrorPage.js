import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import LinkButton from '../components/LinkButton';


const ErrorPage = () => {
  return (
    <Header >
      <Banner title="404" subtitle="Page not found">
        <LinkButton />
      </Banner>
    </Header>
  );
}

export default ErrorPage;