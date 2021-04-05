function Person(props) {
  const {name, age, hobbies} = props;

  return (
    <div>
      <p>Learn some information about this person.</p>
      <h3>{name.length > 8 ? name.slice(0,6) : name} </h3>
      <h3> {age > 18 ? "please go vote!" : "you must be 18."} </h3>
      <ul>
        {hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
    </div>
  )
} 
