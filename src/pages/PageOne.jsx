import { useState } from "react"
import { Link } from "react-router-dom"

const PageOne = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button onClick={() => setValue((prev) => prev + 1)} style={{border:'2px solid #0000'}}>
        INCREMENT
      </button>
      <Link to="/page-two" state={value}>Page Two</Link>
    </div>
  )
}

export default PageOne