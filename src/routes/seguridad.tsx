import { createFileRoute } from '@tanstack/react-router';
import { Download, ShieldCheck, LockKeyhole, PackageCheck } from 'lucide-react';
import { Site, PageIntro, metadata } from '@/components/patips/site';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import policy from '@/lib/patips-security.json';
import document from '@/assets/politica-seguridad.asset.json';

export const Route = createFileRoute('/seguridad')({
  head: () => metadata('Política de seguridad', 'Consulta la política de seguridad propuesta de PATIPS: protección de las familias, kits educativos, datos personales y respuesta ante incidentes.'),
  component: Security,
});

function Security() {
  return <Site>
    <PageIntro eyebrow="CUIDAR ES NUESTRA PRIORIDAD" title="Política de seguridad" description="Prevención, protección y responsabilidad para las familias, los colaboradores y la información de PATIPS." />
    <section className="section container">
      <div className="section-heading">
        <div><span className="eyebrow">DOCUMENTO DEL PROYECTO PATIPS</span><h2>La seguridad, en cada paso.</h2></div>
        <Button asChild variant="outline"><a href={document.url} download="Politica_de_Seguridad_PATIPS.docx"><Download /> Descargar política en Word</a></Button>
      </div>
      <p className="proposal-note">Política propuesta · Pendiente de aprobación e implementación antes del lanzamiento comercial. No acredita cumplimiento legal ni certificaciones de seguridad.</p>
      <div className="three-grid mb-10">
        {[{ Icon: ShieldCheck, title: 'Personas protegidas', text: 'Prevención de riesgos para los niños, sus familias y quienes colaboren con PATIPS.' }, { Icon: PackageCheck, title: 'Kits con controles', text: 'Revisión de materiales, advertencias, edad recomendada y supervisión adulta.' }, { Icon: LockKeyhole, title: 'Información cuidada', text: 'Recolección mínima de datos, accesos limitados y procedimientos ante incidentes.' }].map(({ Icon, title, text }) => <div key={title}><Icon className="text-primary" /><h3>{title}</h3><p>{text}</p></div>)}
      </div>
      <div className="policy-introduction">{policy.intro.map(block => <p key={block.text}>{block.text}</p>)}</div>
      <Accordion type="multiple" defaultValue={['policy-0']} className="policy-sections">
        {policy.sections.map((section, index) => <AccordionItem key={section.title} value={`policy-${index}`}>
          <AccordionTrigger className="gap-5 py-6 text-base"><span className="flex items-center gap-4"><span className="text-primary">{String(index + 1).padStart(2, '0')}</span>{section.title}</span></AccordionTrigger>
          <AccordionContent className="policy-body">
            {section.blocks.map((block, i) => block.kind === 'heading' ? <h4 key={i}>{block.text}</h4> : block.kind === 'bullet' ? <ul key={i}><li>{block.text}</li></ul> : <p key={i}>{block.text}</p>)}
          </AccordionContent>
        </AccordionItem>)}
      </Accordion>
      <div className="info-band"><ShieldCheck /><div><strong>Sobre esta demostración</strong><p>El formulario de contacto prepara una consulta local descargable; no la envía a PATIPS. Esta política de seguridad no sustituye una política de privacidad ni los términos de contratación, todavía pendientes de elaboración y revisión.</p></div></div>
    </section>
  </Site>;
}