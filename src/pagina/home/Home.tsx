import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TextsmsIcon from '@material-ui/icons/Textsms';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import './Home.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';

function Home(){
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])
  
    return (
        <>
 <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' >Eu sou Willian Matheus!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Bora bater um papo? </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>

                        </Box>
                        <ModalPostagem />
                        <Button variant="outlined" className='botao2'> <p>👋</p> Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://github.com/OWillMatheuz.png" alt="" width="200px" height="200px"/>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}
export default Home;