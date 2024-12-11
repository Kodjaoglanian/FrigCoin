// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true
});

// Animação interativa do botão
const buttons = document.querySelectorAll('button');

// Consolidar listeners de 'mouseenter' e 'mouseleave' para os botões
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.backgroundColor = 'var(--secondary-color)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = 'var(--primary-color)';
    });

    button.addEventListener('click', function() {
        // Ação específica para cada botão pode ser adicionada aqui
    });
});

// Animação do Botão de Chamada à Ação na Seção Hero
const heroButton = document.querySelector('.hero .start-building');

heroButton.addEventListener('mouseenter', () => {
    heroButton.style.background = 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))';
});

heroButton.addEventListener('mouseleave', () => {
    heroButton.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
});

// Menu Responsivo
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Animações ao rolar
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Interação da Criptomoeda com a Rolagem
const cryptoCoin = document.getElementById('cryptoCoin');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Ajuste o valor conforme necessário
        cryptoCoin.classList.add('scrolled');
    } else {
        cryptoCoin.classList.remove('scrolled');
    }
});

// Formulário de Contato
const contactForm = document.querySelector('section#contact form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Simulação de envio
    alert(`Obrigado, ${name}! Sua mensagem foi recebida.`);
    contactForm.reset();
});

// Formulário de Newsletter
const newsletterForm = document.querySelector('.newsletter form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;

    // Simulação de inscrição
    alert(`Obrigado por se inscrever, ${email}! Você receberá novidades em breve.`);
    newsletterForm.reset();
});

// FAQ Interativo
const faqQuestions = document.querySelectorAll('.faq-item h3');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        const answer = faqItem.querySelector('p');
        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

// Modo Escuro
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Modo Escuro';
darkModeButton.style.position = 'fixed';
darkModeButton.style.bottom = '20px';
darkModeButton.style.right = '20px';
darkModeButton.style.padding = '10px 20px';
darkModeButton.style.border = 'none';
darkModeButton.style.borderRadius = '5px';
darkModeButton.style.background = 'var(--primary-color)';
darkModeButton.style.color = '#fff';
darkModeButton.style.cursor = 'pointer';
darkModeButton.style.zIndex = '1000';

darkModeButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeButton);

// Remover funcionalidades do Carrossel de Testemunhos
/*
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.testimonials .prev');
const nextButton = document.querySelector('.testimonials .next');
let currentIndex = 0;

const updateCarousel = () => {
    testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
};

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Autoplay do Carrossel
setInterval(() => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}, 5000);
*/

// Remover o listener de click do botão "Entrar na Comunidade" caso exista
// Não é necessário redirecionar via JavaScript, já que agora é um link direto