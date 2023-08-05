import SODState from './context/selectedOrderDetails/SODState'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <SODState>
        <Dashboard />
      </SODState>
    </>
  )
}

export default App
