const App = () => {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Ryan" />
      </div>
    );
}

ReactDOM.render(<App/>,
  document.getElementById("root"));