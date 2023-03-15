import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TextsmsIcon from '@material-ui/icons/Textsms';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function Home(){
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
          navigate("/login")
  
      }
  }, [token])
  
    return (
        <>
 <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa' >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={2} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo' >Eu sou Willian Matheus!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className='titulo2'>Bora bater um papo? </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" className="text-decorator-none" >
                        <Box marginRight={2} paddingX={0} >
                        <ModalPostagem />
                        </Box>
                        <Link to="/postagens" className="text-decorator-none">
                            <Button variant="outlined" className='botao1'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={4} >
                    <img src="https://github.com/OWillMatheuz.png" alt="" width="200px" height="200px"/>
                </Grid>
                <Grid  xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}
export default Home;