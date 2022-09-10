import Notestate from './context/notes/Notestate';
import AppRoutes from './routes';

function App() {
  return (
    <Notestate>
      <AppRoutes />
    </Notestate >
  );
}

export default App;
