// Dados dinâmicos (exemplo)
const servicesData = [
  { title: "Consultoria Tecnológica", description: "Ajudamos a transformar seu negócio com soluções tecnológicas inovadoras." },
  { title: "Desenvolvimento de Software", description: "Criamos sistemas sob medida para atender às suas necessidades." },
  { title: "Transformação Digital", description: "Impulsionamos a transformação digital da sua empresa com as melhores práticas." }
];

const testimonialsData = [
  { name: "Ana Oliveira", feedback: "A tecnologia transformou a minha empresa e aumentou os resultados!" },
  { name: "Carlos Silva", feedback: "Excelente atendimento e soluções práticas para o meu negócio." },
  { name: "Fernanda Souza", feedback: "Profissionais altamente qualificados e sempre inovando." }
];

// Função para renderizar os serviços
const renderServices = () => {
  const servicesContainer = document.querySelector('.services-grid');
  servicesData.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
    servicesContainer.appendChild(serviceCard);
  });
};

// Função para renderizar os depoimentos
const renderTestimonials = () => {
  const testimonialsContainer = document.querySelector('.testimonials-carousel');
  testimonialsData.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.innerHTML = `
      <p>"${testimonial.feedback}"</p>
      <strong>- ${testimonial.name}</strong>
    `;
    testimonialsContainer.appendChild(testimonialCard);
  });
};

// Função para alternar entre Modo de Alto Contraste
document.getElementById('high-contrast-toggle').addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});

// Função para aumentar/diminuir o tamanho da fonte
const setFontSize = (size) => {
  document.documentElement.style.fontSize = size + 'px';
};

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === '+') {
    setFontSize(parseInt(getComputedStyle(document.documentElement).fontSize) + 1);
  } else if (event.ctrlKey && event.key === '-') {
    setFontSize(parseInt(getComputedStyle(document.documentElement).fontSize) - 1);
  }
});

// Chamar funções de renderização
renderServices();
renderTestimonials();
