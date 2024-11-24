import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'

export const menuItemStyle = css`
  display: block;
  & + & {
    margin: 0rem 0rem 0rem 0.5rem;
    @media ${$variable.breakpoint.md} {
      margin: 0.5rem 0rem 0rem;
    }
  }
  @media ${$variable.breakpoint.xs} {
    margin: 0.25rem 0rem 0rem !important;
  }
  & > a {
    display: block;
    padding: 0.25rem 0.5rem;
    font-size: ${$variable.font.size300};
    font-weight: ${$variable.font.medium};
    color: ${$variable.color.gray000};
    white-space: nowrap;
    opacity: 0.6;
    transition: opacity 0.2s ease-in-out;
    &:focus,
    &:hover,
    &:active {
      opacity: 1;
    }
    @media ${$variable.breakpoint.md} {
      opacity: 1;
    }
  }
`

export const menuStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${$variable.breakpoint.md} {
    display: none;
  }
`

export const menuMobileStyle = css`
  position: relative;
  z-index: 99999;
  & > button {
    position: relative;
    display: block;
    padding: 0.25rem;
    cursor: pointer;
    transform: rotate(180deg);
    & > p {
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      background: transparent;
      & > span {
        position: absolute;
        left: 0;
        display: block;
        width: 100%;
        height: 0.125rem;
        border-radius: 0.25rem;
        background: ${$variable.color.gray000};
        opacity: 1;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        &:nth-of-type(1) {
          top: 0.25rem;
          transform-origin: left center;
        }
        &:nth-of-type(2) {
          top: 50%;
          transform: translateY(-50%);
          transform-origin: left center;
        }
        &:nth-of-type(3) {
          top: calc(100% - 0.25rem);
          transform-origin: left center;
          transform: translateY(-100%);
        }
      }
      &.open > span {
        &:nth-of-type(1) {
          transform: rotate(45deg);
          top: 0.125rem;
          left: 14%;
        }
        &:nth-of-type(2) {
          width: 0%;
          opacity: 0;
        }
        &:nth-of-type(3) {
          transform: translateY(-50%) rotate(-45deg);
          top: calc(100% - 0.25rem);
          left: 14%;
        }
      }
    }
  }
  & > nav {
    position: absolute;
    top: 2.5rem;
    right: 0rem;
    width: 12rem;
    padding: 0.5rem;
    border: 1px solid ${$variable.color.floatingBoxBorder};
    border-radius: 0.5rem;
    background-color: ${$variable.color.floatingBoxBackground};
    backdrop-filter: blur(4px) saturate(120%);
    overflow: hidden;
    @media ${$variable.breakpoint.xs} {
      width: 14.25rem;
    }
    & > ul > li:last-of-type {
      @media ${$variable.breakpoint.xs} {
        margin: 0.75rem 0rem 0rem;
      }
    }
  }
`
