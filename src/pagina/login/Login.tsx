import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid,Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import UsuarioLogin from '../models/UsuarioLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import './Login.css';
const estilo = {
    background: 'rgb(167,106,8)',
    backgroundImage: 'linear-gradient(90deg, rgba(167,106,8,1) 29%, rgba(0,0,0,1) 83%)'
}
function Login() {
    let navigate = useNavigate();
    const [token, setToken]= useLocalStorage('token');


    const [userLogin, setUserLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            navigate('/home')
        }
    }, [token])

    async function onSubmit (e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
           await login(`/usuarios/logar`, userLogin,setToken)

            alert ('Usuário logado com sucesso!');
        }catch(error){
            alert ('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    
    return (
        <Grid style={estilo} container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textoscomponents'>Entre e conheça a minha trajetória</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary' className='botaologar' >
                                    Logar
                                </Button>
                        </Box>
                </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textoscomponents'>Cadastre-se</Typography>
                        </Link>    
                    </Box>
                </Box>
                <Box marginRight={1}>
                            <Typography variant='subtitle2' gutterBottom align='center'>Seus dados são criptografados!</Typography>
                        </Box>
            </Grid>
            <Grid xs={4} className='imagem'>

            </Grid>
        </Grid>
    );
    }
export default Login;
