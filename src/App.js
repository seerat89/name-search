import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [name, setName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (name) {
      fetch(`https://api.agify.io/?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setAge(data);
        });
      fetch(`https://api.genderize.io?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setGender(data);
        });
      fetch(`https://api.nationalize.io?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setNationality(data);
        });
    }
  };

  return (
    <main>
      <header>
        <h3>Name search utility</h3>
        <p>Find the age, gender and nationality of a name.</p>
      </header>
      <section className="section-searchbox">
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <h2>{age.name && age.name}</h2>
      </section>
      {age.name && <Main age={age} gender={gender} nationality={nationality} />}
      <Footer />
    </main>
  );
}

export default App;
