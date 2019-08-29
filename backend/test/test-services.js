const watsonservice = require('../services/watson-service');

/* texto= 'Los mas sabios y los mas tontos son los unicos que no se alteran';
texto2= 'Solo se puede ser valiente cuando en verdad se tiene miedo';
texto3= 'She say good mornig when is midnight'; */

t= 'Ramírez mostrando la 20 ya se ganó a la hinchada'
'Del medio para arriba tenemos más banco que el Manchester City https://t.co/2SqXOe0y9s' +' - '+
'Que día para hacer cualquier cosa menos estudiar la re putísima madre que lo pario' +' - '+
'El centro de Bahía me tiene podrido' +' - '+
'Cómo me está costando despegarme de la cama' +' - '+
'Tengo 3 latas de birra en la heladera hace dos semanas. Que mierda me está pasando?' +' - '+
'Hace tanto que no juego al FIFA, que si le juego a @Fedetumini_96 hoy en día le gano por menos de 3 goles' +' - '+
'Pero la puta madre, cómo vamos a quedar afuera de esta copa' +' - '+
'Tiene que ser mentira por favor. Estás conclusiones me alegraron un poco el dia https://t.co/Tq26m1sFuL' +' - '+
'Día ideal para cortarse los huevos con un cepillo de dientes' +' - '+
'Si piensan que tienen mala leche, acuérdense que yo rindo un final el sábado a las 8 AM.' +' - '+
'Jaaaaaa mira el gol que hace Kalidios https://t.co/RBMO9gKLuN' +' - '+
'Top 3 BZRP Music Sessions según yo: 1) Frijo 2) Nicki Nicole 3) DrefQuila ' +' - '+
'Física 1, física 2...la tortura no se termina nunca' +' - '+
'Llegar cagado de frío a tu casa y acostarte es comparable con pocas cosas' +' - '+
'Y NO ME IMPORTA EN QUE CANCHA JUGUEEEEES' +' - '+
'Yo lo saco y no lo pongo más. Es un pelotudo viejo' +' - '+
'Mira el gol que hace belluschi, le pega 100 veces más y no lo mete' +' - '+
'No defendemos a nadie' +' - '+
'DESNUDO https://t.co/1EMEpFuHca' +' - '+
'Ufff Travis vestite hijo de puta'

/* t= { param: ['primera fase superada', 'los quiero mucho'] }; */



var test = watsonservice.analyzeText(t).then(response => {
    console.log(JSON.stringify(response,null,2));
}).catch(err=>{console.log(err)});
