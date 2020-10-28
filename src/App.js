import './App.css';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './redux/actions';

function App({ plus, minus, countResult, pesan }) {
  return (
    <div className="App">
      <button onClick={() => plus("TAMBAHssdsdad")}>+</button>
      &nbsp;{countResult}&nbsp;
      <button onClick={() => minus("KURANGGGG")}>-</button>
      <br />{pesan}
    </div >
  );
}

const mapStateToProps = (state) => ({
  countResult: state.count,
  pesan: state.parameter
})

const mapDispatchToProps = {
  plus: (data) => incrementAction(data),
  minus: (data) => decrementAction(data)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)