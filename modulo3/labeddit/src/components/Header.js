import { AppBar, Toolbar, Button } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    background: #63e6c8;
    height: 50px;
    display: flex;
    justify-content: space-between;
`
const Headers = () => {
    return(
    <AppBar>
        <Toolbar>
            <h2>LabEddit</h2>
        </Toolbar>
    </AppBar>
  
  );
}

export default Headers