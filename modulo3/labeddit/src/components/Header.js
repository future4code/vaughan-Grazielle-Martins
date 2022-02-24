import { AppBar, Toolbar, Button } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';
import  {goToLogin} from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
    background: #63e6c8;
    height: 50px;
    display: flex;
    justify-content: flex-end;
`
const Button2 = styled.button`

    display: flex;
    justify-content: flex-end;
`
const Headers = () => {
    const goLogout = () => {
        localStorage.removeItem("token")
        alert("Logout feito!!")
        goToLogin(navigate);
    }
    const navigate = useNavigate()


    return(
    <AppBar>
        <Toolbar>
        <h1>LabEddit</h1>
        
        </Toolbar>
        <div>
        <Button> <Button2 onClick={goLogout}> Logout </Button2></Button>

        </div>
    </AppBar>
  
  );
}

export default Headers