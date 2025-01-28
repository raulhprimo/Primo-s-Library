import React, { useState } from 'react';
import { Library, Send, ChevronDown } from 'lucide-react';
import { LampContainer } from './components/ui/lamp';
import { motion } from 'framer-motion';

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
      imageUrl: "/books/babi.jpg"
    },
    {
      id: 3,
      title: "O Pai Rico, Pai Pobre",
      author: "Robert T. Kiyosaki",
      imageUrl: "/books/pairico.jpg"
    },
    {
      id: 4,
      title: "Como Fazer Amigos e Influenciar Pessoas",
      author: "Dale Carnegie",
      imageUrl: "/books/como.jpg"
    },
    {
      id: 5,
      title: "Pense Simples",
      author: "Gustavo Caetano",
      imageUrl: "/books/pense.jpg"
    },
    {
      id: 6,
      title: "Apologética para as questões difíceis da vida",
      author: "William Lane Craig",
      imageUrl: "/books/apo.jpg"
    },
    {
      id: 7,
      title: "1984",
      author: "George Orwell",
      imageUrl: "/books/1984.jpg"
    },
    {
      id: 8,
      title: "A Arte da Guerra",
      author: "Sun Tzu",
      imageUrl: "/books/arte.jpg"
    },
    {
      id: 9,
      title: "Bom Dia, Espírito Santo",
      author: "Benny Hinn",
      imageUrl: "/books/bomdi.jpg"
    },
    {
      id: 10,
      title: "Cartas de um Diabo a seu Aprendiz",
      author: "C.S. Lewis",
      imageUrl: "/books/cartas.jpg"
    },
    {
      id: 11,
      title: "Cristianismo Puro e Simples",
      author: "C.S. Lewis",
      imageUrl: "/books/crist.jpg"
    },
    {
      id: 12,
      title: "O Divórcio",
      author: "C.S. Lewis",
      imageUrl: "/books/divorcio.webp"
    },
    {
      id: 13,
      title: "Discipulado",
      author: "Dietrich Bonhoeffer",
      imageUrl: "/books/discipulado.jpg"
    },
    {
      id: 14,
      title: "O Ego Transformado",
      author: "Timothy Keller",
      imageUrl: "/books/ego.jpg"
    },
    {
      id: 15,
      title: "Pega Leve",
      author: "Davi Lago",
      imageUrl: "/books/pega.jpg"
    },
    {
      id: 16,
      title: "A Revolução dos Bichos",
      author: "George Orwell",
      imageUrl: "/books/revol.jpg"
    },
    {
      id: 17,
      title: "Os quatro amores",
      author: "C.S. Lewis",
      imageUrl: "/books/4.jpg"
    },
    {
      id: 18,
      title: "Template social do antigo testamento",
      author: "Landa Cofe",
      imageUrl: "/books/template.png"
    },
    {
      id: 19,
      title: "Gatilhos Mentais",
      author: "Gustavo Ferreira",
      imageUrl: "/books/gatilhos-mentais.jpg"
    },
    {
      id: 20,
      title: "O Príncipe",
      author: "Nicolau Maquiavel",
      imageUrl: "/books/O-principe.jpg"
    },

    {
      id: 21,
      title: "Habitos Atômicos",
      author: "James Clear",
      imageUrl: "/books/habitos.jpg"
    },

    {
      id: 22,
      title: "Cultura da Honra",
      author: "R.C. Sproul",
      imageUrl: "/books/honra.jpg"
    },

    {
      id: 23,
      title: "O Plano Mestre do Evangelismo",
      author: "Robert E. Coleman",
      imageUrl: "/books/plano.jpg"
    }
  ]);

  const [recommendation, setRecommendation] = useState<BookRecommendation>({
    name: '',
    email: '',
    bookTitle: '',
    message: ''
  });

  const quotes = [
    {
      text: "Há livros escritos para evitar espaços vazios na estante.",
      author: "Carlos Drummond de Andrade"
    },
    {
      text: "A leitura é uma forma de felicidade.",
      author: "Jorge Luis Borges"
    },
    {
      text: "Não existe nada mais fatal para o pensamento que o ensino das respostas certas.",
      author: "Clarice Lispector"
    },
    {
      text: "O conhecimento é a única coisa que ninguém pode tirar de você.",
      author: "B.B. King"
    },
    {
      text: "Quem lê, viaja por mares que outros navegaram.",
      author: "Machado de Assis"
    },
    {
      text: "A literatura é a arte de descobrir algo extraordinário em pessoas comuns.",
      author: "Guimarães Rosa"
    },
    {
      text: "Ler é sonhar pela mão de outrem.",
      author: "Fernando Pessoa"
    },
    {
      text: "Os livros não mudam o mundo, quem muda o mundo são as pessoas. Os livros só mudam as pessoas.",
      author: "Mario Quintana"
    }
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0B1015] text-white overflow-hidden py-16 md:py-0">
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto px-6 gap-12 pt-8 md:pt-0">
          <div className="text-left max-w-2xl">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 ring-4 ring-neutral-800 shadow-2xl mx-auto md:mx-0">
              <img
                src="/raul.jpeg"
                alt="Raul"
                className="w-full h-full object-cover object-center filter grayscale hover:filter-none transition-all duration-300 object-[center_20%]"
              />
            </div>
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
      <section id="gallery" className="py-12 md:py-24 px-4 md:px-6 bg-[#0B1015]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-40 relative">
            <div className="relative">
              <LampContainer className="h-[40rem] -mb-32 hidden md:block">
                <div className="absolute inset-0"></div>
              </LampContainer>
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="mt-8 md:mt-[-20rem] bg-gradient-to-br from-neutral-100 to-neutral-200 py-4 bg-clip-text text-center text-3xl md:text-4xl font-light tracking-tight text-transparent md:text-7xl"
                >
                  Minha Biblioteca
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-12 md:mt-8 max-w-2xl mx-auto text-center px-4"
                >
                  <p className="text-neutral-400 font-light italic text-lg md:text-xl">"{randomQuote.text}"</p>
                  <p className="text-neutral-600 text-sm mt-4">- {randomQuote.author}</p>
                </motion.div>
                <p className="pt-16 md:pt-52 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light px-4 mb-12">
                  Uma coleção de livros que eu já li nesses últimos anos
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {books.map((book) => (
              <div key={book.id} className="group bg-[#151A20] rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-[20rem] md:h-[28rem] flex items-center justify-center overflow-hidden">
                  <img 
                    src={book.imageUrl}
                    alt={book.title} 
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 filter grayscale group-hover:filter-none p-4" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-light text-neutral-100 mb-2">{book.title}</h3>
                      <p className="text-sm md:text-base text-neutral-400 font-light">{book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Recommendation Form Section */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-[#151A20]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <Send className="w-8 h-8 md:w-12 md:h-12 text-neutral-400 mx-auto mb-4 md:mb-6" />
            <h2 className="text-3xl md:text-5xl font-light text-neutral-100 mb-3 md:mb-4">Recomende uma Obra</h2>
            <p className="text-base md:text-xl text-neutral-400 font-light max-w-xl mx-auto px-4">
              Compartilhe suas descobertas literárias e contribua para o enriquecimento desta coleção
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 bg-[#0B1015] p-6 md:p-8 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-neutral-400 mb-2">Nome</label>
              <input
                type="text"
                id="name"
                value={recommendation.name}
                onChange={(e) => setRecommendation({...recommendation, name: e.target.value})}
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#1A2027] border-0 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-shadow duration-200"
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
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#1A2027] border-0 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-shadow duration-200"
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
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#1A2027] border-0 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-shadow duration-200"
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
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#1A2027] border-0 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-shadow duration-200 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-neutral-700 text-neutral-100 py-3 md:py-4 px-4 md:px-6 rounded-lg text-base md:text-lg font-light hover:bg-neutral-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400"
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