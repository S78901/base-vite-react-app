import './App.css'
import Options from './components/Options';
import data from './data/sampledata.json';

function App() {
  return (
    <Options data={data} />
  )
}

export default App;
