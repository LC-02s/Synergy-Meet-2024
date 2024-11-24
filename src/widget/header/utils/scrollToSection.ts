export function scrollToSection(href: string) {
  const sectionEl = document.querySelector<HTMLElement>(href)

  if (!sectionEl) return

  window.scrollTo({ top: sectionEl.offsetTop, behavior: 'smooth' })
  window.history.pushState({ top: sectionEl.offsetTop }, href, href)
}

export function scrollToSectionFactor(
  href: string,
  handler?: React.MouseEventHandler<HTMLAnchorElement>,
) {
  const isHash = !!href && href.startsWith('#')

  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isHash) {
      event.preventDefault()
      scrollToSection(href)
    }

    handler?.(event)
  }
}
