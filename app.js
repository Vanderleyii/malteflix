//http://localhost:3000/api/cerveja/1
var numeroid=4;
function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { cerveja: [ 
                        {id:1,votos:0, nome: "guinness", nacionalidade: "irlanda", estilo: "stout", fermentacao:"ale", ibu: "15", abv:"4.1", imagem: "img/guinnes.jpeg",estrelas:0}, 
                        {id:2,votos:0, nome: "heineken", nacionalidade: "holanda",estilo: "american lager", fermentacao:"lager", ibu: "17", abv:"4.0", imagem:"img/heineken.jpeg",estrelas:0}, 
                        {id:3,votos:0,nome: "duvel", nacionalidade: "belgica", estilo: "strong ale", fermentacao:"ale", ibu: "35", abv:"8.0", imagem:"img/duvel.jpeg", estrelas:0} 
                    ]}
    }

    return objDados;
}
function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
    numeroid++;
}





