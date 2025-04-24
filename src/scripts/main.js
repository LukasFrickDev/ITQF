document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    // Esconde todas as abas inicialmente
    escondeTodasAbas();

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            const abaAlvo = this.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            // Se a aba clicada já estiver ativa, esconde ela
            if (aba.classList.contains('shows__list--is-active')) {
                aba.classList.remove('shows__list--is-active');
                this.classList.remove('shows__tabs__button--is-active');
            } else {
                // Caso contrário, esconde todas e mostra apenas a selecionada
                escondeTodasAbas();
                aba.classList.add('shows__list--is-active');
                removeActiveButton();
                this.classList.add('shows__tabs__button--is-active');

                // Rolagem suave para a área de informações
                setTimeout(() => {
                    scrollToCenter()
                }, 300);
            }
        });
    }
});

function scrollToCenter() {
    const alvo = document.getElementById("about__profissionals");
        alvo.scrollIntoView({
            behavior: 'smooth', 
            block: 'center' 
        }
        );
}


function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')

    }
}

