/* 
import Button from "./Button";

const arr = [
  'chanchito feliz',
  'chanchito triste',
  'chanchito emocionado',
]
const App = () => {
  const miVariable = false;
  // Reenderizado condicional
  if (miVariable) {
    return <p>Mi variable dio true!</p>
  }

  return (
    <div>
      <h1 onClick={(e) => console.log('click', e)}>Hola Mundo</h1>
      { arr.map(el => <p key={el}>{el}</p> )}
      <Button onClick={() => console.log('clickeado')}>
        Enviar
      </Button>
    </div>
  )
}
*/
import { Component } from "react";

class Button extends Component {
  state = {}
  constructor(props) {
    super(props)
    console.log('constructor', props);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('desmontando componente', this.props, this.state)
  }

  render() {
    console.log('run button render')
    return (
      <button onClick={() => this.setState({ prop: 1 })}>
        Enviar
      </button>
    )
  }
}


class App extends Component {
  // es obligatorio llamarlo "state"
  state = {
    valor: 3
  }
  /* render() se ejecuta bajo 2 condiciones: cuando hubo un cambio en el estado del componente
  el otro motivo es cuando el método render de un componente padre ha sido llamado, por ende, el metodo 
  render de los componentes hijos también serán llamados
 */
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola mundoooooo!!!!!!</p>
        { this.state.valor === 3
          ? <Button chanchito='feliz' />
          : null }
        <button 
          className={`${this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    )
  }
}

export default App;
