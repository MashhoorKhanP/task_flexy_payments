import { useLocation } from "react-router-dom"

const PageTwo = () => {
  const location = useLocation();
  const value = location.state;
  return (
    <div>PageTwo {value}</div>
  )
}

export default PageTwo