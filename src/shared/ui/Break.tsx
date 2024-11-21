import React from 'react'

interface BreakProps {
  children: string
  wrapper?: React.FC<React.PropsWithChildren>
}

export default function Break({ children, wrapper }: BreakProps) {
  const Wrapper = wrapper ?? React.Fragment
  const text = children.split('\n')

  return text.map((separated, idx) => (
    <Wrapper key={`${separated}-${idx}`}>
      {separated}
      {idx !== text.length - 1 && <br />}
    </Wrapper>
  ))
}
