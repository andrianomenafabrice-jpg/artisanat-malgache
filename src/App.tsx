import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import ProductDetail from './pages/ProductDetail'
import ArtisanDetail from './pages/ArtisanDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-raffia dark:bg-nofy text-ink dark:text-raffia transition-colors duration-500">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/produit/:id" element={<ProductDetail />} />
            <Route path="/artisan/:id" element={<ArtisanDetail />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App