import React from 'react';



const Picture = (props) =>{
	console.log(props.src);
	return(
		<img src={props.src} alt={props.alt} />

		)
}


export default Picture
