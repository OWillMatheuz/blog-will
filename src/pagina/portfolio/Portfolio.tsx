import React, { useEffect, useState,  } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import './Portfolio.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import AliceCarousel from 'react-alice-carousel';
import { Card, Grid, Typography } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import { Box } from '@mui/material';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Portfolio() {
    
  return (
    <>
     <Grid xs={12} style={{ background: "#00000090" }}>
                        <Box display="flex" justifyContent="start" >
                            <Typography color="textPrimary" variant="h3" align="center" className="titulo1" style={{ paddingTop: "40px" }}>Estes são meus projetos</Typography>
                        </Box>
                    </Grid>
                    <Grid alignItems="center" item xs={12} className="cardEquipe" style={{ background: "#00000090" }}>
                        <Box display="flex" justifyContent="center" gap="5rem">
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="mindset"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Primeiro projeto</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Mindset - Feito em Java</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://github.com/OWillMatheuz/Projeto-Java-Mindset" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>

                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="mysql"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Banco de Dados </Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvi e aprendi o banco de dados com Mysql e fundamentos da linguagem SQL</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://github.com/OWillMatheuz/DER-BLOG-PESSOAL" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>

                            </Card>
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="fundamentos"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Fundamentos Web</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Projeto feito em Html / Css / JavaScript</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">       
                                                    <a href="https://github.com/OWillMatheuz/Fundamentos-Web" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>

                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="crud"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">C.R.U.D</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada.</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://github.com/OWillMatheuz/ATIVIDADE-CRUD-BACKEND-BLOG-PESSOAL-PARTE-01/tree/main/src/main/java/org/generation/blogwill" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>

                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="pi"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Projeto Integrador</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Projeto feito em grupo. Escolhemos a ODS 10 da ONU. Este projeto integra o motorista de caminhão com lavanderias mais próximas.</Typography>
                                                <Box justifyContent="space-around" alignItems="center" display="flex">
                                                    <a href="https://github.com/OWillMatheuz/Projeto_Integrador_Vagalume_Frontend" target="_blank" rel="noreferrer">
                                                        <GitHub className='iconeSocial2' />
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            
                        </Box>
                    </Grid>
            
        </>
    )
}

export default Portfolio;
