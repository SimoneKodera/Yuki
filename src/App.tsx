import { RoutePage, SideMenu } from './routes';
import './App.scss';
import '../src/styles/global.scss';

function App() {
  return (
    <div className="App">
      <aside> 
        <SideMenu />
      </aside>
      <main>
        <RoutePage />
      </main>
    </div>
  );
}

export default App;
