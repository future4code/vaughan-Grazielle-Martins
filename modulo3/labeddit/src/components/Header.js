import { AppBar, Toolbar, Button } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    background: #63e6c8;
    height: 50px;
    display: flex;
    justify-content: flex-end;
`
const Headers = () => {
    return(
    <AppBar>
        <Toolbar>
        <h1>LabEddit</h1>
        </Toolbar>
        
    </AppBar>
  
  );
}

export default Headers