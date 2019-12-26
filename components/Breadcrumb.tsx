
import Link from 'next/link'
import {BreadcrumbType} from '../interfaces'
type Props = {
  data: BreadcrumbType[]
}

function Breadcrumb({data}:Props){

    return(
        <nav aria-label="breadcrumb ">
            <ol className="breadcrumb bg-transparent">
              <li className="breadcrumb-item"><Link href="/">
                <a>Home</a>
              </Link></li>
              {data.map((item,i)=>{
                if(i!==data.length-1 && item.href){
                  return <li className="breadcrumb-item"><Link href={item.href}>
                    <a>{item.name}</a>
                  </Link></li>
                }else{
                  return <li className="breadcrumb-item active" aria-current="page">{item.name}</li>
                }
              })}
            </ol>
          </nav>
    )
}

export default Breadcrumb