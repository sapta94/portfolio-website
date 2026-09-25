import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, BriefcaseBusiness, CheckCircle2, ChevronUp,
  Cloud, Code2, Database, Github, Linkedin, Mail, MapPin, Menu, X,
  Cpu, ExternalLink, Sparkles, Terminal, Zap
} from 'lucide-react';
import './styles.css';

const experiences = [
  { years: '2026 — Now', role: 'Technical Lead', company: 'Cozeva — Applied Research Works', text: 'Leading backend architecture for an incentive payment platform processing millions of records across high-volume financial workflows.', current: true },
  { years: '2023 — 2025', role: 'Senior Software Development Engineer', company: 'Cozeva — Applied Research Works', text: 'Delivered scalable computation engines using Python, MySQL and AWS for multiple incentive programs.' },
  { years: '2022 — 2023', role: 'Software Development Engineer 3', company: 'Cozeva — Applied Research Works', text: 'Automated ETL pipelines into Amazon Redshift and built computation models for healthcare payment systems.' },
  { years: '2021 — 2022', role: 'Software Development Engineer 2', company: 'Cozeva — Applied Research Works', text: 'Built analytics pipelines and optimized complex SQL across large production datasets.' },
  { years: '2019 — 2021', role: 'Software Engineer', company: 'Impact Analytics', text: 'Designed FastAPI, Node.js and PostgreSQL platforms and owned AWS, Docker and CI/CD delivery.' },
  { years: '2017 — 2018', role: 'Full Stack Developer', company: 'Kisan Network', text: 'Joined an early-stage Y Combinator-backed startup and built core backend services for supply-chain workflows.' }
];

const stack = [
  ['Python', 'Backend'], ['FastAPI', 'API'], ['Node.js', 'Backend'], ['AWS', 'Cloud'],
  ['MySQL', 'Data'], ['PostgreSQL', 'Data'], ['Redis', 'Data'], ['Docker', 'Infra'],
  ['Kafka', 'Events'], ['Airflow', 'Pipelines']
];

