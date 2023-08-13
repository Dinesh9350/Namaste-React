import React from 'react'
import ReactDOM from 'react-dom/client'

//React Expression
const title = <h1>React.JS</h1>

//React Component
const Topics = () => (
  <div>
    <h2>Hooks</h2>
    <h2>Forms Api</h2>
    <h2>Redux Toolkit</h2>
  </div>
)
//Alternative way of react component
// const Topics = () => {
//   return (
//     <div>
//       <h2>Hooks</h2>
//       <h2>Forms Api</h2>
//       <h2>Redux Toolkit</h2>
//     </div>
//   )
// }

const ReactComponent = () => {
  return (
    <div key='heading'>
      {title}
      <Topics />
      {/* {Topics()} */}
      <h3>React Component</h3>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ReactComponent />)
