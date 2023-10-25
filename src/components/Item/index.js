import {Link} from 'react-router-dom'

import './index.css'

const Item = props => {
  const {item} = props
  return (
    <Link to={`/courses/${item.id}`} className="link-item">
      <li className="item-row">
        <img src={item.logo_url} alt={item.name} className="item-img" />
        <p>{item.name}</p>
      </li>
    </Link>
  )
}
export default Item
