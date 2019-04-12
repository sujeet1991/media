import React from 'react';

const title=React.memo(function MyComponent(props){
	return (
		<React.Fragment>
			<h1 className="title-book" style={{'color':'#6561CD'}}>{props.name}</h1>
		</React.Fragment>
	)
})

export default title;