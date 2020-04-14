import React from 'react'
import Login from './views/login'
import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

//retorna um código JSX JavaScriptXML "HTML"
class App extends React.Component {
  render() {
    return(
    <div>
        <Login />
    </div>
    )
  }
}

//exportando esse componente para que possa importar em outros arquivos
export default App;