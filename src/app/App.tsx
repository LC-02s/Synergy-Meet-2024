import { Header, Dock } from '@/widget/header'
import { Intro } from '@/widget/intro'
import { Footer } from '@/widget/footer'
import Provider from './Provider'

export default function App() {
  return (
    <Provider>
      <Header />
      <Intro />
      <Dock />
      <Footer />
    </Provider>
  )
}
