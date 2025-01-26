'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Download, Send, Github, Twitter, Linkedin, } from 'lucide-react';
import Image from 'next/image';
import IconCloud from "../components/ui/icon-cloud";

// IconCloud Slugs
const slugs = [
  "typescript", "javascript", "mongodb", "react", "nextdotjs",
  "html5", "css3", "express", "prisma", "Dynamics365", "PowerBI",
  "firebase", "vercel", "oracle", "mysql",
  "git", "github", "visualstudiocode", "figma", "nodejs", "docker", "kubernetes", "tailwindcss", "sass", "jest", "graphql"
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Persist Dark Mode with localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    setDarkMode(savedTheme === 'true');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());

      return newMode;
    });
  };
  useEffect(() => {
    const gtmScript = document.createElement('script');
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-W2CVXX4G';
    gtmScript.async = true;
    document.head.appendChild(gtmScript);

    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W2CVXX4G" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(gtmNoscript);

    return () => {
      document.head.removeChild(gtmScript);
      document.body.removeChild(gtmNoscript);
    };
  }, []);

  interface IconCloudWrapperProps {
    iconSlugs: string[];
    className?: string;
  }

  const IconCloudWrapper: React.FC<IconCloudWrapperProps> = ({ iconSlugs, className }) => {
    return (
      <div className={className}>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    );
  };
  {/* Skills Section */ }
  <section id="skills" className="py-20">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">Habilidades</h2>
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto rounded-lg border bg-background bg-opacity-10 dark:bg-gray-800 px-8 pb-10 pt-8 shadow-lg transition-transform transform hover:scale-105">
      <IconCloudWrapper iconSlugs={slugs} className="text-black dark:text-white" />
    </div>
  </section>



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-blue-900 min-h-screen text-gray-800 dark:text-white transition-colors duration-300">

        {/* Navbar */}
        <nav className="fixed w-full bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm z-10">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#" className="text-xl font-bold">Gabriel🚀Felix⚛️</a>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#home" onClick={() => setActiveSection('home')} className={`nav-link ${activeSection === 'home' ? 'text-blue-500' : ''}`}>Inicio</a>
              <a href="#about" onClick={() => setActiveSection('about')} className={`nav-link ${activeSection === 'about' ? 'text-blue-500' : ''}`}>Sobre mí</a>
              <a href="#projects" onClick={() => setActiveSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'text-blue-500' : ''}`}>Proyectos</a>
              <a href="#skills" onClick={() => setActiveSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'text-blue-500' : ''}`}>Habilidades</a>
              <a href="#contact" onClick={() => setActiveSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'text-blue-500' : ''}`}>Contacto</a>
              <a href="#blog" onClick={() => setActiveSection('blog')} className={`nav-link ${activeSection === 'blog' ? 'text-blue-500' : ''}`}>Blog</a>
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700" aria-label={`Activar ${darkMode ? 'modo claro' : 'modo oscuro'}`}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700" title="Toggle Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-20 p-4"
            >
              <div className="flex justify-end">
                <button onClick={toggleMenu} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700" title="Toggle Menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#home" onClick={() => { setActiveSection('home'); toggleMenu(); }} className={`nav-link ${activeSection === 'home' ? 'text-blue-500' : ''}`}>Inicio</a>
                <a href="#about" onClick={() => { setActiveSection('about'); toggleMenu(); }} className={`nav-link ${activeSection === 'about' ? 'text-blue-500' : ''}`}>Sobre mí</a>
                <a href="#projects" onClick={() => { setActiveSection('projects'); toggleMenu(); }} className={`nav-link ${activeSection === 'projects' ? 'text-blue-500' : ''}`}>Proyectos</a>
                <a href="#skills" onClick={() => { setActiveSection('skills'); toggleMenu(); }} className={`nav-link ${activeSection === 'skills' ? 'text-blue-500' : ''}`}>Habilidades</a>
                <a href="#contact" onClick={() => { setActiveSection('contact'); toggleMenu(); }} className={`nav-link ${activeSection === 'contact' ? 'text-blue-500' : ''}`}>Contacto</a>
                <button onClick={toggleDarkMode} className="flex items-center space-x-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span>{darkMode ? 'Modo claro' : 'Modo oscuro'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="container mx-auto px-6 pt-20">

          {/* Home Section */}
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5Bremoval.ai%5D_2f421267-1c2e-4409-b275-1d66a51460fd-mi-foto-kfObB4u0aeGSSsfCWDzXd6FRYC9BMg.png"
                  alt="Foto de perfil de Gabriel Felix"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto border-4 border-blue-500 shadow-lg"
                />
                <motion.div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-full p-2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
                  <code className="text-white text-xs">&lt;/&gt;</code>
                </motion.div>
              </motion.div>
              <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl font-bold mb-4">
                Software Developer
              </motion.h1>
              <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-xl mb-8">
                Creando experiencias digitales increíbles
              </motion.p>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex justify-center space-x-4">
                <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">Contáctame</a>
                <a href="#projects" className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">Ver proyectos</a>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6 lg:px-20">
              <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 dark:text-white">Sobre mí</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-10 md:p-16">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  Soy un apasionado Desarrollador de Software, con experiencia en la creación de aplicaciones modernas y responsivas. Mi enfoque se centra en proporcionar soluciones eficientes y escalables utilizando las últimas tecnologías del mercado.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Además, soy Consultor funcional de Dynamic 365 y Power BI, ayudando a las empresas a optimizar sus procesos y tomar decisiones basadas en datos.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Con una sólida base en React JS, JavaScript, Next.js, CSS3 y Node.js, me esfuerzo por crear experiencias de usuario excepcionales y código limpio y mantenible.
                </p>
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "WEB Fundacion y Ministerio FUMMHOR",
                  description: "WEB Fundación y Ministerio FUMMHOR es un sitio web desarrollado para una fundación evangélica, diseñado con WordPress y Elementor.",
                  tech: ["Wordpress", "Elementor PRO", "PHP"],
                  image: "/images/projects/Fummhor.png",
                  link: "https://fummhor.com",
                },
                {
                  title: "Clon-Movies",
                  description: "Clon-Movies es una aplicación web para explorar una variedad de películas. Desarrollada con React.js y Tailwind CSS.",
                  tech: ["React.js", "Tailwind CSS"],
                  image: "/images/projects/clon.png",
                  link: "https://clon-movie.vercel.app/",
                },
                {
                  title: "Andamios Web",
                  description: "Andamios del Este es una página web informativa diseñada para proporcionar detalles sobre los servicios y productos de la empresa. Desarrollada en WordPress y utilizando el constructor visual Divi.",
                  tech: ["Wordpress", "Divi", "PHP", "Crips"],
                  image: "/images/projects/Andamios.png",
                  link: "https://andamiosdeleste.com.do",
                },
                {
                  title: "Aplicacion de presupuesto",
                  description: "Aplicación de presupuesto es una herramienta web para gestionar y controlar el presupuesto personal. Permite a los usuarios registrar ingresos y gastos, y proporciona gráficos para visualizar el balance financiero.",
                  tech: ["JavaScript ES6", "CSS3", "HTML5"],
                  image: "/images/projects/presupuesto.png",
                  link: "https://aplicacion-de-presupuesto.vercel.app/",
                },
                {
                  title: "Clon Testimonios FreeCodeCamp",
                  description: "Este proyecto es un clon de la sección de testimonios de FreeCodeCamp, diseñado para replicar su funcionalidad y estética.",
                  tech: ["React JS", "CSS3", "HTML5"],
                  image: "/images/projects/testimonios.png",
                  link: "https://testimonios-freecodecamp-lemon.vercel.app/",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={`Imagen del proyecto ${project.title}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition duration-300"
                    >
                      Ver más →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Data Analysis Projects Section */}
          <section id="data-analysis-projects" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Proyectos de Análisis de Datos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Dashboard de Ventas Regionales",
                  description:
                    "Este dashboard en Power BI muestra ventas totales por región, cliente y producto, permitiendo identificar tendencias y oportunidades de mercado.",
                  tech: ["Power BI", "SQL Server", "DAX"],
                  image: "/images/projects/Dashboard.png",
                  link: "#", // Enlace real aquí
                },
                {
                  title: "Análisis de Servicio al Cliente",
                  description:
                    "Herramienta que analiza productos no vendidos, segmentando por vendedor y cliente, con visualizaciones de tendencias semanales.",
                  tech: ["Power BI", "Excel", "DAX"],
                  image: "/images/projects/Servicio.png",
                  link: "#", // Enlace real aquí
                },
                {
                  title: "Mapeo de empleados",
                  description:
                    "Dashboard que muestra la ubicación de empleados en tiempo real, con información sobre la cantidad de empleados por región y departamento.",
                  tech: ["Power BI", "DAX", "SQL Server"],
                  image: "/images/projects/Personal.png",
                  link: "#", // Enlace real aquí
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={`Imagen del proyecto ${project.title}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition duration-300"
                    >
                      Ver más →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>


          {/* Skills Section */}
          <section id="skills" className="py-20 transition-colors duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
              Habilidades
            </h2>
            <div className="flex flex-col items-center justify-center max-w-lg mx-auto rounded-lg border bg-gray-100 dark:bg-gray-800 bg-opacity-10 px-8 pb-10 pt-8 shadow-lg transition-transform transform hover:scale-105">
              <IconCloudWrapper iconSlugs={slugs} className="text-gray-900 dark:text-gray-100" />
            </div>
          </section>


          {/* Contact Form */}
          <form id="contact" action="https://formspree.io/f/meojwdll" method="POST" className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" required></textarea>
            </div>
            <motion.button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Send className="mr-2" />
              Enviar mensaje
            </motion.button>
          </form>

          {/* Blog Section */}
          <section id="blog" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[
                {
                  title: "Mejorando el rendimiento de React",
                  description: "Técnicas para optimizar el rendimiento en React.",
                  link: "https://es.legacy.reactjs.org/docs/optimizing-performance.html"
                },
                {
                  title: "Integración de APIs con Next.js",
                  description: "Aprende a integrar APIs en Next.js.",
                  link: "https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
                },
                {
                  title: "Pasando funciones a componentes",
                  description: "¿Cómo puedo pasar un controlador de eventos (como onClick) a un componente?",
                  link: "https://es.legacy.reactjs.org/docs/faq-functions.html"
                }
              ].map((blog, index) => (
                <motion.div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mx-auto">
                  <h3 className="text-xl font-bold mb-2 text-center">{blog.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{blog.description}</p>
                  <a href={blog.link} className="text-blue-500 hover:text-blue-600 transition duration-300 text-center block">Leer más →</a>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Download CV Section */}
          <section id="cv" className="py-20 text-center">
            <motion.a
              href="/CV_Gabriel_Felix.pdf"
              download
              className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Download className="mr-2" />
              Descargar CV
            </motion.a>
          </section>


        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 py-6 mt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://github.com/gfelix01" className="text-gray-400 hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/arturo-felix/" className="text-gray-400 hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.threads.net/@arturo01.js" className="text-gray-400 hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer" title="Threads Profile">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Gabriel Felix ❤️‍🔥. Todos los derechos reservados.</p>
          </div>
        </footer>

        <WhatsappButton />
      </div>
    </div>
  );
}
const whatsappLink = "https://wa.me/18293027559?text=Hola%20me%20gustaría%20contactarte";

const WhatsappButton: React.FC = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 duration-300"
      title="Contactar por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
      >
        <defs>
          <path
            id="a"
            d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"
          />
        </defs>
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="512.001" y1=".978" x2="512.001" y2="1025.023">
          <stop offset="0" stopColor="#61fd7d" />
          <stop offset="1" stopColor="#2bb826" />
        </linearGradient>
        <use xlinkHref="#a" fill="url(#b)" />
        <g>
          <path
            fill="#FFF"
            d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"
          />
        </g>
      </svg>
    </a>
  );
};

export { WhatsappButton };

