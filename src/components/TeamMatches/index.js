// Write your code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    latestMatchData: {},
    recentMatchesData: [],
    teamBannerUrl: '',
    isFetched: false,
  }

  componentDidMount() {
    this.getData()
  }

  formatData = newArray => {
    const updatedArray = newArray.map(eachObj => ({
      competingTeam: eachObj.competing_team,
      competingTeamLogo: eachObj.competing_team_logo,
      date: eachObj.date,
      firstInnings: eachObj.first_innings,
      id: eachObj.id,
      manOfTheMatch: eachObj.man_of_the_match,
      matchStatus: eachObj.match_status,
      result: eachObj.result,
      secondInnings: eachObj.second_innings,
      umpires: eachObj.umpires,
      venue: eachObj.venue,
    }))
    return updatedArray
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const recentMatchDetails = data.latest_match_details

    const updatedRecentMatch = {
      competingTeam: recentMatchDetails.competing_team,
      competingTeamLogo: recentMatchDetails.competing_team_logo,
      date: recentMatchDetails.date,
      firstInnings: recentMatchDetails.first_innings,
      id: recentMatchDetails.id,
      manOfTheMatch: recentMatchDetails.man_of_the_match,
      matchStatus: recentMatchDetails.match_status,
      result: recentMatchDetails.result,
      secondInnings: recentMatchDetails.second_innings,
      umpires: recentMatchDetails.umpires,
      venue: recentMatchDetails.venue,
    }
    const otherRecentMatches = data.recent_matches
    const updatedOtherRecentMatches = this.formatData(otherRecentMatches)
    const teamBannerUrl = data.team_banner_url

    this.setState({
      latestMatchData: updatedRecentMatch,
      recentMatchesData: updatedOtherRecentMatches,
      teamBannerUrl,
      isFetched: true,
    })
  }

  render() {
    const {
      latestMatchData,
      recentMatchesData,
      teamBannerUrl,
      isFetched,
    } = this.state
    return (
      <div className="bg-conts">
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        <div>
          <h1 className="headings">Latest Matches</h1>
        </div>

        {isFetched ? (
          <div>
            <LatestMatch latestMatchData={latestMatchData} />
            <ul className="bottom-list-cont">
              {recentMatchesData.map(eachObj => (
                <MatchCard eachObj={eachObj} key={eachObj.id} />
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={30} width={30} />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
