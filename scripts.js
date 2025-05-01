//Menu Responsivo (navbar mobile)
const menu = document.querySelector('.menu');
const NavMenu =  document.querySelector('.nav-list');

menu.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

//SPA - Fetch Página Inicial
function abrirHeroHome(){ 
    fetch ('pages/herohome.html')
        .then(res => res.text())
        .then(conteudo => {
            document.getElementById('conteudo')
            .innerHTML = conteudo;
        })
        .catch(erro => {
            console.error('Erro ao carregar:', erro);
        });
}

//SPA - Fetch Menu
function abrirMenu(){
    fetch ('pages/menu.html')
        .then(res => res.text())
        .then(conteudo => {
            document.getElementById('conteudo')
            .innerHTML = conteudo;
        })
        .catch(erro => {
            console.error('Erro ao carregar:', erro);
        });
}

//SPA - Fetch About
function abrirAbout(){
    fetch ('pages/about.html')
        .then(res => res.text())
        .then(conteudo => {
            document.getElementById('conteudo')
            .innerHTML = conteudo;
        })
        .catch(erro => {
            console.error('Erro ao carregar:', erro);
        });
}

//SPA - Fetch Contact Us
function abrirContact(){
    fetch ('pages/contact.html')
        .then(res => res.text())
        .then(conteudo => {
            document.getElementById('conteudo')
            .innerHTML = conteudo;
        })
        .catch(erro => {
            console.error('Erro ao carregar:', erro);
        });
}

//SPA - Abrir pagina inicial
document.addEventListener('DOMContentLoaded', function(){
    abrirHeroHome();
})