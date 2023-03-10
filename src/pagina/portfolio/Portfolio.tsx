import React, { useEffect, useState,  } from 'react'
import {Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {Link, useNavigate } from 'react-router-dom'
import './Portfolio.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import GithubIcon from '@material-ui/icons/GitHub';
import imagem1 from '../img/githubprojeto.jpeg'

function Portfolio() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
      useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])
  return (
    <>
    <Grid  container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={40} ></Box>
          <Box  m={2} >
            <Card className="card" variant="outlined">
              <CardContent >
                <Typography className="text1color" color="textSecondary" gutterBottom>
                  Meu Portfolio
                </Typography>
                <Typography variant="h5" component="h2">
                  Conheça mais em meu GitHub 
                  <a href="https:/http://github.com/OWillMatheuz" target="_blank">
                                <GithubIcon className='portcolor'/>
                            </a>
                </Typography>
              </CardContent>
            </Card>
          </Box>
          </Grid>
            </Grid>
            <div>
      <img className="imagemport" src={imagem1} alt="Descrição da imagem 1" />
    </div>

    </>
  );
}

export default Portfolio;
