import React from "react";
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import { FaDev } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import useLocalStorage from "react-use-localstorage";
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify';

function Navbar(){
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
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
        navigate('/login')
    }
    var navbarComponent;
    if(token != ""){
        navbarComponent = <AppBar  position="static" className="backcolor">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography  variant="h5" color="inherit">
                        <Link to='/home' className='text-decorator-none'>
                        <FaDev className="dev"/> <b className="dev">Java Full Stack Jr.</b>
                        </Link>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decoration">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                 | Home |
                            </Typography>
                        </Box>
                        </Link>
                        <Link className="text-decoration" to="/postagens">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className="text-decoration" >
                               | Postagens |
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/tema" className="text-decoration">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Tema |
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decoration">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Cadast. Temas |
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/portfolio" className="text-decoration">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Portfólio |
                            </Typography>
                        </Box>
                        </Link>

        
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                <b className="text-decoraion">Sair</b>
                                </Typography>
                            </Box>
                        
                    </Box>

                </Toolbar>
            </AppBar>
    }
    return(
        <>
        {navbarComponent}
    </>

    )
}
export default Navbar;