import { Route,Routes } from "react-router-dom"
import UserComp from "../components/userComp/UserComp"
import ErrorPage from "../components/error/ErrorPage"

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/users/*" element={<UserComp/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter
