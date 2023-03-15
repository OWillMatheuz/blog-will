import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid,Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import { login } from '../../services/Service';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
import UsuarioLogin from '../models/UsuarioLogin';
import {IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken]= useState('');
    const [userLogin, setUserLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    );
    const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            nome:'',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    );
    const [loginForm, setLoginForm] = useState(true)

    const padraoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    useEffect(() => {
      if(userLogin.usuario.match(padraoEmail) && userLogin.senha.length >= 8) {
        setLoginForm(false)
      } else {
        setLoginForm(true)
      }
    }, [userLogin])
    
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit (e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
           await login(`/usuarios/logar`, userLogin, setRespUserLogin)

           toast.success('Usuário logado com sucesso!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }catch(error){
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    useEffect(() => {
        if (token !== '') {
          dispatch(addToken(token))
         navigate('/home');
        }
      }, [token]);

      useEffect(() => {
        if (respUserLogin.token !== '') {
          dispatch(addToken(respUserLogin.token))
          dispatch(addId(respUserLogin.id.toString()))
          navigate('/home')
        }
      }, [respUserLogin.token])

    
    return (
        <Grid className="login" container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={2}>
                <form onSubmit={onSubmit}>
                  <Box display="flex" justifyContent="start">
                        <Typography  variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textoscomponents'>Entre e conheça a minha trajetória</Typography>
                  </Box>    
                      <Box display="flex" justifyContent="start">
                        <TextField className="campo1"  value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário(e-mail)' variant='outlined' name='usuario' margin='normal' fullWidth type='text'
                         inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" }}
                         required /> 
                      </Box>   
                      <Box display="flex" justifyContent="start">
                        <TextField className="campo1" value={userLogin.senha} 
                         onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                         id='senha' 
                         label='senha' 
                         variant='outlined' 
                         name='senha' 
                         margin='normal' fullWidth 
                         type={showPassword ? 'text' : 'password'}
                         InputProps={{
                          endAdornment: (
                             <InputAdornment position="end">
                               <IconButton onClick={handleClickShowPassword}>
                                 {showPassword ? <Visibility /> : <VisibilityOff />}
                               </IconButton>
                             </InputAdornment>
                             
                           )
                         }}
                       />
                       </Box>
                        <Box marginTop={2} textAlign='center' display="flex" justifyContent="start">
                          <Button type='submit' variant='contained' color='primary' className='botaologar' >
                                    Logar
                          </Button>
                        </Box>
                </form>
                    <Box display="flex" justifyContent="start" marginTop={2}>
                        <Box marginRight={2}>
                            <Typography className="textoscomponents" variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Box display="flex" justifyContent="start">
                        <Link to='/cadastro' className="text-decorator-none">
                            <Typography variant='subtitle1' gutterBottom align='center' className="cad">Cadastre-se</Typography>
                        </Link>  
                        </Box>  
                    </Box>
                </Box>
                <Box marginRight={1} display="flex" justifyContent="start">
                  <Typography className="textoscomponents" variant='subtitle2' gutterBottom align='center'> Seus dados são criptografados!</Typography>
                </Box>
            </Grid>
            <Box >
            <Grid xs={10} className='imagem'>
            </Grid>
            </Box>
            
        </Grid>
    );
    }
export default Login;
function setLoginForm(arg0: boolean) {
    throw new Error('Function not implemented.');
}

