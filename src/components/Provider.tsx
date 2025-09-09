// CounterProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'

type CounterState = {
	value: number
}

type CounterMethods = {
	setValue: (v: number) => void
	increase: () => void
	decrease: () => void
}

type CounterContextType = {
	state: CounterState
	methods: CounterMethods
}

const CounterContext = createContext<CounterContextType | undefined>(undefined)

export const CounterProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [value, setValue] = useState<number>(0)

	const increase = () => setValue(prev => prev + 1)
	const decrease = () => setValue(prev => prev - 1)

	const state: CounterState = { value }
	const methods: CounterMethods = { setValue, increase, decrease }

	return (
		<CounterContext.Provider value={{ state, methods }}>
			{children}
		</CounterContext.Provider>
	)
}

export const useCounter = (): CounterContextType => {
	const context = useContext(CounterContext)
	if (!context) {
		throw new Error('useCounter must be used within a CounterProvider')
	}
	return context
}
