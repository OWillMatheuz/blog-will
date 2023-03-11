import React, { useState, useEffect, ChangeEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../models/Usuario';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField, InputAdornment, IconButton } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import { toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@material-ui/icons';


    
function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate('/login')
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try{
            if(user.senha == confirmarSenha){
       await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
       toast.success('Usuario cadastrado com sucesso', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        }else{
            toast.warn('As senhas não conferem', {
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
    }catch (error) {
        toast.error('Falha no seu cadastro, por favor, verifique os campos', {
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
      if (userResult.id !== 0) {
        navigate('/login');
      }
    }, [userResult]);

    
    return (
        <Grid className="cadastro1" container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3'
                        gutterBottom color='textPrimary'
                        component='h3'
                        align='center' 
                        className='textos2'>Faça seu cadastro</Typography>
                        <TextField value={user.nome} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                         id='nome' 
                         label='Nome Completo*'
                         variant='outlined' 
                         name='nome' 
                         margin='normal' 
                         fullWidth />
                        <TextField value={user.usuario}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                         id='usuario' 
                         label='Usuário(E-mail)' 
                         variant='outlined' 
                         name='usuario' 
                         margin='normal'fullWidth type='email'
                         inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" }}
                         required/>
                        <TextField value={user.senha} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        id='senha' 
                        label='Senha*' 
                        variant='outlined' 
                        name='senha' 
                        margin='normal' 
                        fullWidth 
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
                        <TextField value={confirmarSenha} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                        id='confirmarSenha' 
                        label='Confirmar senha*' 
                        variant='outlined' 
                        name='confirmarSenha' 
                        margin='normal' 
                         fullWidth 
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
                        <TextField value={user.foto} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        id='foto' 
                        label='Coloque a url da sua foto' 
                        variant='outlined' 
                        name='foto' 
                        margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className="btnCad">
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default Cadastro;
