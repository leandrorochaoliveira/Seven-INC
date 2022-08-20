import React from 'react';
import { Header } from '@/presentation/components'
import { Container } from '@mui/material';
import './main.scss'

type Props = {
  children?: JSX.Element;
};

const Main: React.FC<Props> = ({children}) => {
  return(
    <div id="main">
      <Header></Header>
      <div className="bodyWrap">
        <Container maxWidth="lg">
          <div className="bodyContent">
          {children}
          </div>
        </Container>   
      </div>
    </div>
  );
}

export default Main;