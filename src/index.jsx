import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Browser } from './App'

// Mount App component if root element exists (Calculator.html)
const rootElement = document.getElementById('root');
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}

// Mount Browser component if root2 element exists (Browser.html)
const root2Element = document.getElementById('root2');
if (root2Element) {
	ReactDOM.createRoot(root2Element).render(
		<React.StrictMode>
			<Browser />
		</React.StrictMode>
	)
}