import Category from './components/homeComp/Category'
import Discount from './components/homeComp/Discount'
import Hero from './components/homeComp/Hero'
import ImageContainer from './components/homeComp/ImageContainer'
import Products from './components/homeComp/Products'
const Home = () => {
  return (
    <div className='min-h-screen'>
        <Hero/>
        <Discount/>
        <Category/>
        <Products/>
        <ImageContainer/>
    </div>
  )
}

export default Home