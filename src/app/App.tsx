import { Header, Dock } from '@/widget/header'
import { Intro } from '@/widget/intro'
import { Footer } from '@/widget/footer'
import { Global } from '@emotion/react'
import { globalStyle } from './App.style'
import Provider from './Provider'

export default function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Provider>
        <Header />
        <Intro />
        <Dock />
        <Footer />
      </Provider>
    </>
  )
}
