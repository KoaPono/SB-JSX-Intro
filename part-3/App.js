const App = () => {
    return (
        <div>
            <Person name="Grant" age={18} hobbies={["soccer", "guitar", "hiking"]} />
            <Person name="Melissa" age={17} hobbies={["reading", "swimming", "biking"]} />
            <Person name="Frank" age={20} hobbies={["painting", "dancing", "cooking"]} />
        </div>
    );
}

ReactDOM.render(<App/>,
  document.getElementById("root"));