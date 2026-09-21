// Abrir barra de pesquisa
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchMobile');
    const searchForm = document.querySelector('.search');

    searchIcon.addEventListener('click', function() { 
        searchForm.classList.toggle('active');
    });

    const searchFormInputs = document.querySelectorAll('.search-block-form input');
    searchFormInputs.forEach(input => {
        input.addEventListener('focus', function() {
            // Não faz nada quando o input é focado
        });
        input.addEventListener('blur', function() {
            searchForm.classList.remove('active');
        });
    });

    // Fechar o formulário quando clicar fora dele
    document.addEventListener('click', function(event) {
        if (!searchForm.contains(event.target) && !searchIcon.contains(event.target)) {
            searchForm.classList.remove('active');
        }
    });
});


// clique no menu primario
const closeMenuButton = document.getElementById('closeMenu');
const menuPrimaryButton = document.getElementById('menu-primary');
const menuPrimarioAtivo = document.querySelector('.menu-primario-ativo');
const closeMenu = document.querySelector('#closeMenu');

closeMenuButton.addEventListener('click', () => {
    menuPrimarioAtivo.style.display = 'none';
    closeMenu.style.display = 'none';
    menuPrimaryButton.style.display = 'block';
});


menuPrimaryButton.addEventListener('click', () => {
    menuPrimarioAtivo.style.display = 'block';
    closeMenu.style.display = 'flex';
    menuPrimaryButton.style.display = 'none';
});

// menu mobile
document.getElementById('menu-top').addEventListener('click', function (event) {
    var menuTopContainer = document.getElementById('menu-top-container');

    if (menuTopContainer.style.display === 'none' || menuTopContainer.style.display === '') {
        menuTopContainer.style.display = 'block';
        // Adiciona um ouvinte de evento para fechar o menu se clicar fora
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        menuTopContainer.style.display = 'none';
        // Remove o ouvinte de evento para fechar o menu se clicar fora
        document.removeEventListener('click', closeMenuOnClickOutside);
    }

    // Impede que o clique se propague para o documento
    event.stopPropagation();
});

function closeMenuOnClickOutside(event) {
    var menuTopContainer = document.getElementById('menu-top-container');
    var menuTop = document.getElementById('menu-top');

    // Verifica se o clique foi fora do menu
    if (event.target !== menuTopContainer && event.target !== menuTop && !menuTopContainer.contains(event.target)) {
        menuTopContainer.style.display = 'none';
        // Remove o ouvinte de evento para fechar o menu se clicar fora
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}


//abrir menu acessibilidade
document.addEventListener('DOMContentLoaded', function () {
    var acessibilidade = document.getElementById('acessibilidade');
    var menuAcessibilidade = document.getElementById('menu-mobile-acessibilidade');

    acessibilidade.addEventListener('click', function (event) {
        if (menuAcessibilidade.style.display === 'none' || menuAcessibilidade.style.display === '') {
            slideDown(menuAcessibilidade);
            document.addEventListener('click', closeMenuOnClickOutsideAcessibilidade);
        } else {
            menuAcessibilidade.style.display = 'none';
            document.removeEventListener('click', closeMenuOnClickOutsideAcessibilidade);
        }

        event.stopPropagation();
    });

    function slideDown(element) {
        var height = 0;
        element.style.display = 'block';
        var maxHeight = element.scrollHeight;

        var slideAnimation = setInterval(function () {
            if (height >= maxHeight) {
                clearInterval(slideAnimation);
            } else {
                height += 100;
                element.style.height = height + 'px';
            }
        }, 10);
    }

    function closeMenuOnClickOutsideAcessibilidade(event) {
        if (event.target !== menuAcessibilidade && !menuAcessibilidade.contains(event.target)) {
            menuAcessibilidade.style.display = 'none';
            document.removeEventListener('click', closeMenuOnClickOutsideAcessibilidade);
        }
    }
});

//exibir menu lateral esquerda
document.addEventListener('DOMContentLoaded', function () {
    var headerMenuTop = document.getElementById('header-menu-top');
    var menuMobileEsquerda = document.getElementById('menu-mobile-esquerda');

    headerMenuTop.addEventListener('click', function (event) {
        if (menuMobileEsquerda.style.display === 'none' || menuMobileEsquerda.style.display === '') {
            slideDown(menuMobileEsquerda);
            document.addEventListener('click', closeMenuOnClickOutside);
        } else {
            menuMobileEsquerda.style.display = 'none';
            document.removeEventListener('click', closeMenuOnClickOutside);
        }

        event.stopPropagation();
    });

    function slideDown(element) {
        var height = 0;
        var initialTop = 0;
        element.style.display = 'block';
        var maxHeight = element.scrollHeight;

        var slideAnimation = setInterval(function () {
            if (height >= maxHeight) {
                clearInterval(slideAnimation);
            } else {
                height += 10;
                element.style.height = height + 'px';
                initialTop = height + 60;
                element.style.top = initialTop + 'px';
            }
        }, 10);
    }

    function closeMenuOnClickOutside(event) {
        if (event.target !== menuMobileEsquerda && !menuMobileEsquerda.contains(event.target)) {
            menuMobileEsquerda.style.display = 'none';
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }
});

//retira link de onde não url definida
document.addEventListener('DOMContentLoaded', function () {
    const anchors = document.querySelectorAll('a');

    anchors.forEach(function (anchor) {
        var hrefValue = anchor.getAttribute('href');
        if (hrefValue === '' || hrefValue === '#') {
            anchor.removeAttribute('href');  // Remove o atributo href se for vazio ou '#'
        }
    });
});

// dark mode
// Função para ativar o modo de alto contraste
function ativarAltoContraste() {
    document.body.classList.add('dark');
}

// Função para desativar o modo de alto contraste
function desativarAltoContraste() {
    document.body.classList.remove('dark');
}

// Função para alternar o modo de alto contraste
function alternarAltoContraste() {
    const body = document.body;
    if (body.classList.contains('dark')) {
        desativarAltoContraste();
    } else {
        ativarAltoContraste();
    }
}

// Adiciona um evento de clique a todos os links
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        if (link.getAttribute('href') === '#altocontraste') {
            event.preventDefault(); // Impede o comportamento padrão do link
            alternarAltoContraste(); // Alterna o alto contraste

            localStorage.setItem('altoContrasteAtivo', document.body.classList.contains('dark'));
        }
    });
});

