const Tweet = ({ name, username, date, message }) => {
    return (
      <div className="tweet">
        <p><span><b>{name}</b> <small>@{username} • {date}</small></span></p>
        <p className="message">{message}</p>
      </div>
    );
}
