import React, { useState } from 'react';
import { Library, Send, ChevronDown } from 'lucide-react';
import { LampContainer } from './components/ui/lamp';
import { motion } from 'framer-motion';
import { InfiniteSlider } from './components/ui/infinite-slider';

interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}

interface BookRecommendation {
  name: string;
  email: string;
  bookTitle: string;
  message: string;
}

function App() {
  const [books] = useState<Book[]>([
    {
      id: 1,
      title: "Sociedade do Cansaço",
      author: "Byung-Chul Han",
      imageUrl: "/books/sociedade_cansaco.png"
    },
    {
      id: 2,
      title: "O Homem mais rico da Babilônia",
      author: "George S. Clason",
      imageUrl: "/books/sociedade_cansaco.png"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      imageUrl: "/books/sociedade_cansaco.png"
    }
  ]);

  const [recommendation, setRecommendation] = useState<BookRecommendation>({
    name: '',
    email: '',
    bookTitle: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recommendation submitted:', recommendation);
    alert('Agradecemos sua recomendação. Em breve ela será analisada.');
    setRecommendation({
      name: '',
      email: '',
      bookTitle: '',
      message: ''
    });
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
            <section className="relative h-screen flex items-center justify-center bg-[#0B1015] text-white overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full">
          <div className="flex items-center justify-center">
            <img
              src="/raul.jpeg"
              alt="Raul"
              className="w-full h-[2200px] object-cover object-center opacity-100 filter grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1015] via-[#0B1015]/80 to-[#0B1015]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015] via-transparent to-[#0B1015]"></div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 gap-12">
          <div className="text-left max-w-2xl">
            <Library className="w-16 h-16 text-neutral-400 mb-8" />
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-neutral-100">
              Biblioteca do Primo
            </h1>
            <p className="text-xl mb-12 text-neutral-400 leading-relaxed font-light">
              Um espaço para compartilhar conhecimento obtido através da leitura, e onde você pode contribuir compartilhando conhecimento :)
            </p>
            <button
              onClick={scrollToGallery}
              className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors duration-300"
            >
              <span className="text-lg font-light">Explorar Biblioteca</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-[#0B1015]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute left-0 h-[40rem] w-24 z-10">
              <InfiniteSlider direction="vertical" className="h-full" duration={35}>
                <img src="/books/sociedade_cansaco.png" alt="Machado de Assis" className="w-24 h-24 object-cover" />
                <img src="/books/sociedade_cansaco.png" alt="Clarice Lispector" className="w-24 h-24 object-cover" />
                <img src="/books/sociedade_cansaco.png" alt="Guimarães Rosa" className="w-24 h-24 object-cover" />
                <img src="/books/sociedade_cansaco.png" alt="Cecília Meireles" className="w-24 h-24 object-cover" />
              </InfiniteSlider>
            </div>
            <div className="absolute right-0 h-[40rem] w-24 z-10">
              <InfiniteSlider direction="vertical" reverse className="h-full" duration={35}>
                <img src="/books/sociedade_cansaco.png" alt="Carlos Drummond" className="w-24 h-24 object-cover" />
                <img src="/books/sociedade_cansaco.png" alt="Graciliano Ramos" className="w-24 h-24 object-cover" />
                <img src="/books/sociedade_cansaco.png" alt="Jorge Amado" className="w-24 h-24 object-cover" />
                <img src="/books/sociedade_cansaco.png" alt="Mário de Andrade" className="w-24 h-24 object-cover" />
              </InfiniteSlider>
            </div>
            <LampContainer className="h-[40rem] -mb-32">
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-neutral-100 to-neutral-200 py-4 bg-clip-text text-center text-4xl font-light tracking-tight text-transparent md:text-7xl"
              >
                Minha Biblioteca
              </motion.h1>
            </LampContainer>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light mt-32">
              Uma coleção de livros que eu já li nesses últimos anos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {books.map((book) => (
              <div key={book.id} className="group bg-[#151A20] rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-80">
                  <img 
                    src="/books/sociedade_cansaco.png"
                    alt={book.title} 
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 filter grayscale group-hover:filter-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-light text-neutral-100 mb-2">{book.title}</h3>
                      <p className="text-neutral-400 font-light">{book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Recommendation Form Section */}
      <section className="py-24 px-6 bg-[#151A20]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Send className="w-12 h-12 text-neutral-400 mx-auto mb-6" />
            <h2 className="text-5xl font-light text-neutral-100 mb-4">Recomende uma Obra</h2>
            <p className="text-xl text-neutral-400 font-light">
              Compartilhe suas descobertas literárias e contribua para o enriquecimento desta coleção
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8 bg-[#0B1015] p-8 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-neutral-400 mb-2">Nome</label>
              <input
                type="text"
                id="name"
                value={recommendation.name}
                onChange={(e) => setRecommendation({...recommendation, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-[#1A2027] border-0 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-shadow duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-light text-neutral-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={recommendation.email}
                onChange={(e) => setRecommendation({...recommendation, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-[#1A2027] border-0 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-shadow duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="bookTitle" className="block text-sm font-light text-neutral-400 mb-2">Título da Obra</label>
              <input
                type="text"
                id="bookTitle"
                value={recommendation.bookTitle}
                onChange={(e) => setRecommendation({...recommendation, bookTitle: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-[#1A2027] border-0 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-shadow duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-light text-neutral-400 mb-2">Por que recomenda esta obra?</label>
              <textarea
                id="message"
                value={recommendation.message}
                onChange={(e) => setRecommendation({...recommendation, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#1A2027] border-0 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-shadow duration-200 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-neutral-700 text-neutral-100 py-4 px-6 rounded-lg text-lg font-light hover:bg-neutral-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400"
            >
              Enviar Recomendação
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1015] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center">
            <Library className="w-12 h-12 text-neutral-400 mb-6" />
            <h3 className="text-2xl font-light text-neutral-100 mb-4">Biblioteca do Primo</h3>
            <p className="text-neutral-400 text-center max-w-xl mb-8 font-light">
              Um espaço dedicado à literatura, conhecimento e crescimento intelectual
            </p>
            <p className="text-sm text-neutral-500 font-light">
              &copy; {new Date().getFullYear()} Biblioteca do Primo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;