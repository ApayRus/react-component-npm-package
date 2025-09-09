import React from 'react'
import { CounterProvider, useCounter } from '../src/components/Provider'
import './App.css'

// Компонент для демонстрации использования CounterProvider
const CounterDemo: React.FC = () => {
  const { state, methods } = useCounter()

  return (
    <div className="counter-demo">
      <h2>Counter Demo</h2>
      <div className="counter-display">
        <span className="counter-value">Текущее значение: {state.value}</span>
      </div>
      <div className="counter-controls">
        <button onClick={methods.decrease} className="btn btn-decrease">
          -1
        </button>
        <button onClick={() => methods.setValue(0)} className="btn btn-reset">
          Сброс
        </button>
        <button onClick={methods.increase} className="btn btn-increase">
          +1
        </button>
      </div>
      <div className="counter-actions">
        <button 
          onClick={() => methods.setValue(10)} 
          className="btn btn-set"
        >
          Установить 10
        </button>
        <button 
          onClick={() => methods.setValue(-5)} 
          className="btn btn-set"
        >
          Установить -5
        </button>
      </div>
    </div>
  )
}

// Главный компонент приложения
const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Package Demo</h1>
        <p>Демонстрация работы CounterProvider с hot reload</p>
      </header>
      
      <main className="app-main">
        <CounterProvider>
          <CounterDemo />
        </CounterProvider>
        
        <div className="info-section">
          <h3>Информация о компоненте</h3>
          <ul>
            <li><strong>CounterProvider</strong> - React Context Provider для управления состоянием счетчика</li>
            <li><strong>useCounter</strong> - хук для доступа к состоянию и методам счетчика</li>
            <li>Изменения в <code>src/components/Provider.tsx</code> автоматически обновляют эту страницу</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App


