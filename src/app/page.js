'use client'
import React from 'react';
import Brands from '../../components/Brands/Brands'
import Cards from '../../components/Cards/Cards'

export default function Home() {

  const [cards, setCards] = React.useState([]);

  function handleBrandChoose(brand) {

    console.log(brand.target.textContent);
    return fetch(`${'https://maximum.expert/api/stock-test?brand=' + brand.target.textContent}`)
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then(function (data) {

            data.list.map(function (el) {
              if (el._id == '646b3f9de0c00d7862e54d89') {
                console.log(el);
              }
            }
            )
            setCards(data.list);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }
  return (
    <main>
      <section className="goods">
        <h2 className="goods__title">Автомобили Chery в СПб</h2>
        <div className="content">

          <Brands handleBrandChoose={handleBrandChoose} />

          <Cards cards={cards} />

        </div>
      </section>

    </main>


  )
}
