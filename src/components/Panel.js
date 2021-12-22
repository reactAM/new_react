import { useState } from "react";

function Panel() {
	const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
	const path = process.env.PUBLIC_URL;
	const deg = 360/arr.length;	
	const btnStyle = {position: 'fixed', top:0, left:0}
	
	/*
	useState hook을 이용하면 state로 자주 변경되는 값을 관리가능
	state값이 변경되면 해당 state값의 영향을 받는 모든 JSX가 자동으로 재 랜더링됨
	useState()함수에 관리할 값을 인수로 넣어서 실행하면 리턴으로 배열값이 반환됨
	첫번째 배열 반환값에는 state,
	두번째 배열 반환값에는 해당 state를 변경할 수 있는 함수

	state의 값 변경은 무조건 state변경 함수로만 변경가능
	*/

	//useState함수로 arr배열을 인수로 넣어서 names란 변수에는 state값을 받고, setNames변수에는 수정 함수값 저장
	let [names, setNames] =useState(arr);

	//이벤트에 등록할 함수 정의
	const changeState=()=>{
		//기존의 배열을 전개 연산자를 이용하여 새로운 배열로 복사
		let newArr = [...arr];
		//복사된 새로운 배열의 첫번째 값을 변경
		newArr[0] = 'Escape';
		//setNames라는 state변경 전용함수로 위에서 만든 새로운 배열값으로 state값을 바꿔치기
		setNames(newArr);
		//해당 함수가 실행되면 state값이 변경되면서 해당 state를 활용한 모든 가상DOM에 반영되어 재 랜더링됨
	}
	

	return (		
		<>
			<button style={btnStyle} onClick={changeState}>button</button>
			<section>
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
			</section>
		</>				
	)
}

export default Panel;