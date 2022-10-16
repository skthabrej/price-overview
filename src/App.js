import ReviewsCarousel from './components/ReviewsCarousel'
import './App.css'

const reviewsData = [
  {
    imgUrl: 'https://i.ibb.co/tzmx8NT/vksd-vsv.webp',
    Price: '1899/-',
    Brand: 'Levi`s',
    description:
      'trusted for innovation, quality, performance, durability, style, fit and more.',
  },
  {
    imgUrl: 'https://i.ibb.co/kgRDGhp/upload9223368955665729970.jpg',
    Price: '1999/-',
    Brand: 'Superdry',
    description:
      'world leading hand-drawn graphics and tailored fits with diverse styling.',
  },
  {
    imgUrl: 'https://i.ibb.co/LxrQS8J/0985fc7313b663eeb19ed9354475a015.jpg',
    Price: '1989/-',
    Brand: 'French Connection',
    description:
      'Tough, gritty,high quality/stylish products, and realistic',
  },
  {
    imgUrl: 'https://i.ibb.co/LND5QHr/nike-m-nk-df-tee-jdi.webp',
    Price: '2599/-',
    Brand: 'Nike',
    description:
      'nnovative technology, high quality/stylish products,regionally involved, and globally responsible.',
  },
]

const App = () => <ReviewsCarousel reviewsData={reviewsData} />

export default App