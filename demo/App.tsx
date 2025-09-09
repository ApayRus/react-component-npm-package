import React from 'react'
import { CounterProvider, useCounter } from '../src/components/Provider'
import './App.css'

// Component for demonstrating CounterProvider usage
const CounterDemo: React.FC = () => {
	const { state, methods } = useCounter()

	return (
		<div className='counter-demo'>
			<h2>Counter Demo</h2>
			<div className='counter-display'>
				<span className='counter-value'>Current value: {state.value}</span>
			</div>
			<div className='counter-controls'>
				<button onClick={methods.decrease} className='btn btn-decrease'>
					-1
				</button>
				<button onClick={() => methods.setValue(0)} className='btn btn-reset'>
					Reset
				</button>
				<button onClick={methods.increase} className='btn btn-increase'>
					+1
				</button>
			</div>
			<div className='counter-actions'>
				<button onClick={() => methods.setValue(10)} className='btn btn-set'>
					Set to 10
				</button>
				<button onClick={() => methods.setValue(-5)} className='btn btn-set'>
					Set to -5
				</button>
			</div>
		</div>
	)
}

// Main application component
const App: React.FC = () => {
	return (
		<div className='app'>
			<header className='app-header'>
				<h1>React Package Demo</h1>
				<p>Demonstration of CounterProvider with hot reload</p>
			</header>

			<main className='app-main'>
				<CounterProvider>
					<CounterDemo />
				</CounterProvider>

				<div className='info-section'>
					<h3>Component Information</h3>
					<ul>
						<li>
							<strong>CounterProvider</strong> - React Context Provider for
							managing counter state
						</li>
						<li>
							<strong>useCounter</strong> - hook for accessing counter state and
							methods
						</li>
						<li>
							<strong>State:</strong> value (number)
						</li>
						<li>
							<strong>Methods:</strong> setValue, increase, decrease
						</li>
						<li>
							Changes in <code>src/components/Provider.tsx</code> automatically
							update this page
						</li>
					</ul>
				</div>
			</main>
		</div>
	)
}

export default App
