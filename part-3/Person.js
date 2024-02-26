const Person = ({name, age, hobbies}) => {
    const message = age >= 18 ? "please go vote!" : "you must be 18";
    const displayName = name.length > 8 ? name.substring(0, 6) : name;
    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div className="person">
            <p>Learn some information about this person</p>
            <h3>{message}</h3>
            <p>{displayName} is {age} years old</p>
            <p>Hobbies:</p>
            <ul>
                {hobbiesLIs}
            </ul>
        </div>
    );
}