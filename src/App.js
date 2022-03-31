import './App.css';
import gitHublogo from './assets/GitHub.png';

function App() {
  return (
    <main>
      <header>
        <h3>Name search utility</h3>
        <p>Find the age, gender and nationality of a name.</p>
      </header>
      <section className="section-searchbox">
        <form>
          <input type="text" name="search" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
        <h2>Timo</h2>
      </section>
      <section className="section-main">
        <div>
          <h3>Age</h3>
          <ul>
            <li>Age:</li>
            <li>Count:</li>
          </ul>
        </div>
        <div>
          <h3>Gender</h3>
          <ul>
            <li>Gender:</li>
            <li>Probability:</li>
            <li>Count:</li>
          </ul>
        </div>
        <div>
          <h3>Nationality</h3>
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Probability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Finland</td>
                <td>90%</td>
              </tr>
              <tr>
                <td>USA</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Denmark</td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <footer>
        <span>
          <a
            href="https://github.com/seerat89/random-advice-generator"
            rel="noreferrer"
            target="_blank"
          >
            <img src={gitHublogo} alt="GitHub Logo" />
          </a>
        </span>
      </footer>
    </main>
  );
}

export default App;
