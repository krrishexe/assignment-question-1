import SODState from './context/selectedOrderDetails/SODState'
import SOTState from './context/selectedOrderTimeStamps/SOTState'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <SODState>
        <SOTState>
        <Dashboard />
        </SOTState>
      </SODState>
    </>
  )
}

export default App
