import React, { useState } from 'react'

const Task2 = () => {
	const [flag,setFlag] = useState(true);
	const[btnval,setBtnVal] = useState('hide');
	const displayContent = () => {
		setFlag(!flag);
		if(flag){
			setBtnVal('show');
		}else{
			setBtnVal('hide');
		}	
	}
	return (
		<div>
			<div className="container"> 
			<button onClick={displayContent}>{btnval}</button>
			{flag ? 
					<div>
					<h3>Welcome tejaswini</h3>
					<p>Tejaswini is working at Cyber Infrastructure</p>
				</div>
				: null
				}
			</div>
		</div>
	)
}

export default Task2