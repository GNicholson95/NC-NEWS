import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Topics from './components/Topics'
import Home from './components/Home'
import Articles from './components/Articles'
import ArticlePage from './components/ArticlePage'


function App() {

  return (
    <>
    <div className='header'>
      <Header />
      <NavBar />
    </div>
      <Routes>
      <Route path="/" element = {<Home />} /> 
      <Route path="/topics" element={<Topics />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App

