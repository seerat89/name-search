import React from 'react';
import countries from '../assets/countries.json';

export default function Main(props) {
  const { age, gender, nationality } = props;

  return (
    <section className="section-main">
      <div>
        <h3>Age</h3>
        {age && (
          <ul>
            <li>Age: {age.age}</li>
            <li>Count: {age.count}</li>
          </ul>
        )}
      </div>
      <div>
        <h3>Gender</h3>
        {gender && (
          <ul>
            <li>Gender: {gender.gender}</li>
            <li>Probability: {gender.probability}</li>
            <li>Count: {gender.count}</li>
          </ul>
        )}
      </div>
      <div>
        <h3>Nationality</h3>
        {nationality && (
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Probability</th>
              </tr>
            </thead>
            <tbody>
              {nationality.country.map((data) => {
                return (
                  <tr key={data.country_id}>
                    <td>{countries[data.country_id]}</td>
                    <td>{data.probability}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
