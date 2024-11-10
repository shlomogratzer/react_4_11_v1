
import Layout from './Layout/Layout'
import './App.css'
import AppRouter from './routers/AppRouter'
function App() {

  return (
    <>
      <Layout children={<AppRouter/>}/>
    </>
  )
}

export default App
