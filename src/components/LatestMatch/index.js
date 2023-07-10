// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    date,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchData
  return (
    <div className="latest-match-card">
      <div className="upper-cont">
        <div className="upper-cont-1">
          <p className="main-lines">{competingTeam}</p>
          <p className="main-lines">{date}</p>
          <p className="not-main-lines">{venue}</p>
          <p className="not-main-lines">{result}</p>
        </div>
        <div className="upper-cont-2">
          <img
            src={competingTeamLogo}
            className="competing-team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <div className="lower-cont">
        <h1 className="heads">First Innings</h1>
        <p className="not-heads">{firstInnings}</p>
        <h1 className="heads">Second Innings</h1>
        <p className="not-heads">{secondInnings}</p>
        <h1 className="heads">Man Of The Match</h1>
        <p className="not-heads">{manOfTheMatch}</p>
        <h1 className="heads">Umpires</h1>
        <p className="not-heads">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
