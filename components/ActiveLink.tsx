import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'


interface Props  {
    children:any
    activeClassName: string
    href:string
  }
function matchPath(pathname:string,href:string){
   
  if(href == pathname){
    return true
  }else{
    if(href=='/'){
      return false
    }else{
      return !!pathname.match(href)
    }
  }

}
const ActiveLink = ({ children, activeClassName,href, ...props }:Props) => {
  const { pathname } = useRouter()
  const isMatch = matchPath(pathname,href)
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
  isMatch? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={href} as={href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}


export default ActiveLink