const projects = [
  { title: 'SmartPay', kicker: 'FEATURED PROJECT', desc: 'A multi-processor payment orchestration platform with card tokenization, merchant onboarding, smart routing, processor health and automatic failover.', tags: ['FastAPI', 'Python', 'MySQL', 'SQLAlchemy', 'JWT', 'HTTPX'], github: 'https://github.com/sapta94/payment-workflow' },
  { title: 'Incentive Payment Processing Platform', kicker: 'PRODUCTION SYSTEM', desc: 'An event-driven distributed platform processing millions of records for incentive computation and payment workflows, using S3, SQS and chunk-based processing.', tags: ['AWS S3', 'SQS', 'MySQL', 'ETL'], github: '#' }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 20); setTop(window.scrollY > 600); };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };

  return <div className="app">
    <div className="noise" />
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <button className="brand" onClick={() => go('home')}>Saptarshi<span>Dey</span><b>_</b></button>
      <nav className={menu ? 'nav open' : 'nav'}>
        {['home','about','experience','projects','contact'].map(x => <button key={x} onClick={() => go(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}
        <a className="nav-cta" href="mailto:saptarshidey.info@gmail.com">Let’s Connect <ArrowRight size={15}/></a>
      </nav>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero section-pad">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="pulse"/> BACKEND SYSTEMS • PAYMENTS • DISTRIBUTED PLATFORMS</div>
          <h1>From complex<br/>problems to <em>real impact.</em></h1>
          <p className="hero-lede">I build production backend systems that turn messy business workflows into reliable, scalable software.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => go('projects')}>Explore my work <ArrowDownRight size={18}/></button>
            <a className="secondary" href="mailto:saptarshidey.info@gmail.com">Start a conversation <Mail size={17}/></a>
          </div>
          <div className="hero-meta"><span><MapPin size={15}/> Kolkata, India</span><span><Sparkles size={15}/> Open to relocation</span></div>
        </div>
        <div className="hero-art">
          <div className="orb orb-one"/><div className="orb orb-two"/>
          <div className="grid-glow"/>
          <div className="terminal-card">
            <div className="terminal-top"><span/><span/><span/><small>production.log</small></div>
            <div className="terminal-body">
              <p><i>$</i> architect --system payment-orchestrator</p>
              <p className="muted">routing_engine: <strong>online</strong></p>
              <p className="muted">processors: <strong>4 healthy</strong></p>
              <p className="muted">uptime: <strong>99.9%</strong></p>
              <p><i>$</i> deploy --safe</p>
              <p className="success">✓ deployment complete</p>
            </div>
          </div>
          <div className="quote">“Build things.<br/><b>See places.</b><br/>Keep learning.”</div>
          <div className="floating-chip"><Zap size={15}/> 5× throughput</div>
        </div>
      </section>

      <section className="metrics section-pad">
        <Metric value="8+" label="Years engineering"/><Metric value="99.9%" label="System uptime"/><Metric value="5×" label="Transaction scale"/><Metric value="20%" label="Less manual work"/>
      </section>

      <section className="stack-strip">
        <div className="section-pad stack-inner"><span className="stack-label">TECH I WORK WITH</span>{stack.map(([name, cat]) => <div className="stack-item" key={name}><span>{name}</span><small>{cat}</small></div>)}</div>
      </section>

      <section id="about" className="about section-pad">
        <div className="about-card profile-card">
          <div className="portrait"><div className="portrait-ring"/><div className="initials">SD</div><span>BACKEND<br/>ENGINEER</span></div>
          <div className="caption"><span>Currently</span><strong>Building payment systems</strong><small>and learning what’s next.</small></div>
        </div>
        <div className="about-copy">
          <div className="eyebrow">ABOUT ME</div>
          <h2>Hi, I’m Saptarshi. <span>👋</span></h2>
          <p>I’m a Senior Backend Engineer and Technical Lead with 8+ years of experience building scalable backend systems, distributed platforms, REST APIs and workflow automation.</p>
          <p>My sweet spot is where <b>business complexity meets engineering depth</b> — payment workflows, computation engines, data pipelines, reliability and system design.</p>
          <div className="traits"><Trait icon={<Code2/>} title="Builder" text="Backend-first mindset"/><Trait icon={<Cpu/>} title="Systems" text="Scale & reliability"/><Trait icon={<Sparkles/>} title="Curious" text="Always learning"/><Trait icon={<MapPin/>} title="Global" text="Open to relocation"/></div>
        </div>
      </section>

      <section id="experience" className="experience section-pad">
        <div className="section-heading"><div><div className="eyebrow">MY JOURNEY</div><h2>A career built around<br/><em>ownership & scale.</em></h2></div><p>From an early-stage startup in Gurgaon to leading payment architecture at Cozeva — each chapter added a new layer of engineering depth.</p></div>
        <div className="timeline">{experiences.map((e, i) => <div className={'timeline-row '+(e.current ? 'current':'')} key={e.years+e.role}><div className="time">{e.years}</div><div className="dot"><span/></div><div className="role"><div className="role-head"><h3>{e.role}</h3>{e.current && <span className="live">CURRENT</span>}</div><strong>{e.company}</strong><p>{e.text}</p></div></div>)}</div>
      </section>

      <section id="projects" className="projects section-pad">
        <div className="section-heading"><div><div className="eyebrow">SELECTED WORK</div><h2>Things I’ve built<br/>that <em>actually matter.</em></h2></div><p>Real systems, measurable outcomes, and one side project designed to explore the architecture behind modern payments.</p></div>
        <div className="project-grid">{projects.map((p, i) => <article className={'project '+(i===0?'featured':'')} key={p.title}>
          <div className="project-top"><span>{p.kicker}</span><span className="project-number">0{i+1}</span></div>
          <div className="project-visual">{i===0 ? <PaymentMockup/> : <PipelineMockup/>}</div>
          <div className="project-content"><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>{p.github !== '#' && <a href={p.github} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={15}/></a>}</div>
        </article>)}</div>
      </section>

      <section className="principles section-pad">
        <div className="eyebrow">HOW I THINK</div><h2>Good engineering is not<br/><em>just about code.</em></h2>
        <div className="principle-grid"><Principle n="01" t="Make complexity invisible" d="Translate complicated business rules into systems that are understandable, testable and dependable."/><Principle n="02" t="Design for failure" d="Timeouts, retries, idempotency, observability and fallbacks are part of the design — not afterthoughts."/><Principle n="03" t="Own the outcome" d="From database schema to production incident, I care about the complete lifecycle of the system."/></div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-glow"/><div className="eyebrow">HAVE AN INTERESTING PROBLEM?</div><h2>Let’s build something<br/><em>worth talking about.</em></h2><p>Open to senior backend, technical leadership and fintech opportunities across Europe.</p><div className="hero-actions"><a className="primary" href="mailto:saptarshidey.info@gmail.com">Let’s Connect <ArrowRight size={18}/></a><a className="secondary" href="https://github.com/sapta94" target="_blank" rel="noreferrer">GitHub <Github size={17}/></a></div>
      </section>
    </main>

    <footer><div><button className="brand" onClick={() => go('home')}>Saptarshi<span>Dey</span><b>_</b></button><p>Backend Engineer · Technical Lead · Builder</p></div><div className="footer-links"><a href="https://www.linkedin.com/in/saptarshi-dey" target="_blank" rel="noreferrer"><Linkedin/></a><a href="https://github.com/sapta94" target="_blank" rel="noreferrer"><Github/></a><a href="mailto:saptarshidey.info@gmail.com"><Mail/></a></div></footer>
    {top && <button className="back-top" onClick={() => go('home')}><ChevronUp/></button>}
  </div>
}

function Metric({value,label}) { return <div className="metric"><strong>{value}</strong><span>{label}</span></div> }
function Trait({icon,title,text}) { return <div className="trait"><span>{icon}</span><div><b>{title}</b><small>{text}</small></div></div> }
function Principle({n,t,d}) { return <div className="principle"><span>{n}</span><h3>{t}</h3><p>{d}</p></div> }
function PaymentMockup() { return <div className="dashboard"><div className="dash-nav"><b>SmartPay</b><span>Dashboard</span><span>Payments</span><span>Processors</span><span>Routing</span></div><div className="dash-main"><small>PAYMENT ORCHESTRATOR</small><h4>Processor health</h4><div className="bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="dash-stats"><span><b>98.7%</b> success</span><span><b>320ms</b> latency</span><span><b>4</b> processors</span></div></div></div> }
function PipelineMockup() { return <div className="pipeline"><div className="node">S3</div><div className="line"/><div className="node">SQS</div><div className="line"/><div className="node">ETL</div><div className="line"/><div className="node">MySQL</div><div className="flow-label">MILLIONS OF RECORDS →</div></div> }

createRoot(document.getElementById('root')).render(<App/>);
