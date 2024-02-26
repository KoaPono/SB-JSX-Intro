const App = () => {
    return (
      <div>
        <Tweet
            name="Elon Musk"
            username="elonmusk"
            date={new Date().toDateString()}
            message="About to send people to Mars!"
        />
        <Tweet
            name="Bill Gates"
            username="billgates"
            date={new Date().toDateString()}
            message="I just donated a ton of money!"
        />
        <Tweet
            name="Frodo Baggins"
            username="frodo"
            date={new Date().toDateString()}
            message="I'm taking the ring to Mordor!"
        />
      </div>
    );
}

ReactDOM.render(<App/>,
  document.getElementById("root"));