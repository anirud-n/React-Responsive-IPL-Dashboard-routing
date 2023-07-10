// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsList: [],
    isFetched: false,
  }

  componentDidMount() {
    this.getData()
  }

  formattedData = data => {
    const updatedData = data.teams.map(eachObj => ({
      name: eachObj.name,
      id: eachObj.id,
      teamImageUrl: eachObj.team_image_url,
    }))
    return updatedData
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = this.formattedData(data)
    this.setState({
      teamsList: updatedData,
      isFetched: true,
    })
  }

  render() {
    const {teamsList, isFetched} = this.state
    return (
      <div className="bg-cont">
        <ul className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="ipl-text">IPL Dashboard</h1>
        </ul>
        {isFetched ? (
          <ul className="list-cont">
            {teamsList.map(eachObj => (
              <TeamCard eachObj={eachObj} key={eachObj.id} />
            ))}
          </ul>
        ) : (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={30} width={30} />
          </div>
        )}
      </div>
    )
  }
}

export default Home
