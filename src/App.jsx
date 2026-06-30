import React, { useState } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Github, Gitlab, Mail, Phone, MapPin, Code, Briefcase, BookOpen, Award } from 'lucide-react';

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

  // ==================== COMPONENTS ====================
  
  const Navigation = () => (
    <nav className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur border-b border-red-600">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-white">[</span>
          <span className="text-red-600">PORTFOLIO</span>
          <span className="text-white">]</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {Object.entries(pages).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCurrentPage(key)}
              className={`transition-all text-sm font-medium ${
                currentPage === key
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-red-600">
          <div className="px-6 py-4 space-y-3">
            {Object.entries(pages).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentPage(key);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 ${
                  currentPage === key ? 'text-red-600' : 'text-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-red-600 text-lg font-mono mb-4">$ whoami</div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            Shoxruxbek Duschanov
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            Frontend Developer & AI Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-lg">
            Salom! Men Shoxruxbek va men IT developer man. Dasturlashni o'rganyabman va Frontend va AI bilaman. Katta loyihalarni qilishni va yangi texnologiyalarni o'rganishni juda yoqtiradim.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('projects')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold flex items-center gap-2 transition"
            >
              Loyihalarni Ko'rish <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded font-bold transition"
            >
              Murojaat Qilish
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-lg p-1">
            <div className="bg-black rounded-lg p-8 font-mono text-green-400 text-sm h-96 overflow-hidden">
              <div>$ portfolio --init</div>
              <div className="mt-4">
                ✓ Frontend Development<br/>
                ✓ HTML, CSS, JavaScript<br/>
                ✓ Bootstrap & Responsive<br/>
                ✓ AI Integration<br/>
                ✓ Problem Solving
              </div>
              <div className="mt-8 text-red-600">
                Loading professional profile...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-950 py-16 border-y border-red-600/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">2+</div>
            <div className="text-gray-400">Yillik Tajriba</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">10+</div>
            <div className="text-gray-400">Yakunlangan Loyiha</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">10+</div>
            <div className="text-gray-400">Xursand Mijozlar</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black text-white mb-4">Men Haqimda</h1>
        <div className="h-1 w-20 bg-red-600 mb-12"></div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                <span className="text-red-600 font-bold">Shoxruxbek Duschanov</span> - Frontend Developer va AI enthusiast
              </p>
              <p>
                Men Frontend va AI o'rganyabman va qolimdan kelgancha professional loyihalar qila olaman. HTML, CSS, Bootstrap va JavaScript bilaman va yana React ni o'rganmoqchiman.
              </p>
              <p>
                AI ishlatishda har xil promptlar yozaman va katta loyihalarda qatnashishni yoqtiradim. Har har narsani o'rganishga tayyorman va yangi texnologiyalarni tezda qabul qila olaman.
              </p>
              <p>
                Men sizga 24/7 javob bera olaman. Agar mengga savol yoki loyiha haqida fikr bildirmoqchi bo'lsangiz, 1 kun ichida javob qaytaraman.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Award size={24} className="text-red-600" /> Asosiy Maydonlar
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-950 p-4 rounded border border-red-600/20">
                  <div className="text-red-600 font-bold mb-2">Frontend Development</div>
                  <div className="text-gray-400 text-sm">HTML, CSS, Bootstrap va JavaScript bilaman. Responsive va user-friendly saytlar yarataman. React o'rganmoqchiman.</div>
                </div>
                <div className="bg-gray-950 p-4 rounded border border-red-600/20">
                  <div className="text-red-600 font-bold mb-2">AI & Automation</div>
                  <div className="text-gray-400 text-sm">AI bilan har xil loyihalar qila olaman. Rasm va video generatsiya, prompt engineering va automation qila olaman.</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-lg p-1 sticky top-28">
              <div className="bg-black rounded-lg p-8 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-600 to-red-900 rounded-full mb-6"></div>
                <h3 className="text-white font-bold text-lg mb-4">Shoxruxbek</h3>
                <p className="text-red-600 text-sm mb-6">Frontend Developer</p>
                
                <div className="space-y-3 text-left text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} className="text-red-600" />
                    Xonqa, Xorazm
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail size={16} className="text-red-600" />
                    shahruhduschanov@gmail.com
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone size={16} className="text-red-600" />
                    +998 99 913 89 99
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black text-white mb-4">Ko'nikmalar</h1>
        <div className="h-1 w-20 bg-red-600 mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {['Frontend', 'AI & Tools', 'Other'].map((category, idx) => (
            <div key={idx} className="group">
              <div className="border-2 border-red-600 rounded-lg p-8 bg-gray-950 group-hover:bg-red-600/10 transition">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <Code size={24} className="text-red-600" /> {category}
                </h3>
                <ul className="space-y-3">
                  {category === 'Frontend' && (
                    <>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        HTML5
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        CSS3
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        JavaScript
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Bootstrap
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Responsive Design
                      </li>
                    </>
                  )}
                  {category === 'AI & Tools' && (
                    <>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        AI Prompting
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Image Generation
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Automation
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Git & GitHub
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        VS Code
                      </li>
                    </>
                  )}
                  {category === 'Other' && (
                    <>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Problem Solving
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Communication
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Quick Learner
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Team Work
                      </li>
                      <li className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        Uzbek, English
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Malaka Darajasi</h2>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white font-bold">HTML & CSS</span>
              <span className="text-red-600">85%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-red-600/20">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white font-bold">JavaScript</span>
              <span className="text-red-600">70%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-red-600/20">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white font-bold">Bootstrap</span>
              <span className="text-red-600">80%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-red-600/20">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white font-bold">React (Learning)</span>
              <span className="text-red-600">40%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-red-600/20">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white font-bold">AI & Prompting</span>
              <span className="text-red-600">75%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-red-600/20">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white font-bold">Git & GitHub</span>
              <span className="text-red-600">75%</span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-red-600/20">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black text-white mb-4">Loyihalar</h1>
        <div className="h-1 w-20 bg-red-600 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group border-2 border-red-600/30 rounded-lg overflow-hidden bg-gray-950 hover:border-red-600 transition">
              <div className="h-48 bg-gradient-to-br from-red-600/20 to-red-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Briefcase size={48} className="text-red-600 mx-auto mb-2" />
                  <p className="text-gray-500 font-mono">Loyiha {i + 1}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Loyiha #{i + 1}</h3>
                <p className="text-gray-400 text-sm mb-4">Bu yerda loyiha tavsifi yoziladi. Qanday texnologiya ishlatilgan, qanday muammo hal etilgan va natijasi nima ekanligi.</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {['HTML', 'CSS', 'JavaScript'].map((tech, j) => (
                    <span key={j} className="bg-red-600/20 text-red-400 text-xs px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold flex items-center justify-center gap-2 transition">
                    <ExternalLink size={16} /> Ko'rish
                  </button>
                  <button className="flex-1 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 rounded font-bold flex items-center justify-center gap-2 transition">
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

  const ExperiencePage = () => (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black text-white mb-4">Ishchi Tajriba</h1>
        <div className="h-1 w-20 bg-red-600 mb-12"></div>

        <div className="space-y-8">
          <div className="border-l-4 border-red-600 pl-6 pb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white">Startup - Chat Bot Loyihasi</h3>
                <p className="text-red-600 font-bold">Al-Xorazmiy Vorislarida</p>
              </div>
              <span className="text-gray-500 text-sm">2024 - 2025</span>
            </div>
            <p className="text-gray-400 mt-4 mb-4">Men kichik startup loyihasida qatnashib, chat suhbatlashish uchun bot yaratdim. Saytga fayl tashlash va Telegram botga yuborish imkoniyati qo'shadim. Test ishlash va javoblarini oladigan tizim qurdim.</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Frontend sayt yaratish (HTML, CSS, JS)</li>
              <li>✓ Telegram Bot integratsiyasi</li>
              <li>✓ File upload va processing</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-600 pl-6 pb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white">Personal Projects</h3>
                <p className="text-red-600 font-bold">GitHub Portfolio</p>
              </div>
              <span className="text-gray-500 text-sm">2024 - Hozir</span>
            </div>
            <p className="text-gray-400 mt-4 mb-4">Har xil personal loyihalarni GitHub'da hosil qilaman. Frontend veb saytlar, AI loyihalari va automation scriptlarini qildim.</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Responsive Web Design</li>
              <li>✓ HTML, CSS, JavaScript</li>
              <li>✓ Git version control</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const EducationPage = () => (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black text-white mb-4">Ta'lim</h1>
        <div className="h-1 w-20 bg-red-600 mb-12"></div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-red-600/10 to-transparent border-l-4 border-red-600 rounded-r-lg p-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen size={24} className="text-red-600" /> Al-Xorazmiy Vorislarida
                </h3>
                <p className="text-red-600 font-bold mt-2">Frontend Development</p>
              </div>
              <span className="text-gray-500 text-sm">2024 - 2028</span>
            </div>
            <p className="text-gray-400 mt-4">Al-Xorazmiy vorislari platformasida dasturlash o'rganmoqchiman. Frontend, Backend va AI sohalari bo'yicha bilim to'plammoqchiman. Sertifikat va sovg'alarga erish maqsadi.</p>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-transparent border-l-4 border-red-600 rounded-r-lg p-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen size={24} className="text-red-600" /> Online Courses
                </h3>
                <p className="text-red-600 font-bold mt-2">Web Development & AI</p>
              </div>
              <span className="text-gray-500 text-sm">2023 - Hozir</span>
            </div>
            <p className="text-gray-400 mt-4">Turli platformalarda online kurslardan o'qiyapman. HTML, CSS, JavaScript, Bootstrap va React bilish uchun o'qiyapman.</p>
          </div>

          <div className="bg-gradient-to-r from-red-600/10 to-transparent border-l-4 border-red-600 rounded-r-lg p-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen size={24} className="text-red-600" /> Self-Learning
                </h3>
                <p className="text-red-600 font-bold mt-2">Practice & Projects</p>
              </div>
              <span className="text-gray-500 text-sm">2024 - Hozir</span>
            </div>
            <p className="text-gray-400 mt-4">Har kun loyihalar qilib va GitHub'da saqlayb o'rganyapman. Amaliy tajriba to'plammoqchiman.</p>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award size={24} className="text-red-600" /> Sertifikatlar
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-950 border border-red-600/30 rounded p-4 hover:border-red-600 transition">
              <p className="text-white font-bold">Frontend Basics</p>
              <p className="text-gray-500 text-sm mt-2">Itstudy.uz</p>
              <p className="text-red-600 text-sm mt-2">2024</p>
            </div>
            <div className="bg-gray-950 border border-red-600/30 rounded p-4 hover:border-red-600 transition">
              <p className="text-white font-bold">HTML & CSS</p>
              <p className="text-gray-500 text-sm mt-2">Online Course</p>
              <p className="text-red-600 text-sm mt-2">2024</p>
            </div>
            <div className="bg-gray-950 border border-red-600/30 rounded p-4 hover:border-red-600 transition">
              <p className="text-white font-bold">JavaScript Basics</p>
              <p className="text-gray-500 text-sm mt-2">Online Platform</p>
              <p className="text-red-600 text-sm mt-2">2024</p>
            </div>
            <div className="bg-gray-950 border border-red-600/30 rounded p-4 hover:border-red-600 transition">
              <p className="text-white font-bold">AI Prompting</p>
              <p className="text-gray-500 text-sm mt-2">Self Learning</p>
              <p className="text-red-600 text-sm mt-2">2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black text-white mb-4">Blog</h1>
        <div className="h-1 w-20 bg-red-600 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-gray-950 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition group cursor-pointer">
            <div className="h-40 bg-gradient-to-br from-red-600/20 to-red-900/20"></div>
            <div className="p-6">
              <div className="text-red-600 text-xs font-bold mb-2">TADBIR</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition">Jamoa Kerak!</h3>
              <p className="text-gray-400 text-sm mb-4">Men bilan qo'shilmoqchi bo'lgan yaxshi dasturchilar va dizaynerlar kerak. Katta loyihalar qilishni rejalashtirmoqchiman.</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>2026/06/29</span>
                <span className="text-red-600">Joylar ochiq!</span>
              </div>
            </div>
          </article>

          <article className="bg-gray-950 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition group cursor-pointer">
            <div className="h-40 bg-gradient-to-br from-red-600/20 to-red-900/20"></div>
            <div className="p-6">
              <div className="text-red-600 text-xs font-bold mb-2">XABAR</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition">Portfolio Yaratdim!</h3>
              <p className="text-gray-400 text-sm mb-4">Yangi portfolio saytimni launch qildim. Bu yerda barcha loyihalari va bilimlarimi ko'rsa olasiz.</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>2026/06/29</span>
                <span className="text-red-600">Ko'ring!</span>
              </div>
            </div>
          </article>

          <article className="bg-gray-950 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition group cursor-pointer">
            <div className="h-40 bg-gradient-to-br from-red-600/20 to-red-900/20"></div>
            <div className="p-6">
              <div className="text-red-600 text-xs font-bold mb-2">TUTORIAL</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition">Frontend Boshlang'ich</h3>
              <p className="text-gray-400 text-sm mb-4">HTML, CSS va JavaScript'ni boshlang'ichlar uchun o'rgatadigan maqolalar yozmoqchiman.</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Tez kuni</span>
                <span className="text-red-600">Keladi!</span>
              </div>
            </div>
          </article>

          <article className="bg-gray-950 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition group cursor-pointer">
            <div className="h-40 bg-gradient-to-br from-red-600/20 to-red-900/20"></div>
            <div className="p-6">
              <div className="text-red-600 text-xs font-bold mb-2">TIPS</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition">AI Prompting Tips</h3>
              <p className="text-gray-400 text-sm mb-4">AI'dan kerakli narsalarni qanday so'rash kerak. Effective prompt yozishning sirlarini o'rgataman.</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>2026/06/30</span>
                <span className="text-red-600">5 min o'qish</span>
              </div>
            </div>
          </article>

          <article className="bg-gray-950 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition group cursor-pointer">
            <div className="h-40 bg-gradient-to-br from-red-600/20 to-red-900/20"></div>
            <div className="p-6">
              <div className="text-red-600 text-xs font-bold mb-2">AMALIYOT</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition">Bootstrap O'rnatish</h3>
              <p className="text-gray-400 text-sm mb-4">Bootstrap framework'ini qanday o'rnatish va ishlataish kerak. Praktik misollar va code snippets.</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Tez kuni</span>
                <span className="text-red-600">Keladi!</span>
              </div>
            </div>
          </article>

          <article className="bg-gray-950 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition group cursor-pointer">
            <div className="h-40 bg-gradient-to-br from-red-600/20 to-red-900/20"></div>
            <div className="p-6">
              <div className="text-red-600 text-xs font-bold mb-2">HAYVON</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition">React Darslar</h3>
              <p className="text-gray-400 text-sm mb-4">React'ni o'rganishni rejalashtirmoqchiman. Components, hooks va state management haqida.</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Tez kuni</span>
                <span className="text-red-600">Keladi!</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black text-white mb-4">Aloqasi</h1>
        <div className="h-1 w-20 bg-red-600 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-400 text-lg mb-8">Men bilan bog'lanmoqchi bo'lsanggiz, pastgi qismda mening kontakt ma'lumotlari bor. Sizga 1 kun ichida javob qaytaraman!</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold">Email</p>
                  <p className="text-gray-400">shahruhduschanov@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold">Telefon</p>
                  <p className="text-gray-400">+998 99 913 89 99</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold">Manzil</p>
                  <p className="text-gray-400">Xonqa, Xorazm viloyati</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Github className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold">Sosial Tarmoqlar</p>
                  <div className="flex gap-4 text-red-600 mt-2">
                    <a href="https://github.com/shaxa-desing" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">GitHub</a>
                    <a href="https://gitlab.com/shoxruxbek_899" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">GitLab</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-950 border-2 border-red-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Xabar Yuborish</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full bg-black border border-red-600/30 text-white px-4 py-3 rounded focus:border-red-600 outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black border border-red-600/30 text-white px-4 py-3 rounded focus:border-red-600 outline-none transition"
              />
              <input
                type="text"
                placeholder="Mavzu"
                className="w-full bg-black border border-red-600/30 text-white px-4 py-3 rounded focus:border-red-600 outline-none transition"
              />
              <textarea
                placeholder="Xabaringiz..."
                rows="5"
                className="w-full bg-black border border-red-600/30 text-white px-4 py-3 rounded focus:border-red-600 outline-none transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-bold transition"
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
    <footer className="bg-black border-t border-red-600/30 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-bold mb-4">Sahifalar</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              {Object.entries(pages).slice(0, 4).map(([key, label]) => (
                <li key={key}>
                  <button onClick={() => setCurrentPage(key)} className="hover:text-red-600 bg-none border-none cursor-pointer text-inherit">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Loyihalar</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><button onClick={() => setCurrentPage('projects')} className="hover:text-red-600 bg-none border-none cursor-pointer text-inherit">Barcha Loyihalar</button></li>
              <li><button onClick={() => setCurrentPage('projects')} className="hover:text-red-600 bg-none border-none cursor-pointer text-inherit">Frontend</button></li>
              <li><button onClick={() => setCurrentPage('projects')} className="hover:text-red-600 bg-none border-none cursor-pointer text-inherit">AI Projects</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resurslar</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><button onClick={() => setCurrentPage('blog')} className="hover:text-red-600 bg-none border-none cursor-pointer text-inherit">Blog</button></li>
              <li><button onClick={() => setCurrentPage('skills')} className="hover:text-red-600 bg-none border-none cursor-pointer text-inherit">Ko'nikmalar</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-red-600 bg-none border-none cursor-pointer text-inherit">Men Haqimda</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Bog'lanish</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="mailto:shahruhduschanov@gmail.com" className="hover:text-red-600">Email</a></li>
              <li><a href="tel:+998999138999" className="hover:text-red-600">Telefon</a></li>
              <li><a href="https://github.com/shaxa-desing" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-600/30 pt-8 flex justify-between items-center flex-col md:flex-row gap-4">
          <p className="text-gray-500 text-sm">
            © 2024-2025 Shoxruxbek Duschanov. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <button onClick={() => setCurrentPage('home')} className="hover:text-red-600 bg-none border-none cursor-pointer">Privacy Policy</button>
            <button onClick={() => setCurrentPage('home')} className="hover:text-red-600 bg-none border-none cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );

  // ==================== RENDER LOGIC ====================

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
    <div className="bg-black min-h-screen">
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Portfolio;
