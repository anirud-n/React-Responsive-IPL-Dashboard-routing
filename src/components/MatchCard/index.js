// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachObj} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = eachObj
  console.log(competingTeamLogo)
  return (
    <li className="each-card-bg">
      <img
        src={competingTeamLogo}
        className="each-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="teams-name">{competingTeam}</p>
      <p className="teams-result">{result}</p>
      <p
        className={
          matchStatus === 'Won' ? 'teams-win-status' : 'teams-lost-status'
        }
      >
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
