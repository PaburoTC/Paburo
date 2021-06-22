import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import store from '../../services/redux/store';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Article from './Article/Article';
import {nanoid} from 'nanoid';
import {
	fetchArticlesPending,
	fetchArticlesSuccess
} from "../../services/redux/articles/actions"
import '../../styles/SCSS/Articles.scss';

const Articles = (props)=>{


	const fetchArticlesInit = dispatch => {
		dispatch(fetchArticlesPending());
	}

	const fetchArticles = async (dispatch) => {
		const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40pablotcampos25')
		dispatch(fetchArticlesSuccess(response.data.items))
	}

	useEffect(()=>{
		fetchArticlesInit(store.dispatch);
		fetchArticles(store.dispatch);
	}, [])

	return(
		<React.Fragment>
			{props.state.articles.pending ?
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
			  	</Spinner>:
				<section id="articles">
					<span>
						<h1>Articles</h1>
						<p>
							Teaching is considered by many one of the best ways to consolidate knowledge. Not only that, but it is also one of the few activities of which I know that
							is net positive for all parties involved! My readers get the chance to learn something new while I keep record of my new learnings and findings, 
							strengthening my understanding of them in the process.
						</p>
					</span>
					<div>
						{props.state.articles.articles.map(article=> {
							return <Article key={nanoid()} title={article.title} img={article.thumbnail} url={article.link} date={article.pubDate.split(" ")[0]}/>
						})}
					</div>
				</section>
			}
		</React.Fragment>
	)
}

const matStateToProps = state => ({state:state})
const connectedApp = connect(matStateToProps, {})(Articles)
export default connectedApp;
