const heading1 = React.createElement(
  'h1',
  {
    style: {
      textAlign: 'center',
    },
  },
  'Hello Everyone!'
)
const heading2 = React.createElement(
  'h2',
  {
    style: {
      color: 'white',
      backgroundColor: 'Black',
      textAlign: 'center',
    },
  },
  'Let"s Learn React!'
)
const container = React.createElement('div', { id: 'container' }, [
  heading1,
  heading2,
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)

