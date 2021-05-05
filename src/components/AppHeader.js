import logo from "../images/logo.png";

const styles = {
  image: {
    width: "200px",
    height: "200px",
    margin: "20px"
  }
};

const AppHeader = () => {
  return (
    <header>
      <div className="ph">
        <img src={logo} alt="logo" style={styles.image} />
        <h2>React-Redux-App</h2>
      </div>
    </header>
  );
};

export default AppHeader;
