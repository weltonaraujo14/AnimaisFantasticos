// const linkExterno = document.querySelector('a[href^="http"]');

// function callBack(event){
//     event.preventDefault();
//     console.log(`Você clicou no seguinte link ${event.currentTarget.href}`);
// }

// linkExterno.addEventListener('click', callBack);

// const imagem = document.querySelector('img');

// function callBack(event){
//     console.log(this);
//     console.log(this.getAttribute('src'));

// }

// imagem.addEventListener('click', callBack);

// const imgs = document.querySelectorAll('img');

// function removeElemento(element){
//     element = element.target.remove();
// }

// imgs.forEach((img)=>{
//     img.addEventListener('dblclick', removeElemento);
// });

// const linksInterno = document.querySelectorAll('a[href^="#"]');

// function adicionaClass(element){
//     element.preventDefault();
//     linksInterno.forEach((link)=>{
//         link.classList.remove('ativo');
//     });
//     element.currentTarget.classList.add('ativo');

// }

// linksInterno.forEach((link)=>{
//     link.addEventListener('click', adicionaClass);
// });

// function verificaClickT(event){
//     console.log(event.key);
//     if(event.key === 't'){
//         let pagina = document.querySelector('body');
//         pagina.classList.toggle('aumentaTexto');
//     }
// }

// window.addEventListener('keydown', verificaClickT);


// const imgs = document.querySelectorAll('img');
// function handleImg(element){
//     const h1 = document.querySelector('#titulo');
//     const src = element.currentTarget.getAttribute('src');
//     h1.textContent = src;
// }

// imgs.forEach((img)=>{
//     img.addEventListener('click', handleImg);
// });

// const linksInterno = document.querySelectorAll('a[href^="#"]');

// function adicionaClasse(element){
//     element.preventDefault();
//     linksInterno.forEach((link)=>{
//         link.classList.remove('ativo');
//     });
//     element.currentTarget.classList.add('ativo');
// }

// linksInterno.forEach((link)=>{
//     link.addEventListener('click', adicionaClasse);
// });

// const lista = document.querySelector('.animais-lista');

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');

// const cloneMenu = menu.cloneNode(true);
// copy.appendChild(cloneMenu);

// const faqLista = document.querySelector('.faq-lista');
// const primeiroItem = faqLista.children[0];
// console.log(primeiroItem);
// const filhoItem =  primeiroItem.nextElementSibling;
// console.log(filhoItem);

// const faq = document.querySelector('.faq');
// const animais = document.querySelector('.animais');

// faq.innerHTML = animais.innerHTML;

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((imagem, index) => {
            imagem.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo'
    if (accordionList) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(event) {
            event.currentTarget.classList.toggle(activeClass);
            event.currentTarget.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

function initScroll() {
    const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        // const topo = section.offsetTop;

        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // })
    }

    linksInterno.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScroll();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const halfWindow = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isVisible = (sectionTop - halfWindow) < 0;
                if (isVisible) {
                    section.classList.add('ativo');
                }
                else
                    section.classList.remove('ativo');
            });
        }

        animaScroll();
        sections.forEach(() => {
            addEventListener('scroll', animaScroll);
        });
    }
}
initAnimacaoScroll();

// function Carro() {
//     this.marca = 'Marca';
//     this.preco = 0;
// }

// const honda = new Carro();
// honda.marca = 'Honda';
// honda.preco = 40;
// console.log(`${honda.marca}\n`);
// console.log(`${honda.preco.toFixed(3)}\n\n`);

// const fiat = new Carro()
//     fiat.marca = 'Fiat';
//     fiat.preco = 20;

// console.log(fiat.marca);
// console.log(fiat.preco.toFixed(3));

// function Cama(marca, tamanho){
//     this.marca = marca
//     this.tamanho = tamanho.toFixed(2);
// }

// const bed = new Cama('King', 2);

function Caderno(marca, folhas, tamanho){
    this.marca = marca;
    this.folhas = folhas;
    this.tamanho = tamanho;
}

const book = new Caderno('Tilibra', 96, 20);
console.table(book);