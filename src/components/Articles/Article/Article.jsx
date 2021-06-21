import React from 'react';
import '../../../styles/SCSS/Article.scss';

const Article = props => {

	const onClick = () => window.open(props.url,'');
	
    return (
        <article className="article" onClick={onClick}>
			<div/>
			<section>
				<h3>{props.title}</h3>
				<time>{props.date}</time>
			</section>
        	<img className="post-image" src={props.img} alt={props.title}/>
        </article>
    )
}

export default Article;