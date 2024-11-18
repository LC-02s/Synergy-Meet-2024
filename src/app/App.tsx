import { Header, Dock } from '@/widget/header'
import { Intro } from '@/widget/intro'
import { Keyword } from '@/widget/keyword'
import { Footer } from '@/widget/footer'
import Provider from './Provider'

export default function App() {
  return (
    <Provider>
      <Header />
      <Intro />
      <Keyword />
      <Dock />
      <Footer />
    </Provider>
  )
}
