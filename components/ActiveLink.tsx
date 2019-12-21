import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'


interface Props  {
    children:any
    activeClassName: string
    href:string
  }

const ActiveLink = ({ children, activeClassName,href, ...props }:Props) => {
  const { pathname } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    pathname === href 
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}


export default ActiveLink