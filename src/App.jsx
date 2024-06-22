import Header from './components/Header';
import Hero from './components/Hero';
import ChatBubble from './components/ChatBubble';
import HeroFirstSection from './components/HeroFirstSection';

function App() {

  return (
    <>
      <div className=' font-quicksand bg-new-white '>
        <Header />
        <Hero />
        <HeroFirstSection />
        <ChatBubble />
      </div>
    </>
  )
}

export default App
