import * as React from 'react';
import './style.css';
const person = {
  name: 'Chimmy',
  age: 3,
  gender: 'Female',
};

export default function App() {
  let [x, setA] = React.useState<number>(0);

  const handleClick = () => {
    setA(++x);
    console.log(x, 'Mewo');
    if (x === 12) {
      alert('STOP CLICKING ME MEOW!!!');
      x = 0;
    }
  };

  const isMale = person.gender === 'Male';

  const style1 = {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 24,
  };

  const style2 = {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 14,
  };

return (
    <div>
      <form onSubmit={handleClick}>
        <input></input>
        <button type="submit">Submit!</button>
      </form>
      <div>
        <h1 className={isMale ? 'blue' : 'red'}>
          Hello {isMale ? 'Mr.' : 'Ms.'} {person['name']}!
        </h1>
        <p style={style2}>You have click {x} times.</p>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  );
}
