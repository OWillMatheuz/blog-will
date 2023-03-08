import React from "react";
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import { FaDev } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import useLocalStorage from "react-use-localstorage";
import './Navbar.css';

function Navbar(){
    const estilo = {
        background: 'rgb(167,106,8)',
        backgroundImage: 'linear-gradient(90deg, rgba(167,106,8,1) 29%, rgba(0,0,0,1) 83%)'
    };

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }
    return (
        <>
          <AppBar  position="static" style={estilo}>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography  variant="h5" color="inherit">
                        <FaDev className="corlogo"/> <b className="corlogo">Java Full Stack Jr.</b>
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
            
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               | Portfólio |
                            </Typography>
                        </Box>

        
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                <b className="text-decoraion">Sair</b>
                                </Typography>
                            </Box>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;