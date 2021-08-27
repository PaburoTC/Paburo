import React, {useEffect} from 'react';
import axios from '../../services/axios/axios';
import {connect} from 'react-redux';
import store from '../../services/redux/store';
import Spinner from 'react-bootstrap/Spinner';
import Experience from './Experience/Experience';
import {nanoid} from 'nanoid';
import {
	fetchExperiencesPending,
	fetchExperiencesSuccess
} from '../../services/redux/experiences/actions'
import '../../styles/SCSS/Experiences.scss';

const Experiences = (props) => {

	const fetchExperiencesInit = dispatch => {
		dispatch(fetchExperiencesPending());
	}

	const fetchExperiences = async (dispatch) => {
		const response = await axios.get('/experiences')
		dispatch(fetchExperiencesSuccess(response.data))
	}

	useEffect(()=>{
		fetchExperiencesInit(store.dispatch);
		fetchExperiences(store.dispatch);
	}, [])

	return(
		<section id="experiences">
			<div>
				{props.state.experiences.pending ? 
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
					:
					<React.Fragment>
						{props.state.experiences.experiences.map(experience=> {
							return <Experience 	key={nanoid()} 
												company={experience.company}
												role={experience.role}
												start_date={experience.start_date}
												end_date={experience.end_date}
												achievements={experience.achievements}
									>
									</Experience>
						})}
					</React.Fragment>
				}
			</div>
		</section>
	)
}

const matStateToProps = state => ({state:state})
const connectedApp = connect(matStateToProps, {})(Experiences)
export default connectedApp;

