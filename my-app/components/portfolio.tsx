'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Download, Send,Github,Twitter, Linkedin, } from 'lucide-react';
import Image from 'next/image';
import IconCloud from "../components/ui/icon-cloud";

// IconCloud Slugs
const slugs = [
  "typescript", "javascript", "mongodb", "react", "nextdotjs",
  "html5", "css3", "express", "prisma", "nextdotjs", "Dynamics365", "PowerBI",
  "firebase", "vercel", "oracle", "mysql", "mongodb",
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
{/* Skills Section */}
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
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"aria-label={`Activar ${darkMode ? 'modo claro' : 'modo oscuro'}`}>
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
// Reemplaza "18291234567" con tu número de WhatsApp Business, incluyendo el código de país (sin el símbolo "+").

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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6"
        fill="white"
      >
        <path d="M16.01 1C7.74 1 1 7.745 1 16.005c0 2.86.748 5.673 2.174 8.126l-1.441 5.277 5.39-1.411A15.028 15.028 0 0 0 16 31c8.26 0 14.995-6.735 14.995-14.995C30.995 7.745 24.26 1 16.01 1Zm8.687 22.158c-.377 1.045-2.187 1.99-3.055 2.067-.78.062-1.391.294-4.891-1.039-4.136-1.601-6.79-5.542-6.995-5.797-.205-.254-1.67-2.22-1.67-4.234 0-2.014 1.046-3.009 1.417-3.424.372-.415.83-.519 1.106-.519.275 0 .554 0 .797.015.26.01.603-.1.943.716.377.888 1.291 3.088 1.402 3.31.11.222.183.483.033.774-.15.292-.225.47-.438.72-.216.247-.457.554-.65.744-.217.212-.442.443-.19.871.253.428 1.13 1.86 2.431 2.99 1.67 1.444 3.08 1.894 3.507 2.101.428.206.834.183 1.146-.11.312-.294 1.332-1.51 1.686-2.034.354-.525.723-.432 1.216-.257.494.174 3.134 1.478 3.673 1.742.54.264.901.416 1.034.644.133.228.133 1.047-.243 2.093Z" />
      </svg>
    </a>
  );
};

export { WhatsappButton };
