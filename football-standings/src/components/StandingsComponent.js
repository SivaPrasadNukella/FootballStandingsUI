import React from 'react';
import StandingsService from '../services/StandingsService';

class StandingsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            teams:[]
        }
    }

    componentDidMount() {
        StandingsService.getStandings().then((response) => {
            this.setState({ teams: response.data })
        });
    }

    render() {
        return (
            <div>
                <table align="center">
					<tbody>
					<tr>
						<td><h3 className="text-center"><b>PREMIER LEAGUE STANDING TABLE</b></h3></td>
					</tr>
                    <tr>
                        <td><h4 className="text-center"><a href={this.state.teams.filter(team => team.matchesUrl != null).map(obj => 
						
                            obj.matchesUrl
						
						)}>Latest Matches</a></h4></td>
					</tr>
					</tbody>
				</table>
                <table align="center">
                    <thead>
                        <tr>
                            <td><b>#</b></td>
                            <td><b>Club</b></td>
                            <td><b>M</b></td>
                            <td><b>W</b></td>
                            <td><b>D</b></td>
                            <td><b>L</b></td>
                            <td><b>Pt</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.teams.map(
                                team =>
                                    <tr key={team.rank}>
										<td>{team.rank}</td>
										<td>
										<table className="table">
											<tr>
												<td>
													<a href={team.url}> <img src={team.imageUrl} width="40" height="40" /> </a>
												</td>
												<td><a href={team.url}> {team.club} </a></td>
											</tr>
										</table>
										</td>
                                        <td>{team.matches}</td>
                                        <td>{team.win}</td>
                                        <td>{team.draw}</td>
                                        <td>{team.lost}</td>
                                        <td>{team.points}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        )
    }
	
}

export default StandingsComponent;