import { Leaf, Package, Recycle, BookOpen, Lightbulb, Truck } from 'lucide-react';

const commitments = [
  { Icon: Package, title: 'Menos empaque, más cuidado', action: 'Proponemos reducir envoltorios innecesarios y priorizar embalajes reutilizables o reciclables cuando protejan adecuadamente el kit.', benefit: 'Busca disminuir los residuos de cada entrega.' },
  { Icon: Recycle, title: 'Materiales que duren', action: 'Buscaremos componentes resistentes y fáciles de mantener, con instrucciones para prolongar su vida útil. La reutilización dependerá de su estado y seguridad.', benefit: 'Puede evitar reemplazos prematuros y el descarte de materiales.' },
  { Icon: BookOpen, title: 'Recursos digitales primero', action: 'Priorizaremos guías digitales y la impresión solo cuando sea necesaria para una actividad o para facilitar el acceso de las familias.', benefit: 'Busca reducir el consumo innecesario de papel, reconociendo que lo digital también consume energía.' },
  { Icon: Leaf, title: 'Aprender a cuidar el entorno', action: 'Propondremos actividades por edad sobre separación de residuos, cuidado del agua y respeto por la naturaleza, siempre con supervisión adulta y materiales seguros.', benefit: 'Acerca hábitos de cuidado ambiental a la vida familiar.' },
  { Icon: Lightbulb, title: 'Uso responsable de recursos', action: 'Promoveremos apagar equipos que no estén en uso, aprovechar la iluminación natural y separar los residuos de las áreas de trabajo según las opciones locales.', benefit: 'Busca evitar desperdicios de energía y mejorar la gestión de residuos.' },
  { Icon: Truck, title: 'Compras y entregas conscientes', action: 'Evaluaremos proveedores cercanos y la agrupación de despachos cuando sea viable, sin comprometer la seguridad ni la calidad de los productos.', benefit: 'Puede reducir embalajes y desplazamientos innecesarios.' },
];

export function EnvironmentalCommitment() {
  return <section className="why-section">
    <div className="container">
      <div className="section-heading"><div><span className="eyebrow">NUESTRO COMPROMISO CON EL MEDIO AMBIENTE</span><h2>Cuidar su futuro también<br />es cuidar el planeta.</h2></div><p>PATIPS propone integrar el cuidado ambiental en sus materiales educativos, recursos digitales y decisiones cotidianas.</p></div>
      <p className="proposal-note">Compromisos propuestos para la futura operación. Aún no se han implementado ni medido; no representan certificaciones ni resultados ambientales alcanzados.</p>
      <div className="three-grid">{commitments.map(({ Icon, title, action, benefit }) => <article className="simple-card" key={title}><Icon className="text-primary" /><h3>{title}</h3><p>{action}</p><div className="ods-action"><strong>¿Cómo puede ayudar?</strong><p>{benefit}</p></div></article>)}</div>
      <div className="info-band"><Leaf /><div><strong>Compromisos que deberán demostrarse</strong><p>Antes del lanzamiento se definirán responsables y metas viables. Se propone registrar los materiales de los empaques, residuos generados, consumo de papel y energía, y opciones de reutilización segura. Los avances se comunicarán con evidencia, sin afirmar que un kit es «ecológico», «biodegradable» o «carbono neutro» sin sustento.</p></div></div>
    </div>
  </section>;
}