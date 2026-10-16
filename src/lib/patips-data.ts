export const plans = [
 { name: 'Gratis', monthly: 0, annual: 0, benefits: ['Consejos básicos de crianza', 'Artículos y actividades iniciales', 'Acceso a contenidos gratuitos'] },
 { name: 'Plus', monthly: 9.9, annual: 99, benefits: ['Contenido completo por edades', 'Actividades descargables', 'Menos publicidad'] },
 { name: 'Premium', monthly: 19.9, annual: 199, benefits: ['Sin publicidad', 'Talleres virtuales y contenido exclusivo', 'Descuentos en kits educativos'] },
 { name: 'Familia', monthly: 29.9, annual: 299, benefits: ['Todos los beneficios Premium', 'Contenido para varios hijos', 'Acceso familiar'] },
];
export const kitPackages = [{ name: 'Mini', price: 49.9, months: 0 }, { name: 'Aprende', price: 89.9, months: 1 }, { name: 'Premium', price: 149.9, months: 3 }];
export const advisory = [ ['Orientación rápida', '20 min', 39.9], ['Educación Inicial', '40 min', 59.9], ['Nutrición infantil', '40–45 min', 79.9], ['Psicología y orientación parental', '45–50 min', 89.9], ['Pediatría en línea', '30–40 min', 99.9], ['Asesoría especializada', '50–60 min', 119.9] ] as const;
export const institutions = [{name:'Jardín Básico',price:99,families:30}, {name:'Jardín Plus',price:199,families:80}, {name:'Institucional',price:349,families:150}];
export const money = (amount: number) => `S/ ${amount.toFixed(2)}`;
export const CONTACT = { address: 'Jr. Chucuito 138, Puno, Perú', email: 'blasspc323@gmail.com', phoneDisplay: '+51 927 733 745', phoneHref: 'tel:+51927733745', whatsappHref: 'https://wa.me/51927733745', hours: 'De 7:00 a. m. a 10:00 p. m.' };
