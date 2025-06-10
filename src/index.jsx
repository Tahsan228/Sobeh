import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Browser } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root2')).render(
	<React.StrictMode>
		<Browser />
	</React.StrictMode>
)