import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, BookOpen, Award } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

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
            [Shoxruxbek, Duschanov]
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            Basic Level Developer & [Basic]
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-lg">
            [Salom mening ismim Shahruh va men IT developer man va hozirda dasturlashni o'rganyabman va Forntend va AI bilaman. Men bu yonalishimni yaxshi koraman va mendda ishlash uchun barcha narsa yetarli]          </p>
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
                ✓ Design System<br/>
                ✓ Web Development<br/>
                ✓ Full Stack<br/>
                ✓ AI Integration<br/>
                ✓ Team Leadership
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
            <div className="text-4xl font-black text-red-600 mb-2">[5+]</div>
            <div className="text-gray-400">Yillik Tajriba</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">[10]</div>
            <div className="text-gray-400">Yakunlangan Loyiha</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">[10]</div>
            <div className="text-gray-400">Xursand Mijozlar</div>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">[24/7]</div>
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
                <span className="text-red-600 font-bold">[Shoxruxbek]</span> - [Developer]
              </p>
              <p>
                [Men Frontend va AI o'rganyabman va qolimdan kelgancha loyihalar qila olaman]
              </p>
              <p>
                [Men AI ishlatishda promtp va oddiy tekin ishlataman va maqsadlarim katta katta loyihalarda qatnashib korish]
              </p>
              <p>
                [Men sizga 24/7 javob bera olaman siz mengga yozasiz va men sizga 1 kun ichida javob beraman]
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Award size={24} className="text-red-600" /> Asosiy Maydonlar
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-950 p-4 rounded border border-red-600/20">
                  <div className="text-red-600 font-bold mb-2">[Frontend ]</div>
                  <div className="text-gray-400 text-sm">[Men (Hozircha) Html, Css, Bootstrap va Js bilaman va yana organyabman va kelgusi yillarda React ni ham organmoqcdhiman]</div>
                </div>
                <div className="bg-gray-950 p-4 rounded border border-red-600/20">
                  <div className="text-red-600 font-bold mb-2">[AI boyicha]</div>
                  <div className="text-gray-400 text-sm">[Men Ai bilan kopincha har xil loyihalar rasm va videolar generatsiya qilaman va qolimdan kelgancha katta katta loyihalar qilaman]</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-lg p-1 sticky top-28">
              <div className="bg-black rounded-lg p-8 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-600 to-red-900 rounded-full mb-6"></div>
                <h3 className="text-white font-bold text-lg mb-4">[Shoxrux]</h3>
                <p className="text-red-600 text-sm mb-6">[Developer]</p>
                
                <div className="space-y-3 text-left text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} className="text-red-600" />
                    [Xonqa tumani, Xorazm viloyati]
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail size={16} className="text-red-600" />
                    [shahruhduschanov@gmail.com]
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone size={16} className="text-red-600" />
                    [+998999138999]
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
          {['Frontend', 'Backend', 'Tools'].map((category, idx) => (
            <div key={idx} className="group">
              <div className="border-2 border-red-600 rounded-lg p-8 bg-gray-950 group-hover:bg-red-600/10 transition">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <Code size={24} className="text-red-600" /> {category}
                </h3>
                <ul className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      [KONIKMA {i + 1}]
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Malaka Darajasi</h2>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-white font-bold">[KONIKMA {i + 1}]</span>
                <span className="text-red-600">{80 + i * 2}%</span>
              </div>
              <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-red-600/20">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                  style={{ width: `${80 + i * 2}%` }}
                ></div>
              </div>
            </div>
          ))}
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
                  <p className="text-gray-500 font-mono">[LOYIHA RASMI]</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">[LOYIHA NOMI {i + 1}]</h3>
                <p className="text-gray-400 text-sm mb-4">[LOYIHA TAVSIFI - Nima ekanligini, nima qilishini, qaysi texnologiya ishlatilganini yozing]</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node', 'MongoDB'].map((tech, j) => (
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
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border-l-4 border-red-600 pl-6 pb-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">[O'quvchi {i + 1}]</h3>
                  <p className="text-red-600 font-bold">[Al-Xorazmiy vorislari {i + 1}]</p>
                </div>
                <span className="text-gray-500 text-sm">[2024-2028]</span>
              </div>
              <p className="text-gray-400 mt-4 mb-4">[Men shu mahalgacha Start-Ap qilib kordim va kichik kichik loyihalar qildim va Al-Xorazmiy vorislari saytimizda joylaganman va Github profilimga otib tanishib chiqishinggiz mumkin]</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ [Chat suhbatlashish uchun]</li>
                <li>✓ [Saytga fayl tashlab telegram botga Yuborish]</li>
                <li>✓ [Test ishlash va javobini olish]</li>
              </ul>
            </div>
          ))}
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
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-gradient-to-r from-red-600/10 to-transparent border-l-4 border-red-600 rounded-r-lg p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <BookOpen size={24} className="text-red-600" /> [Yaxshi {i + 1}]
                  </h3>
                  <p className="text-red-600 font-bold mt-2">[O'QUV MUASSASASI {i + 1}]</p>
                </div>
                <span className="text-gray-500 text-sm">[2024 - 2028]</span>
              </div>
              <p className="text-gray-400 mt-4">[Men Al-Xorazmiy vorislarida o'qib o'zim uchun men har xil narsalarga erishdim Sertifikatlar va sovg'alarga erishdim va sizlarga ham tavsiya qilaman]</p>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award size={24} className="text-red-600" /> Sertifikatlar
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-950 border border-red-600/30 rounded p-4 hover:border-red-600 transition">
                <p className="text-white font-bold">[Frontend {i + 1}]</p>
                <p className="text-gray-500 text-sm mt-2">[Itstudy.uz]</p>
                <p className="text-red-600 text-sm mt-2">[2025]</p>
              </div>
            ))}
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
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="bg-gray-950 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-red-600/20 to-red-900/20"></div>
              <div className="p-6">
                <div className="text-red-600 text-xs font-bold mb-2">[KATEGORIYA]</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition">[Mengga Jamoa kerak {i + 1}]</h3>
                <p className="text-gray-400 text-sm mb-4">[Mengga Jamoa uchun odamlar kerak va yaxshi dasturchilar bolsa mengga aloqaga chiqing]</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>[2026/06/29]</span>
                  <span className="text-red-600">Joylar kam qolgan !</span>
                </div>
              </div>
            </article>
          ))}
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
            <p className="text-gray-400 text-lg mb-8">[Men bilan bo'glanmoqchi bo'lsanggiz pastgi qisimda mening telefon raqamim bor va mengga yozsanggiz men sizga 1 kun ichida javob qaytaraman]</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold">Email</p>
                  <p className="text-gray-400">[shahruhduschanov@gmail.com]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold">Telefon</p>
                  <p className="text-gray-400">[+998999138999]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold">Manzil</p>
                  <p className="text-gray-400">[Xonqa tumani, Xorazm viloyati]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Linkedin className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold">Sosial Tarmoqlar</p>
                  <div className="flex gap-4 text-red-600">
                    <a href="#" className="hover:text-red-400">LinkedIn (hozircha yoq)</a>
                    <a href="https://gitlab.com/shoxruxbek_899" className="hover:text-red-400">Gitlab</a>
                    <a href="https://github.com/shaxa-desing" className="hover:text-red-400">GitHub</a>
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
                  <button onClick={() => setCurrentPage(key)} className="hover:text-red-600">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Loyihalar</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-red-600">[LOYIHA 1]</a></li>
              <li><a href="#" className="hover:text-red-600">[LOYIHA 2]</a></li>
              <li><a href="#" className="hover:text-red-600">[LOYIHA 3]</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resurslar</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-red-600">Blog</a></li>
              <li><a href="#" className="hover:text-red-600">Dokumentatsiya</a></li>
              <li><a href="#" className="hover:text-red-600">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Bog'lanish</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="mailto:[EMAIL]" className="hover:text-red-600">Email</a></li>
              <li><a href="tel:[PHONE]" className="hover:text-red-600">Telefon</a></li>
              <li><a href="#" className="hover:text-red-600">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-600/30 pt-8 flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 [Shoxrux]. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-red-600">Privacy Policy</a>
            <a href="#" className="hover:text-red-600">Terms of Service</a>
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

