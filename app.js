import express from 'express';
import hbs from 'hbs';
import 'dotenv/config';

const port=process.env.PORT
const app=express();
const ruta='/Users/matiatau/OneDrive - Telefonica/Capacitacion/Node/06-web-server'
app.set('view engine','hbs');
hbs.registerPartials(ruta+'/views/partials',(err)=>{});
//mostrar contenido estatico
app.use(express.static('./public'));


app.get('/',(req,res)=>{

    res.render('home',{
        nombre:'Selenita',
        titulo:'Curso de node'
    });
});

app.get('/generic',(req,res)=>{

    res.render('generic');
});

app.listen(8080);
