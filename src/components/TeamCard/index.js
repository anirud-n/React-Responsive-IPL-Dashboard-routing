// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachObj} = props
  const {id, name, teamImageUrl} = eachObj
  return (
    <Link id={id} to={`/team-matches/${id}`} className="each-list">
      <li className="list-item">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
