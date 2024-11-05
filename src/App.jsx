import './App.css';
import Basic from './components/Basic';
import Custom from './components/Custom';
import HandlingCustomClick from './components/HandlingCustomClick';

function App() {
  return (
    <div style={{display: 'flex', gap: '30px'}}>
      <Basic />
      <Custom />
      <HandlingCustomClick />
    </div>
  );
}

export default App;
