
import Pagination from './Components/pagination'
import Search from './Components/Search'
import Stories from './Components/stories'
import { useGlobalContext } from './Components/context'
function App() {
  const data = useGlobalContext()
  return (
    <>
    <h1>hello My name is Utkarsh singh{data}</h1>
      <Pagination/>
      <Search />
      <Stories />
    </>
  )
}

export default App
