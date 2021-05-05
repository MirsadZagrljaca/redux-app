import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const App = () => {
  return (
    <div className="container">
      <AppHeader />
      <div className="wrapper">
        <div className="left">
          <SongList />
        </div>
        <div className="right panel">
          <SongDetail />
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default App;
