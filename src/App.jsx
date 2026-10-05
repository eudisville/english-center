import { useState } from "react";
import "./App.css";
import Logo from "./assets/BEC Type.png"
import LogoFooter from "./assets/BEC Footer.png"

/* Remplacez par vos photos (ex. "/images/hero.jpg"). Vide = fond dégradé. */
const HERO_IMG = "";

const NAV = [
  ["Formations", "#formations"],
  ["Formats", "#formats"],
  ["Entreprises", "#entreprises"],
  ["À propos", "#apropos"],
  ["Contact", "#contact"],
];

const FORMATS = [
  { tag: "En ligne", text: "Apprenez où que vous soyez grâce à des sessions interactives avec nos formateurs.", ideal: "Étudiants, professionnels, emplois du temps flexibles.", cta: "Découvrir" },
  { tag: "En présentiel", text: "Des formations dans un cadre propice à l’apprentissage, aux échanges et à la pratique.", ideal: "Groupes, étudiants, professionnels et entreprises.", cta: "Découvrir", featured: true },
  { tag: "Tutorat à domicile", text: "Un accompagnement individuel chez vous, adapté à votre niveau, vos objectifs et votre rythme.", ideal: "Enfants, étudiants, particuliers et professionnels.", cta: "Demander un tutorat" },
];

const COURSES = [
  ["English Essentials", "Anglais général, bases, vocabulaire"],
  ["Business English", "Anglais professionnel, réunions, emails"],
  ["Speaking", "Conversation, prise de parole, prononciation"],
  ["Career English", "Entretiens, CV, présentations"],
  ["Academic English", "Anglais universitaire, études à l’étranger"],
  ["Certification", "Préparation aux examens et certifications"],
];

const AUDIENCES = [
  ["Étudiants", "Développer leur anglais pour les études et les opportunités internationales."],
  ["Professionnels", "Communiquer avec plus d’aisance dans un environnement professionnel."],
  ["Entrepreneurs", "Être à l’aise avec des clients, partenaires et opportunités internationales."],
  ["Entreprises", "Développer les compétences linguistiques de leurs équipes."],
];

const STEPS = [
  ["Évaluer", "Identifier votre niveau et vos objectifs."],
  ["Pratiquer", "Apprendre à travers des situations concrètes."],
  ["Interagir", "Développer votre aisance à l’oral."],
  ["Progresser", "Mesurer vos progrès et ajuster votre parcours."],
];

const TESTIMONIALS = [
  ["Awa", "Étudiante, objectif : études à l’étranger", "J’ai gagné en confiance à l’oral en quelques semaines. Les séances sont concrètes et adaptées à mon niveau."],
  ["Kouadio", "Responsable commercial, objectif : réunions", "Je mène maintenant mes appels avec nos partenaires sans stress. La formation colle à mon quotidien."],
  ["Mariam", "Entrepreneure, objectif : clients internationaux", "Le tutorat à domicile s’adapte à mon emploi du temps. Je progresse à mon rythme."],
];

const FAQ = [
  ["Quel niveau faut-il avoir pour commencer ?", "Aucun niveau minimum : nous accueillons les débutants comme les niveaux avancés."],
  ["Comment connaître mon niveau ?", "Passez notre test rapide en ligne. Il identifie votre niveau et la formation la plus adaptée."],
  ["Combien coûte une formation ?", "Le tarif dépend du format, de la durée et de vos objectifs. Contactez-nous pour un devis."],
  ["Quelle est la durée d’une formation ?", "Elle varie selon votre objectif et votre niveau de départ. Nous la définissons ensemble."],
  ["Les formations sont-elles individuelles ou en groupe ?", "Les deux : groupes en ligne ou en présentiel, et cours individuels avec le tutorat."],
  ["Où se déroulent les formations en présentiel ?", "Dans nos locaux. Contactez-nous pour connaître l’adresse et les horaires."],
  ["Comment fonctionne le tutorat à domicile ?", "Un formateur se déplace chez vous, selon un programme adapté à votre niveau et vos objectifs."],
  ["Proposez-vous des formations pour les entreprises ?", "Oui. Nous concevons des programmes sur mesure pour vos équipes."],
];

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

