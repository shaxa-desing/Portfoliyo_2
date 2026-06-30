import React, { useState } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Github, Mail, Phone, MapPin, Code, Briefcase, BookOpen, Award, Star } from 'lucide-react';

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
    contact: 'Aloqasi'
  };

  const Navigation = () => (
    <nav style={{
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 50,
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid #ef4444',
      padding: '1rem 1.5rem',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ffffff', letterSpacing: '0.1em' }}>
          <span style={{ color: '#ef4444' }}>◆</span> Portfolio
        </div>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {Object.entries(pages).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCurrentPage(key)}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === key ? '#ef4444' : '#cbd5e1',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: currentPage === key ? '600' : '500',
                paddingBottom: '0.5rem',
                borderBottom: currentPage === key ? '2px solid #ef4444' : 'none',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => !currentPage === key && (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => !currentPage === key && (e.target.style.color = '#cbd5e1')}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'none'
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      minHeight: '100vh',
      paddingTop: '6rem'
    }}>
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '5rem 1.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ fontSize: '0.9rem', color: '#ef4444', fontFamily: 'monospace', marginBottom: '1rem', fontWeight: 'bold' }}>$ whoami</div>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #ffffff, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Shoxruxbek Duschanov
          </h1>
          <div style={{
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #ef4444, #f87171)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Frontend Developer & AI Creator
          </div>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '2rem', maxWidth: '500px', lineHeight: '1.8' }}>
            Salom! Men Shoxruxbek va men IT developer man. HTML, CSS, JavaScript va AI bilaman. Katta loyihalarni qilishni va yangi texnologiyalarni o'rganishni juda yoqtiradim.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setCurrentPage('projects')}
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s',
                boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)'
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 15px 40px rgba(239, 68, 68, 0.5)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.3)'}
            >
              Loyihalar <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                border: '2px solid #ef4444',
                cursor: 'pointer',
                fontSize: '1rem',
                backgroundColor: 'transparent',
                color: '#ef4444',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ef4444';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ef4444';
              }}
            >
              Murojaat Qilish
            </button>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(30, 41, 59, 0.5))',
          borderRadius: '1rem',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          padding: '2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            borderRadius: '0.75rem',
            padding: '2rem',
            fontFamily: 'monospace',
            color: '#4ade80',
            fontSize: '0.9rem',
            lineHeight: '1.8',
            border: '1px solid rgba(74, 222, 128, 0.2)'
          }}>
            <div style={{ color: '#ef4444' }}>$ npm start</div>
            <div style={{ marginTop: '1rem', color: '#cbd5e1' }}>
              ✓ Frontend Skills<br/>
              ✓ Full Stack Ready<br/>
              ✓ AI Integration<br/>
              ✓ Problem Solving<br/>
              ✓ Quick Learner
            </div>
            <div style={{ marginTop: '1.5rem', color: '#ef4444' }}>Loading profile...</div>
          </div>
        </div>
      </section>

      <section style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), transparent)',
        borderTop: '2px solid rgba(239, 68, 68, 0.2)',
        borderBottom: '2px solid rgba(239, 68, 68, 0.2)',
        padding: '3rem 1.5rem'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {[
            { number: '2+', label: 'Yillik Tajriba' },
            { number: '10+', label: 'Yakunlangan Loyiha' },
            { number: '100%', label: 'Dedikasyon' },
            { number: '24/7', label: 'Support' }
          ].map((stat, i) => (
            <div key={i} style={{ padding: '1rem' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #ef4444, #f87171)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      minHeight: '100vh',
      paddingTop: '6rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '900',
          color: '#ffffff',
          marginBottom: '1rem'
        }}>Men Haqimda</h1>
        <div style={{
          height: '0.5rem',
          width: '6rem',
          background: 'linear-gradient(90deg, #ef4444, transparent)',
          marginBottom: '3rem',
          borderRadius: '0.25rem'
        }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          <div style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '1.2rem' }}>Shoxruxbek Duschanov</span> - Frontend Developer va AI Creator
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Men Frontend va AI o'rganyabman va professional loyihalar qila olaman. HTML, CSS, Bootstrap va JavaScript bilaman va React ni o'rganmoqchiman.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              AI ishlatishda har xil promptlar yozaman va katta loyihalarda qatnashishni yoqtiradim. Har bir narsani o'rganishga tayyorman va yangi texnologiyalarni tezda qabul qila olaman.
            </p>
            <p>
              Men sizga 24/7 javob bera olaman. Agar mengga savol yoki loyiha haqida fikr bildirmoqchi bo'lsanggiz, 1 kun ichida javob qaytaraman.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(30, 41, 59, 0.5))',
            borderRadius: '1rem',
            border: '2px solid #ef4444',
            padding: '2rem',
            textAlign: 'center',
            position: 'sticky',
            top: '100px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '8rem',
              height: '8rem',
              margin: '0 auto 1.5rem',
              background: 'linear-gradient(135deg, #ef4444, #7f1d1d)',
              borderRadius: '50%',
              border: '3px solid #ef4444'
            }}></div>
            <h3 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Shoxruxbek</h3>
            <p style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>FRONTEND DEVELOPER</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', color: '#cbd5e1', alignItems: 'center' }}>
                <MapPin size={18} style={{ color: '#ef4444' }} />
                <span>Xonqa, Xorazm</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', color: '#cbd5e1', alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#ef4444' }} />
                <span>shahruhduschanov@gmail.com</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', color: '#cbd5e1', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#ef4444' }} />
                <span>+998 99 913 89 99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      minHeight: '100vh',
      paddingTop: '6rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#ffffff', marginBottom: '1rem' }}>Ko'nikmalar</h1>
        <div style={{
          height: '0.5rem',
          width: '6rem',
          background: 'linear-gradient(90deg, #ef4444, transparent)',
          marginBottom: '3rem',
          borderRadius: '0.25rem'
        }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
          {['Frontend', 'AI & Tools', 'Other'].map((category) => (
            <div key={category} style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(30, 41, 59, 0.3))',
              border: '2px solid #ef4444',
              borderRadius: '1rem',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.15)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.05)'}>
              <h3 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Code size={24} style={{ color: '#ef4444' }} /> {category}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                {category === 'Frontend' && ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive'].map((skill) => (
                  <li key={skill} style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Star size={14} style={{ color: '#ef4444' }} fill="#ef4444" /> {skill}
                  </li>
                ))}
                {category === 'AI & Tools' && ['AI Prompting', 'Image Gen', 'Git', 'VS Code', 'Automation'].map((skill) => (
                  <li key={skill} style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Star size={14} style={{ color: '#ef4444' }} fill="#ef4444" /> {skill}
                  </li>
                ))}
                {category === 'Other' && ['Problem Solving', 'Communication', 'Quick Learner', 'Team Work', 'English'].map((skill) => (
                  <li key={skill} style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Star size={14} style={{ color: '#ef4444' }} fill="#ef4444" /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '2rem' }}>Proficiency Level</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { name: 'HTML & CSS', percent: 85 },
            { name: 'JavaScript', percent: 70 },
            { name: 'Bootstrap', percent: 80 },
            { name: 'React (Learning)', percent: 40 },
            { name: 'AI Prompting', percent: 75 },
            { name: 'Git & GitHub', percent: 75 }
          ].map((skill) => (
            <div key={skill.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: '#ffffff', fontWeight: '600' }}>{skill.name}</span>
                <span style={{ color: '#ef4444', fontWeight: 'bold' }}>{skill.percent}%</span>
              </div>
              <div style={{
                height: '0.5rem',
                background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.2), transparent)',
                borderRadius: '0.25rem',
                overflow: 'hidden',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                <div style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #ef4444, #f87171)',
                  width: `${skill.percent}%`,
                  transition: 'width 0.5s ease'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      minHeight: '100vh',
      paddingTop: '6rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#ffffff', marginBottom: '1rem' }}>Loyihalar</h1>
        <div style={{
          height: '0.5rem',
          width: '6rem',
          background: 'linear-gradient(90deg, #ef4444, transparent)',
          marginBottom: '3rem',
          borderRadius: '0.25rem'
        }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(30, 41, 59, 0.3))',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '1rem',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s',
              hover: { borderColor: '#ef4444' }
            }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ef4444'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)'}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(127, 29, 29, 0.15))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '2px solid rgba(239, 68, 68, 0.2)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Briefcase size={48} style={{ color: '#ef4444', marginBottom: '0.75rem' }} />
                  <p style={{ color: '#94a3b8', fontFamily: 'monospace', fontSize: '0.9rem' }}>Project {i + 1}</p>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.75rem' }}>Loyiha #{i + 1}</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '1rem' }}>Professional loyiha tavsifi yoziladi bu yerga.</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                    <span key={tech} style={{
                      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(30, 41, 59, 0.3))',
                      color: '#ef4444',
                      fontSize: '0.8rem',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '0.25rem',
                      border: '1px solid #ef4444'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    color: '#ffffff',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s'
                  }} onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 25px rgba(239, 68, 68, 0.4)'} onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>
                    <ExternalLink size={16} /> Ko'rish
                  </button>
                  <button style={{
                    flex: 1,
                    border: '2px solid #ef4444',
                    color: '#ef4444',
                    backgroundColor: 'transparent',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s'
                  }} onMouseEnter={(e) => {e.target.backgroundColor = '#ef4444'; e.target.color = '#ffffff'}} onMouseLeave={(e) => {e.target.backgroundColor = 'transparent'; e.target.color = '#ef4444'}}>
                    <Github size={16} /> Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      minHeight: '100vh',
      paddingTop: '6rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#ffffff', marginBottom: '1rem' }}>Aloqasi</h1>
        <div style={{
          height: '0.5rem',
          width: '6rem',
          background: 'linear-gradient(90deg, #ef4444, transparent)',
          marginBottom: '3rem',
          borderRadius: '0.25rem'
        }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Men bilan bog'lanmoqchi bo'lsanggiz, quyida mening kontakt ma'lumotlari bor. Siz mengga yozasiz va men sizga 1 kun ichida javob qaytaraman!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { icon: Mail, label: 'Email', value: 'shahruhduschanov@gmail.com', href: 'mailto:shahruhduschanov@gmail.com' },
                { icon: Phone, label: 'Telefon', value: '+998 99 913 89 99', href: 'tel:+998999138999' },
                { icon: MapPin, label: 'Manzil', value: 'Xonqa, Xorazm' },
                { icon: Github, label: 'GitHub', value: 'shaxa-desing', href: 'https://github.com/shaxa-desing' }
              ].map((contact, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <contact.icon style={{ color: '#ef4444', marginTop: '0.25rem' }} size={24} />
                  <div>
                    <p style={{ color: '#ef4444', fontWeight: '600', fontSize: '0.95rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                        {contact.value}
                      </a>
                    ) : (
                      <p style={{ color: '#cbd5e1', fontSize: '1rem' }}>{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(30, 41, 59, 0.5))',
            border: '2px solid #ef4444',
            borderRadius: '1rem',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '2rem' }}>Xabar Yuborish</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {['Ismingiz', 'Email', 'Mavzu'].map((placeholder) => (
                <input
                  key={placeholder}
                  type={placeholder === 'Email' ? 'email' : 'text'}
                  placeholder={placeholder}
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
                    border: '2px solid rgba(239, 68, 68, 0.3)',
                    color: '#ffffff',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#ef4444'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(239, 68, 68, 0.3)'}
                />
              ))}
              <textarea
                placeholder="Xabaringiz..."
                rows="5"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
                  border: '2px solid rgba(239, 68, 68, 0.3)',
                  color: '#ffffff',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                  backdropFilter: 'blur(10px)'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ef4444'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(239, 68, 68, 0.3)'}
              />
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: '#ffffff',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.boxShadow = '0 15px 40px rgba(239, 68, 68, 0.5)'}
                onMouseLeave={(e) => e.target.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.3)'}
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
    <footer style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
      borderTop: '2px solid #ef4444',
      padding: '3rem 1.5rem',
      marginTop: '5rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Sahifalar</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
              {Object.entries(pages).slice(0, 4).map(([key, label]) => (
                <li key={key}>
                  <button onClick={() => setCurrentPage(key)} style={{
                    background: 'none',
                    border: 'none',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s'
                  }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Loyihalar</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
              {['Barcha Loyihalar', 'Frontend', 'AI Projects'].map((item) => (
                <li key={item}>
                  <button onClick={() => setCurrentPage('projects')} style={{
                    background: 'none',
                    border: 'none',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s'
                  }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Bog'lanish</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
              <li><a href="mailto:shahruhduschanov@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>Email</a></li>
              <li><a href="tel:+998999138999" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>Telefon</a></li>
              <li><a href="https://github.com/shaxa-desing" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Follow</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
              <li><a href="https://github.com/shaxa-desing" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>GitHub</a></li>
              <li><a href="https://gitlab.com/shoxruxbek_899" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ef4444'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>GitLab</a></li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(239, 68, 68, 0.2)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#94a3b8',
          fontSize: '0.9rem'
        }}>
          <p>© 2024-2025 Shoxruxbek Duschanov. All rights reserved.</p>
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
      case 'experience': return <HomePage />;
      case 'education': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      color: '#cbd5e1'
    }}>
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Portfolio;
