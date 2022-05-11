import  { Footer, Blog, Possibility, Features, whatLeetdata, Header  } from './containers'
import { CTA, Brand, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatLeetdata />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