// Verifica se o modo de alto contraste estava ativo ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const altoContrasteAtivo = localStorage.getItem('altoContrasteAtivo');
    if (altoContrasteAtivo === 'true') {
        ativarAltoContraste();
    }
});


// scroll suave to top
document.addEventListener("DOMContentLoaded", function() {
    var toTopButton = document.getElementById("totop");

    // Verifica se o botão foi encontrado
    if (toTopButton) {
        toTopButton.addEventListener("click", function() {
            // Executa o scroll suave para o topo da página
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});


const navbar = document.getElementById("menuTotalFixo");
const sticky = navbar.offsetTop;

function fixarmenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Adiciona um ouvinte de evento de scroll
window.addEventListener('scroll', function () {
    const toTopButton = document.getElementById('totop');

    if (toTopButton) {
        if (window.scrollY > window.innerHeight / 2) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    }
});

window.addEventListener('scroll', function () {
    fixarmenu();
});



// share
function sharePopup(url) {
    // Abre uma janela pop-up no centro da tela
    var width = 600;
    var height = 400;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    return window.open(url, 'Compartilhar', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
}

function shareFacebook() {
    var title = encodeURIComponent(document.title);
    var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) + '&quote=' + title;
    sharePopup(url);
}

function shareTwitter() {
    var title = encodeURIComponent(document.title);
    var url = 'https://twitter.com/intent/tweet?text=' + title + '&url=' + encodeURIComponent(window.location.href);
    sharePopup(url);
}

function copyLink() {
    var url = window.location.href;
    var tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    var copyMessages = document.querySelectorAll('.copy-message');
    copyMessages.forEach(function (copyMessage) {
        copyMessage.innerHTML = 'Link copiado!';
        setTimeout(function () {
            copyMessage.innerHTML = '';
        }, 3000);
    });

}

// Abrir barra de menus

document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('.barra-menus nav h2');
    const ulElements = document.querySelectorAll('.barra-menus nav ul');

    // Adiciona um ouvinte de evento a cada h2
    h2Elements.forEach(function(h2) {
        h2.addEventListener('click', function() {
            // Alterna a classe "aberto" para todos os ul
            ulElements.forEach(function(ul) {
                ul.classList.toggle('aberto');
            });
        });
    });

    // Adiciona um ouvinte de evento ao documento inteiro para fechar os menus se clicar fora deles
    document.addEventListener('click', function(event) {
        const isClickedInsideMenu = event.target.closest('.barra-menus');
        if (!isClickedInsideMenu) {
            // Fecha todos os menus
            ulElements.forEach(function(ul) {
                ul.classList.remove('aberto');
            });
        }
    });
});


