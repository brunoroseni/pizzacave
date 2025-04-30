//SPA - Mostra os sabores tradicionais
function flavorTraditional(){
    fetch ('pages/menu-flavors/traditional.html')
        .then(res => res.text())
        .then(flavorcontent => {
            document.getElementById('flavor-content')
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