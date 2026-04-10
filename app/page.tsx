import { ArrowRight, Leaf, Heart, ShieldCheck, MapPin, Search, PackageCheck, Star, GlassWater } from 'lucide-react';
import Image from 'next/image';

const flavors = [
  { name: 'Fresa', src: '/yoghurt1.jpeg' },
  { name: 'Gelatina', src: '/yoghurt2.jpeg' },
  { name: 'Cereal', src: '/yoghurt3.jpeg' },
  { name: 'Nuez', src: '/yoghurt4.jpeg' },
];

export default function DeliyogurtLandingPage() {
  const whatsappLink = "https://wa.me/529531860151?text=Hola%20Deli%20Yogurt!%20Me%20interesa%20hacer%20un%20pedido.";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans antialiased flex flex-col">
      
      <main className="flex-grow max-w-7xl mx-auto w-full bg-[#FFFDF9] shadow-2xl md:rounded-3xl p-6 md:p-12 md:mt-8 relative overflow-hidden border border-amber-900/10 md:shadow-[0_30px_60px_-15px_rgba(219,196,167,0.4)]">
        
        {/* =========================================
            SECCIÓN HERO (HEADER)
            ========================================= */}
        <header className="relative py-12 md:py-20 px-4 md:px-12 border-b-8 border-amber-900/10 mb-16 flex flex-col md:flex-row items-center gap-12">
          
          {/* Logo centrado y Texto Principal */}
          <div className="flex-1 flex flex-col text-center md:text-left">
            
            {/* Logo más grande y centrado justo arriba del título */}
            <div className="self-center mb-8 relative w-56 h-32 md:w-72 md:h-40 transition-transform duration-300 hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Deli Yogurt Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-amber-950 mb-6 tracking-tighter leading-tight font-serif">
              Yogurt <span className="text-pink-600">Artesanal</span><br/> 100% natural en Tlaxiaco.
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-stone-800 mb-8 leading-relaxed">
              Sin conservadores, hecho con amor y tradición Mixteca.
            </p>
            
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center bg-green-700 hover:bg-green-800 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl gap-3 font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform self-center md:self-start"
            >
              <GlassWater size={24} />
              Ordena por WhatsApp
            </a>
          </div>
          
          {/* Imagen Hero Destacada */}
          <div className="flex-1 relative aspect-square w-full max-w-md md:max-w-lg mx-auto p-4 md:p-5 rounded-[40px] border-8 border-white bg-white shadow-[0_25px_50px_-12px_rgba(219,196,167,0.3)] flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(219,196,167,0.4)]">
             <Image 
               src="/destacada.jpeg" 
               alt="Yogurt artesanal con frutas y granola destacado" 
               fill 
               className="object-cover rounded-[30px]" 
               sizes="(max-width: 768px) 100vw, 50vw"
               priority
             />
          </div>
        </header>

        {/* =========================================
            SECCIÓN GALERÍA EN DETALLE
            ========================================= */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-12 border-b-8 border-amber-900/10 mb-16 md:mb-20 rounded-[40px] shadow-[0_15px_30px_-10px_rgba(219,196,167,0.2)]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10">
               <PackageCheck className="text-amber-700" size={36} />
               <h2 className="text-3xl md:text-5xl font-extrabold text-amber-950 tracking-tighter font-serif">Galería en Detalle</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
              
              {/* Foto Grande 1 (yoghurts.jpeg - Nevera) */}
              <div className="md:col-span-1 relative rounded-[30px] border-4 border-amber-900/10 overflow-hidden bg-white shadow-xl p-2 md:p-3">
                <div className="aspect-square md:aspect-[4/5] relative rounded-[20px] overflow-hidden">
                  <Image 
                    src="/yoghurts.jpeg" 
                    alt="Varios recipientes de yogurt en la nevera" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              
              {/* Cuadrícula de 4 Fotos */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 h-full">
                {flavors.map((flavor, index) => (
                  <div key={index} className="relative rounded-[30px] border-4 border-amber-900/10 overflow-hidden bg-white shadow-xl p-2 md:p-3 group transition-all duration-300 hover:border-pink-300">
                    <div className="aspect-square relative rounded-[20px] mb-4 overflow-hidden">
                      <Image 
                        src={flavor.src} 
                        alt={`Vaso de yogurt sabor ${flavor.name}`} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <h3 className="font-bold text-lg md:text-xl text-amber-950 font-serif leading-tight">{flavor.name}</h3>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-pink-500 shadow-inner flex-shrink-0"></div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* =========================================
            BANNER CTA INTERMEDIO
            ========================================= */}
        <section className="bg-green-700 text-white py-12 md:py-16 px-6 md:px-12 border-t-8 border-green-800 shadow-xl rounded-2xl flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left mb-16 md:mb-20 overflow-hidden relative">
          <Leaf size={40} className="text-green-200 hidden md:block" />
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight font-serif leading-tight">
            Haz tu pedido ahora por WhatsApp
          </p>
          <ArrowRight size={28} className="hidden md:block text-green-200" />
        </section>

        {/* =========================================
            SECCIÓN PREGUNTAS FRECUENTES (FAQ)
            ========================================= */}
        <section className="bg-[#FFF8EE] py-16 md:py-24 px-4 md:px-12 border-t border-amber-900/10 border-b-8 border-amber-900/10 shadow-inner mb-16 md:mb-20 rounded-[40px]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-amber-950 mb-12 md:mb-16 tracking-tight font-serif">Preguntas Frecuentes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
              {[
                { icon: Heart, question: '¿El yogurt tiene conservadores?', answer: 'No, es 100% natural.' },
                { icon: MapPin, question: '¿Dónde entregan?', answer: 'En Tlaxiaco y alrededores.' },
                { icon: Search, question: '¿Cómo pido?', answer: 'Fácil, por WhatsApp.' },
                { icon: ShieldCheck, question: '¿Puedo apartar pedido?', answer: 'Sí, claro, reserva con anticipación.' }
              ].map((faq, i) => (
                <div key={i} className="p-6 md:p-8 rounded-[30px] border-4 border-amber-900/10 bg-white shadow-lg transition-all duration-300 hover:border-pink-300 group">
                  <h3 className="text-lg md:text-xl font-bold text-amber-950 flex items-center gap-3 mb-3 md:mb-4 font-serif leading-tight">
                    <faq.icon size={28} className="text-green-700 transition-colors group-hover:text-green-800 flex-shrink-0" /> 
                    {faq.question}
                  </h3>
                  <p className="text-stone-700 leading-relaxed text-base font-sans pl-10">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            SECCIÓN FINAL (CTA)
            ========================================= */}
        <section className="py-12 md:py-20 px-4 md:px-12 text-center rounded-b-3xl">
          <div className="max-w-xl mx-auto">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center bg-green-700 hover:bg-green-800 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl gap-3 font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
            >
              <GlassWater size={24} />
              Ordena ahora por WhatsApp
            </a>
            <p className="mt-6 md:mt-8 text-sm md:text-base text-stone-500 font-sans font-medium">
              Te garantizamos una experiencia láctea artesanal inolvidable. ¡Hecho con amor y tradición Mixteca!
            </p>
          </div>
        </section>

      </main>

      {/* =========================================
          EL VERDADERO FOOTER
          ========================================= */}
      <footer className="w-full bg-amber-950 text-amber-50 py-10 px-6 mt-10 md:mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Leaf size={20} className="text-green-500" />
              <span className="font-serif font-bold text-xl tracking-wide">Deli Yogurt</span>
            </div>
            <p className="text-sm text-amber-200/80">Heroica Ciudad de Tlaxiaco, Oaxaca.</p>
          </div>

          <div className="text-sm text-amber-200/60">
            <p>© {new Date().getFullYear()} Deli Yogurt. Todos los derechos reservados.</p>
          </div>
          
        </div>
      </footer>

    </div>
  );
}