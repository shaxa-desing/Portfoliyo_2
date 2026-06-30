import React, { useState } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Github, Mail, Phone, MapPin, Code, Briefcase, BookOpen, Award } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = {
    home: 'Bosh Sahifa',
    about: 'Men Haqimda',
    skills: 'Ko\'nikmalar',
    projects: 'Loyihalar',
    experience: 'Tajriba',
    education: 'Ta\'lim',
    blog: 'Blog',
    contact: 'Aloqasi'
  };

  const styles = {
    container: {
      backgroundColor: '#000000',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    nav: {
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #dc2626',
      padding: '1rem 1.5rem'
    },
    navContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff'
    },
    logoRed: {
      color: '#dc2626'
    },
    navMenu: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center'
    },
    navButton: (isActive) => ({
      background: 'none',
      border: 'none',
      color: isActive ? '#dc2626' : '#d1d5db',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      borderBottom: isActive ? '2px solid #dc2626' : 'none',
      paddingBottom: '0.25rem',
      transition: 'color 0.3s'
    }),
    section: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '5rem 1.5rem',
      backgroundColor: '#000000'
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    redLine: {
      height: '0.25rem',
      width: '5rem',
      backgroundColor: '#dc2626',
      marginBottom: '3rem'
    },
    text: {
      color: '#9ca3af',
      fontSize: '1rem',
      lineHeight: '1.5'
    },
    button: (isPrimary) => ({
      padding: '0.75rem 2rem',
      borderRadius: '0.375rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      backgroundColor: isPrimary ? '#dc2626' : 'transparent',
      color: isPrimary ? '#ffffff' : '#dc2626',
      borderWidth: isPrimary ? '0' : '2px',
      borderColor: '#dc2626',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }),
    card: {
      backgroundColor: '#1a1a1a',
      border: '1px solid rgba(220, 38, 38, 0.2)',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      transition: 'all 0.3s'
    },
    heroSection: {
      marginTop: '6rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem',
      alignItems: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderTop: '1px solid rgba(220, 38, 38, 0.3)',
      borderBottom: '1px solid rgba(220, 38, 38, 0.3)'
    },
    stat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: '#dc2626',
      marginBottom: '0.5rem'
    },
    statLabel: {
      color: '#9ca3af'
    },
    mobileMenu: {
      display: mobileMenuOpen ? 'block' : 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.98)',
      borderTop: '1px solid #dc2626',
      padding: '1rem 1.5rem'
    },
    menuButton: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      fontSize: '1.5rem'
    },
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    footer: {
      backgroundColor: '#000000',
      borderTop: '1px solid rgba(220, 38, 38, 0.3)',
      padding: '3rem 1.5rem',
      marginTop: '5rem'
    }
  };

  const Navigation = () => (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <div style={styles.logo}>
          [<span style={styles.logoRed}>PORTFOLIO</span>]
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {Object.entries(pages).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCurrentPage(key)}
              style={styles.navButton(currentPage === key)}
              onMouseEnter={(e) => e.target.style.color = currentPage === key ? '#dc2626' : '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = currentPage === key ? '#dc2626' : '#d1d5db'}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          style={styles.menuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div style={styles.mobileMenu}>
        {Object.entries(pages).map(([key, label]) => (
          <button
            key={key}
            onClick={() => {
              setCurrentPage(key);
              setMobileMenuOpen(false);
            }}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '0.5rem 0',
              background: 'none',
              border: 'none',
              color: currentPage === key ? '#dc2626' : '#d1d5db',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '6rem' }}>
      <section style={styles.heroSection}>
        <div>
          <div style={{ color: '#dc2626', fontSize: '1.125rem', fontFamily: 'monospace', marginBottom: '1rem' }}>$ whoami</div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Shoxruxbek Duschanov
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#9ca3af', marginBottom: '2rem' }}>
            Frontend Developer & AI Enthusiast
          </p>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '500px' }}>
            Salom! Men Shoxruxbek va men IT developer man. Dasturlashni o'rganyabman va Frontend va AI bilaman. Katta loyihalarni qilishni va yangi texnologiyalarni o'rganishni juda yoqtiradim.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setCurrentPage('projects')}
              style={{...styles.button(true), backgroundColor: '#dc2626'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
            >
              Loyihalarni Ko'rish <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              style={{...styles.button(false)}}
              onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'; e.target.style.color = '#ffffff'}}
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#dc2626'}}
            >
              Murojaat Qilish
            </button>
          </div>
        </div>

        <div style={{ display: 'none' }}>
          <div style={{ background: 'linear-gradient(to bottom right, #dc2626, #7f1d1d)', borderRadius: '0.5rem', padding: '0.25rem' }}>
            <div style={{ backgroundColor: '#000000', borderRadius: '0.5rem', padding: '2rem', fontFamily: 'monospace', color: '#4ade80', fontSize: '0.875rem', height: '400px', overflowY: 'hidden' }}>
              <div>$ portfolio --init</div>
              <div style={{ marginTop: '1rem' }}>
                ✓ Frontend Development<br/>
                ✓ HTML, CSS, JavaScript<br/>
                ✓ Bootstrap & Responsive<br/>
                ✓ AI Integration<br/>
                ✓ Problem Solving
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.statsGrid}>
        <div style={styles.stat}>
          <div style={styles.statNumber}>2+</div>
          <div style={styles.statLabel}>Yillik Tajriba</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>10+</div>
          <div style={styles.statLabel}>Yakunlangan Loyiha</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>10+</div>
          <div style={styles.statLabel}>Xursand Mijozlar</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statNumber}>24/7</div>
          <div style={styles.statLabel}>Support</div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Men Haqimda</h1>
        <div style={styles.redLine}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#9ca3af', fontSize: '1.125rem' }}>
              <p>
                <span style={{ color: '#dc2626', fontWeight: 'bold' }}>Shoxruxbek Duschanov</span> - Frontend Developer va AI enthusiast
              </p>
              <p>
                Men Frontend va AI o'rganyabman va qolimdan kelgancha professional loyihalar qila olaman. HTML, CSS, Bootstrap va JavaScript bilaman va yana React ni o'rganmoqchiman.
              </p>
              <p>
                AI ishlatishda har xil promptlar yozaman va katta loyihalarda qatnashishni yoqtiradim. Har bir narsani o'rganishga tayyorman va yangi texnologiyalarni tezda qabul qila olaman.
              </p>
            </div>
          </div>

          <div style={{ ...styles.card, backgroundColor: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(127, 29, 29, 0.1))', position: 'sticky', top: '100px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '8rem', height: '8rem', margin: '0 auto 1.5rem', backgroundColor: 'linear-gradient(135deg, #dc2626, #7f1d1d)', borderRadius: '50%' }}></div>
              <h3 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '1rem' }}>Shoxruxbek</h3>
              <p style={{ color: '#dc2626', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Frontend Developer</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '0.5rem', color: '#9ca3af' }}>
                  <MapPin size={16} style={{ color: '#dc2626' }} />
                  Xonqa, Xorazm
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', color: '#9ca3af' }}>
                  <Mail size={16} style={{ color: '#dc2626' }} />
                  shahruhduschanov@gmail.com
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', color: '#9ca3af' }}>
                  <Phone size={16} style={{ color: '#dc2626' }} />
                  +998 99 913 89 99
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Ko'nikmalar</h1>
        <div style={styles.redLine}></div>

        <div style={styles.gridLayout}>
          {['Frontend', 'AI & Tools', 'Other'].map((category) => (
            <div key={category} style={{ ...styles.card, border: '2px solid #dc2626', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}>
              <h3 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code size={24} style={{ color: '#dc2626' }} /> {category}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                {category === 'Frontend' && (
                  <>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      HTML5
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      CSS3
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      JavaScript
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Bootstrap
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Responsive Design
                    </li>
                  </>
                )}
                {category === 'AI & Tools' && (
                  <>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      AI Prompting
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Image Generation
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Git & GitHub
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      VS Code
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Automation
                    </li>
                  </>
                )}
                {category === 'Other' && (
                  <>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Problem Solving
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Communication
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Quick Learner
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Team Work
                    </li>
                    <li style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#dc2626', borderRadius: '50%' }}></span>
                      Uzbek, English
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Loyihalar</h1>
        <div style={styles.redLine}></div>

        <div style={styles.gridLayout}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ ...styles.card, border: '2px solid rgba(220, 38, 38, 0.3)', cursor: 'pointer', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#dc2626'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)'}>
              <div style={{ height: '200px', background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(127, 29, 29, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <Briefcase size={48} style={{ color: '#dc2626', marginBottom: '0.5rem' }} />
                  <p style={{ color: '#6b7280', fontFamily: 'monospace' }}>Loyiha {i + 1}</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>Loyiha #{i + 1}</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>Bu yerda loyiha tavsifi yoziladi. Qanday texnologiya ishlatilgan.</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} style={{ backgroundColor: 'rgba(220, 38, 38, 0.2)', color: '#dc2626', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '0.25rem' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button style={{ flex: 1, backgroundColor: '#dc2626', color: '#ffffff', padding: '0.5rem', borderRadius: '0.375rem', border: 'none', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'background-color 0.3s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'} onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}>
                  <ExternalLink size={16} /> Ko'rish
                </button>
                <button style={{ flex: 1, border: '1px solid #dc2626', color: '#dc2626', backgroundColor: 'transparent', padding: '0.5rem', borderRadius: '0.375rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.3s' }} onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'; e.target.style.color = '#ffffff'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#dc2626'}}>
                  <Github size={16} /> Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Ishchi Tajriba</h1>
        <div style={styles.redLine}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { title: 'Startup - Chat Bot Loyihasi', company: 'Al-Xorazmiy Vorislarida', date: '2024 - 2025', desc: 'Men kichik startup loyihasida qatnashib, chat suhbatlashish uchun bot yaratdim.' },
            { title: 'Personal Projects', company: 'GitHub Portfolio', date: '2024 - Hozir', desc: 'Har xil personal loyihalarni GitHub\'da hosil qilaman.' }
          ].map((exp, i) => (
            <div key={i} style={{ borderLeft: '4px solid #dc2626', paddingLeft: '1.5rem', paddingBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>{exp.title}</h3>
                  <p style={{ color: '#dc2626', fontWeight: 'bold' }}>{exp.company}</p>
                </div>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{exp.date}</span>
              </div>
              <p style={{ color: '#9ca3af', marginTop: '1rem', marginBottom: '1rem' }}>{exp.desc}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9ca3af', fontSize: '0.875rem' }}>
                <li>✓ Frontend sayt yaratish (HTML, CSS, JS)</li>
                <li>✓ Telegram Bot integratsiyasi</li>
                <li>✓ File upload va processing</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EducationPage = () => (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Ta'lim</h1>
        <div style={styles.redLine}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
          {[
            { title: 'Al-Xorazmiy Vorislarida', subtitle: 'Frontend Development', date: '2024 - 2028' },
            { title: 'Online Courses', subtitle: 'Web Development & AI', date: '2023 - Hozir' },
            { title: 'Self-Learning', subtitle: 'Practice & Projects', date: '2024 - Hozir' }
          ].map((edu, i) => (
            <div key={i} style={{ background: 'linear-gradient(to right, rgba(220, 38, 38, 0.1), transparent)', borderLeft: '4px solid #dc2626', borderRadius: '0 0.5rem 0.5rem 0', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <BookOpen size={24} style={{ color: '#dc2626' }} /> {edu.title}
                  </h3>
                  <p style={{ color: '#dc2626', fontWeight: 'bold', marginTop: '0.5rem' }}>{edu.subtitle}</p>
                </div>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{edu.date}</span>
              </div>
              <p style={{ color: '#9ca3af', marginTop: '1rem' }}>Professional ta'lim va bilim to'plash.</p>
            </div>
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={24} style={{ color: '#dc2626' }} /> Sertifikatlar
          </h2>
          <div style={styles.gridLayout}>
            {['Frontend Basics', 'HTML & CSS', 'JavaScript Basics', 'AI Prompting'].map((cert) => (
              <div key={cert} style={{ ...styles.card, border: '1px solid rgba(220, 38, 38, 0.3)', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#dc2626'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)'}>
                <p style={{ color: '#ffffff', fontWeight: 'bold' }}>{cert}</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>Online Platform</p>
                <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.5rem' }}>2024-2025</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Blog</h1>
        <div style={styles.redLine}></div>

        <div style={styles.gridLayout}>
          {[
            { title: 'Jamoa Kerak!', category: 'TADBIR', desc: 'Men bilan qo\'shilmoqchi bo\'lgan yaxshi dasturchilar kerak.' },
            { title: 'Portfolio Yaratdim!', category: 'XABAR', desc: 'Yangi portfolio saytimni launch qildim.' },
            { title: 'Frontend Boshlang\'ich', category: 'TUTORIAL', desc: 'HTML, CSS va JavaScript\'ni boshlang\'ichlar uchun.' },
            { title: 'AI Prompting Tips', category: 'TIPS', desc: 'AI\'dan kerakli narsalarni qanday so\'rash kerak.' },
            { title: 'Bootstrap O\'rnatish', category: 'AMALIYOT', desc: 'Bootstrap framework\'ini qanday o\'rnatish va ishlataish.' },
            { title: 'React Darslar', category: 'HAYVON', desc: 'React\'ni o\'rganishni rejalashtirmoqchiman.' }
          ].map((blog, i) => (
            <div key={i} style={{ ...styles.card, border: '1px solid rgba(220, 38, 38, 0.3)', cursor: 'pointer', overflow: 'hidden', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#dc2626'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)'}>
              <div style={{ height: '160px', background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(127, 29, 29, 0.2))' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ color: '#dc2626', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{blog.category}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.75rem' }}>{blog.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>{blog.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
                  <span>2026/06/29</span>
                  <span style={{ color: '#dc2626' }}>Keladi!</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Aloqasi</h1>
        <div style={styles.redLine}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginBottom: '2rem' }}>Men bilan bog'lanmoqchi bo'lsanggiz, pastgi qismda mening kontakt ma'lumotlari bor.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: Mail, label: 'Email', value: 'shahruhduschanov@gmail.com', href: 'mailto:shahruhduschanov@gmail.com' },
                { icon: Phone, label: 'Telefon', value: '+998 99 913 89 99', href: 'tel:+998999138999' },
                { icon: MapPin, label: 'Manzil', value: 'Xonqa, Xorazm viloyati' },
                { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: 'https://github.com/shaxa-desing' }
              ].map((contact) => (
                <div key={contact.label} style={{ display: 'flex', gap: '1rem' }}>
                  <contact.icon style={{ color: '#dc2626', flexShrink: 0 }} size={24} />
                  <div>
                    <p style={{ color: '#ffffff', fontWeight: 'bold' }}>{contact.label}</p>
                    {contact.href ? (
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>
                        {contact.value}
                      </a>
                    ) : (
                      <p style={{ color: '#9ca3af' }}>{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...styles.card, border: '2px solid #dc2626' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '1.5rem' }}>Xabar Yuborish</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Ismingiz"
                style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.375rem', fontSize: '1rem', outline: 'none' }}
                onFocus={(e) => e.target.style.borderColor = '#dc2626'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(220, 38, 38, 0.3)'}
              />
              <input
                type="email"
                placeholder="Email"
                style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.375rem', fontSize: '1rem', outline: 'none' }}
                onFocus={(e) => e.target.style.borderColor = '#dc2626'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(220, 38, 38, 0.3)'}
              />
              <input
                type="text"
                placeholder="Mavzu"
                style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.375rem', fontSize: '1rem', outline: 'none' }}
                onFocus={(e) => e.target.style.borderColor = '#dc2626'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(220, 38, 38, 0.3)'}
              />
              <textarea
                placeholder="Xabaringiz..."
                rows="5"
                style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.375rem', fontSize: '1rem', outline: 'none', resize: 'none', fontFamily: 'inherit' }}
                onFocus={(e) => e.target.style.borderColor = '#dc2626'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(220, 38, 38, 0.3)'}
              />
              <button
                type="submit"
                style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.375rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer style={styles.footer}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '1rem' }}>Sahifalar</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
              {Object.entries(pages).slice(0, 4).map(([key, label]) => (
                <li key={key}>
                  <button onClick={() => setCurrentPage(key)} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '0.875rem' }} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#6b7280'}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '1rem' }}>Loyihalar</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
              <li><button onClick={() => setCurrentPage('projects')} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '0.875rem' }} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#6b7280'}>Barcha Loyihalar</button></li>
              <li><button onClick={() => setCurrentPage('projects')} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '0.875rem' }} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#6b7280'}>Frontend</button></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '1rem' }}>Bog'lanish</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
              <li><a href="mailto:shahruhduschanov@gmail.com" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.875rem', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#6b7280'}>Email</a></li>
              <li><a href="tel:+998999138999" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.875rem', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#6b7280'}>Telefon</a></li>
              <li><a href="https://github.com/shaxa-desing" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.875rem', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#6b7280'}>GitHub</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(220, 38, 38, 0.3)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            © 2024-2025 Shoxruxbek Duschanov. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'skills': return <SkillsPage />;
      case 'projects': return <ProjectsPage />;
      case 'experience': return <ExperiencePage />;
      case 'education': return <EducationPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={styles.container}>
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Portfolio;
