//SPA - Mostra os sabores tradicionais
function flavorTraditional(){
    fetch ('pages/menu-flavors/traditional.html')
        .then(res => res.text()) 
        .then(flavorcontent => {
            document.getElementById('flavorcontent')
            .innerHTML = flavorcontent;
        })
        .catch(erro => {
            console.error('Erro ao carregar:', erro);
        });
}

//SPA - Mostra os sabores especiaias
function flavorSpecial(){
    fetch ('pages/menu-flavors/special.html')
        .then(res => res.text()) 
        .then(flavorcontent => {
            document.getElementById('flavorcontent')
            .innerHTML = flavorcontent;
        })
        .catch(erro => {
            console.error('Erro ao carregar:', erro);
        });
}

//SPA - Mostra os sabores tradicionais
function flavorSweet(){
    fetch ('pages/menu-flavors/sweet.html')
        .then(res => res.text()) 
        .then(flavorcontent => {
            document.getElementById('flavorcontent')
            .innerHTML = flavorcontent;
        })
        .catch(erro => {
            console.error('Erro ao carregar:', erro);
        });
}

//SPA - Abre automaticamente os sabores tradicionais automaticamente
document.addEventListener('DOMContentLoaded', function(){
    flavorTraditional();
})