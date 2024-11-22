import { motion } from 'motion/react'
import { ADDRESS } from '@/shared/constants'
import { useBreakpoint } from '@/shared/hooks'
import { Break, Button, buttonCSS, buttonVariable, Icon } from '@/shared/ui'
import { DIRECTION_URL } from '../constants'
import { toolbarStyle } from './GuideMap.style'

interface ToolBarProps {
  isDisabled: boolean
  toggleDisabled: () => void
}

export default function ToolBar({ isDisabled, toggleDisabled }: ToolBarProps) {
  const md = useBreakpoint('md')
  const sm = useBreakpoint('sm')

  return (
    <motion.div
      initial={{ y: '-48%', opacity: 0 }}
      whileInView={{ y: '0%', opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.2, delay: 0.4 }}
      viewport={{ once: true }}
      css={toolbarStyle}
    >
      <p>
        <Icon.MapPoint />
        <Break>{ADDRESS}</Break>
      </p>
      <div>
        <Button
          title={isDisabled ? '지도 켜기 (지도 활성화)' : '지도 끄기 (지도 비활성화)'}
          variant={md ? 'filled' : 'subtle'}
          size={sm ? 'md' : 'lg'}
          onClick={toggleDisabled}
        >
          {isDisabled ? '지도 켜기' : '지도 끄기'}
        </Button>
        <a
          href={DIRECTION_URL}
          title="새창이동: 네이버 지도 길찾기 바로가기"
          target="_blank"
          rel="noreferrer"
          style={buttonVariable({ variant: 'filled', color: 'cyan', size: sm ? 'md' : 'lg' })}
          css={buttonCSS}
        >
          <Icon.PointOnMap />
          <span>길 찾기</span>
        </a>
      </div>
    </motion.div>
  )
}