function Button({ href, variant = "lime", children }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {children}
      <Arrow />
    </a>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q}
        <span className="faq-icon" aria-hidden="true">+</span>
      </button>
      {open && <p className="faq-a">{a}</p>}
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="logo" href="#top">
          <img src={Logo} alt="Beriverse English Center" />
        </a>
        <nav className="nav-links" aria-label="Navigation principale">
          {NAV.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-lime btn-sm" href="#contact">Contacter</a>
      </header>

      <main id="top">
        {/* 1. Hero */}
        <section className="hero" style={HERO_IMG ? { backgroundImage: `url(${HERO_IMG})` } : undefined}>
          <div className="hero-body">
            <h1>Formez-vous en anglais. Ouvrez-vous au monde.</h1>
            <p>
              Des formations en anglais adaptées à votre niveau, vos objectifs et votre rythme,
              en ligne, en présentiel ou à domicile.
            </p>
            <div className="hero-cta">
              <Button href="#niveau">Évaluer mon niveau</Button>
              <Button href="#formations" variant="light">Découvrir les formations</Button>
            </div>
          </div>
          <div className="hero-pills">
            <span className="pill-tab active">En ligne</span>
            <span className="pill-tab">En présentiel</span>
            <span className="pill-tab">À domicile</span>
          </div>
        </section>

        {/* 2. À propos */}
        <section className="section" id="apropos">
          <div className="about">
            <article className="card">
              <span className="chip">À propos</span>
              <h2>Apprendre l’anglais autrement</h2>
              <p>
                Beriverse English Center vous accompagne avec une approche centrée sur la pratique
                de la langue, la confiance à l’oral et le contexte professionnel, avec une
                progression adaptée à votre niveau.
              </p>
            </article>
            <article className="card card-lime">
              <span className="chip">Notre promesse</span>
              <h3>Un accompagnement personnalisé, du premier test à vos résultats.</h3>
              <div className="ph" />
            </article>
            <article className="card">
              <span className="chip">Ce qui compte</span>
              <ul className="ticks">
                <li>Pratique de la langue</li>
                <li>Confiance à l’oral</li>
                <li>Contexte professionnel</li>
                <li>Progression adaptée</li>
              </ul>
            </article>
          </div>
        </section>

        {/* 3. Formats */}
        <section className="section section-soft" id="formats">
          <div className="head">
            <span className="chip">Formats</span>
            <h2>Choisissez le format qui vous correspond</h2>
          </div>
          <div className="grid-3">
            {FORMATS.map((f) => (
              <article key={f.tag} className={`card format ${f.featured ? "card-lime" : "card-white"}`}>
                <span className="chip">{f.tag}</span>
                <p>{f.text}</p>
                <p className="ideal"><strong>Idéal pour :</strong> {f.ideal}</p>
                <Button href="#contact" variant={f.featured ? "dark" : "lime"}>{f.cta}</Button>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Formations */}
        <section className="section" id="formations">
          <div className="head">
            <span className="chip">Formations</span>
            <h2>Des formations adaptées à vos objectifs</h2>
          </div>
          <div className="grid-3">
            {COURSES.map(([title, ex]) => (
              <article key={title} className="card course">
                <span className="course-icon" aria-hidden="true">✱</span>
                <h3>{title}</h3>
                <p>{ex}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Pour qui */}
        <section className="section section-soft">
          <div className="head">
            <span className="chip">Pour qui ?</span>
            <h2>Une formation pour chaque profil</h2>
          </div>
          <div className="grid-4">
            {AUDIENCES.map(([title, text]) => (
              <article key={title} className="card card-white audience">
                <div className="ph" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 6. Méthode */}
        <section className="section">
          <div className="head">
            <span className="chip">Notre méthode</span>
            <h2>Apprendre. Pratiquer. Progresser.</h2>
          </div>
          <ol className="steps">
            {STEPS.map(([title, text], i) => (
              <li key={title} className="step">
                <span className="step-n">{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 7. Test de niveau */}
        <section className="section" id="niveau">
          <div className="banner banner-lime">
            <h2>Quel est votre niveau d’anglais ?</h2>
            <p>Passez un test rapide pour identifier votre niveau et découvrir la formation la plus adaptée.</p>
            <Button href="#contact" variant="dark">Évaluer mon niveau</Button>
          </div>
        </section>

        {/* 8. Entreprises */}
        <section className="section" id="entreprises">
          <div className="banner banner-green">
            <span className="chip chip-dark">Corporate Learning</span>
            <h2>Développez l’anglais de vos équipes</h2>
            <p>
              Des programmes de formation conçus pour accompagner les entreprises dans le
              développement des compétences linguistiques de leurs collaborateurs.
            </p>
            <Button href="#contact">Former mon équipe</Button>
          </div>
        </section>

        {/* 9. Témoignages */}
        <section className="section section-soft">
          <div className="head">
            <span className="chip">Témoignages</span>
            <h2>Ils progressent avec nous</h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map(([name, profile, quote]) => (
              <figure key={name} className="card card-white quote">
                <blockquote>“{quote}”</blockquote>
                <figcaption>
                  <strong>{name}</strong>
                  <span>{profile}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="section" id="faq">
          <div className="head">
            <span className="chip">FAQ</span>
            <h2>Vos questions, nos réponses</h2>
          </div>
          <div className="faq">
            {FAQ.map(([q, a]) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </section>

        {/* 11. CTA final */}
        <section className="section" id="contact">
          <div className="banner banner-lime">
            <h2>Prêt à améliorer votre anglais ?</h2>
            <p>Choisissez votre format, définissez votre objectif et commencez votre parcours.</p>
            <div className="hero-cta center">
              <Button href="#niveau" variant="dark">Évaluer mon niveau</Button>
              <Button href="mailto:contact@beriverse.com" variant="light">Nous contacter</Button>
            </div>
          </div>
        </section>
      </main>

      {/* 12. Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <a className="logo" href="#top">
              <img src={LogoFooter} alt="Beriverse English Center" />
            </a>
            <p>Formation en anglais pour particuliers, professionnels et entreprises.</p>
          </div>
          <nav aria-label="Pied de page">
            <a href="#top">Accueil</a>
            <a href="#formations">Formations</a>
            <a href="#formats">Formats</a>
            <a href="#entreprises">Entreprises</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="socials">
            <a href="https://wa.me/00000000000">WhatsApp</a>
            <a href="mailto:hello@beriverse.com">contact@beriverse.com</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Beriverse English Center</p>
      </footer>
    </>
  );
}
