import React from 'react';
import ReactDom from 'react-dom';

const App: React.FC =()=>
{
	return (
	<>
		<p>hello,electron!</p>
		<div>hogega</div>
	</>
	)
}

ReactDom.render(<App/>,document.getElementById('App'));

export default App;
