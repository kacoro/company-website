import * as React from 'react'
import ListItem from './ListItem'
import { Post } from '../../interfaces'

type Props = {
  items: Post[]
}

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
        <ListItem data={item} />
    ))}
  </ul>
)

export default List
