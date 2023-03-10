import React, { useEffect, useState,  } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../pagina/models/Postagem';
import { busca } from '../../../services/Service'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';





function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.warn('Você precisa estar logado', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        
        posts.map(posts => (
          <Box  m={2} >
            <Card className="card" variant="outlined">
              <CardContent >
              <Typography variant="body2" component="p">
                Postado por: {posts.usuario?.nome}
              </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {posts.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  Mensagem: {posts.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  Postado em: {new Date(Date.parse(posts.date)).toLocaleDateString()} <br />
                </Typography>
                <Typography variant="body2" component="p">
                  Tema: {posts.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${posts.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button  variant="contained" className="btnatua" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${posts.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button className="btncancelar" variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;
