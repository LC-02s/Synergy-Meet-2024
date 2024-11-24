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
  return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href && href.startsWith('#')) {
      event.preventDefault()
      scrollToSection(href)
    }

    handler?.(event)
  }
}
