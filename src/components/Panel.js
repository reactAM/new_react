import { useState } from "react";

function Panel() {
	const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
	const path = process.env.PUBLIC_URL;
	const deg = 360/arr.length;	
	const btnStyle = {position: 'fixed', top:0, left:0}	
	let [names, setNames] =useState(arr);	

	return (		
		<>
				{
					names.map((data,index)=>{	
						let style = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}	
						let imgSrc = `${path}/img/${data}.jpg`
				
						return (
							<article key={index} style={style}>
								<div className="inner">
									<div className="pic">
										<img src={imgSrc} />
									</div>
				
									<h2>{data}</h2>				
								</div>
							</article>
						)
					})
				}
		</>				
	)
}

export default Panel;