import React from 'react';

const dados = [
    {
        nomeUsuario : 'Paulinha',
        fotoUsuario : 'https://picsum.photos/50/50',
        fotoPost : 'https://picsum.photos/200/150'
    }
    ,
    {
        nomeUsuario : 'joao',
        fotoUsuario : 'https://picsum.photos/50/51',
        fotoPost : 'https://picsum.photos/200/151'
    }
    ,
    {
        nomeUsuario : 'amanda',
        fotoUsuario :'https://picsum.photos/50/52',
        fotoPost : 'https://picsum.photos/200/152'
    }

]

const dadosMap = dados.map((dados) => 
   <li>{dados}</li>
  
);

export default dadosMap;