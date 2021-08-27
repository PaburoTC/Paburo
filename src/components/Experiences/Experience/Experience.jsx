import React from 'react';
import '../../../styles/SCSS/Experience.scss';
import {nanoid} from 'nanoid';

const Experience = (props) => {
	console.log(props.children)
	return(
		<article className='experience'>
			<img src={props.company.logo} alt={props.company.name}/>
			<section>
				<section className='experience-title'>
					<h2>{props.role} at {props.company.name}</h2>
					<h3>{props.start_date} - {props.end_date}</h3>
				</section>
				<section className='experience-achievements'>
					{props.achievements.map(achievement => 
						<div>
							<div/>
							<p key={nanoid()}>{achievement.achievement}</p>
						</div>
						)}
				</section>
			</section>
		</article>
	)
}

export default Experience;