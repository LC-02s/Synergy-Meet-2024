import type { EmotionCache } from '@emotion/cache'
import { Header, Dock } from '@/widget/header'
import { Intro } from '@/widget/intro'
import { Introduce } from '@/widget/introduce'
import { GuideMap } from '@/widget/guide-map'
import { FrequentlyAskedQuestions as FAQuestions } from '@/widget/frequently-asked-questions'
import { Keyword } from '@/widget/keyword'
import { Footer } from '@/widget/footer'
import { OverlayViewer } from '@/shared/hooks'
import Provider from './Provider'

interface ApplicationProps {
  cache: EmotionCache
}

export default function App({ cache }: ApplicationProps) {
  return (
    <Provider cache={cache}>
      <Header />
      <Intro />
      <Introduce />
      <GuideMap />
      <FAQuestions />
      <Keyword />
      <Dock />
      <Footer />
      <OverlayViewer />
    </Provider>
  )
}
