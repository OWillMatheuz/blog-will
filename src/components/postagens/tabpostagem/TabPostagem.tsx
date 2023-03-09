import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value} >
        <AppBar className="tarja" position="static">
          <Tabs className="barra" centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre Mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sejam todos bem vindos !</Typography>
          <Typography className="textcolor" variant="body1" gutterBottom color="textPrimary" align="justify">Olá, me chamo Willian Matheus. <hr /> Moro em São Paulo,
e sou Motoboy <br />
Minha formação: 
Desenvolvimento Java Full Stack Jr. (Generation Brasil/ Zé Delivery) <br />
ERP - Planejamento de Recursos Empresariais pelo Instituto da Oportunidade Social. <br/>
<hr />
Aqui listo as competências que possuo:<br />
 Back-end :<br />
• Arquitetura Web<br />
• Java 17<br />
• API's REST<br />
• Arquitetura MVC<br />
• Spring Boot <br />
• Spring Security Basic Authentication <br />
• Fundamentos em testes unitários<br />

 Front-end :<br />
• React 17 <br />
• Node<br />
• HTML5<br />
• CSS3<br />
• JavaScript<br />
• TypeScript<br />

 Banco de dados :<br />
• MySQL <br />

 DevOps :<br />
• Git<br />
• GitHub<br />

ERP (Software Microsiga Protheus) : <br />
• Controle de estoque<br />
• Contas a pagar e receber<br />
• Financeiro<br />
• Faturamento<br />
• Contabilidade</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;