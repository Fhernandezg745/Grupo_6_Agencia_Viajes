import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../components/Navbar";
import '../assets/css/Dashboard.css';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PublicIcon from '@mui/icons-material/Public';
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';
import TableMaterial from '../components/TableMaterial';

const useStyles= makeStyles(()=>({
root:{
    flexGrow: 1
},
iconos:{
    color: 'green',
    fontSize: '22px'
},
container:{
    paddingTop: '40px',
    alignItems: 'center'
    
},
containerGrafica:{
    marginTop: '40px'
},
containerTabla:{
    marginTop: '40px'
}
}));


function Dashboard(props) {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container item spacing={3}>

                <Grid item xs={12}>
                    <Navbar/>
                </Grid>

                
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<AirplaneTicketIcon className={classes.iconos}/>} titulo="PRODUCTOS" texto="" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<AccountBoxIcon className={classes.iconos}/>} titulo="USUARIOS" texto="" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<PublicIcon className={classes.iconos}/>} titulo="REGIONES" texto="" color="rgba(248,80,50,1)" font="white"/>
                </Grid>

                <Grid container item spacing={1} className={classes.container} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="CANTIDAD DE USUARIOS" texto="20"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="CANTIDAD DE PRODUCTOS" texto="19"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="TOTAL VENTAS MENSUALES" texto="$14.549"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="REGIONES MAS VISITADAS" texto="Africa"/>
                    </Grid>

                </Grid>


                    <Grid item xs={12} className={classes.containerTabla}>
                    <TableMaterial/>
                    </Grid>


            </Grid>
        </div>
    );
}

export default Dashboard;