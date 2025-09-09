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

					<div className='github-link'>
						<a
							href='https://github.com/ApayRus/react-component-npm-package'
							target='_blank'
							rel='noopener noreferrer'
							className='github-button'
						>
							<svg
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='github-icon'
							>
								<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
							</svg>
							View on GitHub
						</a>
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
