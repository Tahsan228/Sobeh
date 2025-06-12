import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Browser } from './App'

const rootElement = document.getElementById('root');
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}

const root2Element = document.getElementById('root2');
if (root2Element) {
	ReactDOM.createRoot(root2Element).render(
		<React.StrictMode>
			<Browser />
		</React.StrictMode>
	)
}