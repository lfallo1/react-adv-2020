import React, { useState, useEffect, useCallback } from 'react';

const url = `https://www.superheroapi.com/api.php/10160295021285883/search`;

// second argument

const UseEffectFetchData = () => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('super')

    const calculateRating = (powerstats) =>{
        let rating = 0.0;
        for(let key in powerstats){
            rating += Number(powerstats[key])
        }
        return (rating / Object.keys(powerstats).length).toFixed(2);
    }

    const getHeroes = async (e) => {
        e && e.preventDefault();
        setLoading(true);
        fetch(`${url}/${searchTerm || 'super'}`).then(async (res) =>{
            const {results} = await res.json();
            let newHeroes = [];
            if(results){
                newHeroes = results.map((hero) => {
                    return {
                        id: hero.id,
                        name: hero.name,
                        rating: calculateRating(hero.powerstats),
                        image: hero.image.url
                    }
                })
            }
            setLoading(false);
            setHeroes((existingHeroes) => {
                return newHeroes;
            });
        }).catch(() => setLoading(false))
    };

    useEffect(() => {
        getHeroes();
    }, []);

    if(loading){
        return(
            <div className="alert alert-warning">
                <h2>Loading...</h2>
            </div>
        )
    }
    return (
    <>
      <h3>hero list</h3>
        <article>
            <form className="form" onSubmit={getHeroes}>
                <div className="form-control">
                    <label htmlFor="searchTerm">Search Term</label>
                    <input type="text"
                           id="searchTerm"
                           name="searchTerm"
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </article>
      <ul className='users'>
        {heroes.length > 0 ? heroes.map((hero) => {
          const { id, name, rating, image } = hero;
          return (
            <li key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <div className="badge bg-primary">Rating {isNaN(rating) ? 0.00 : rating}</div>
                <a href={image}>View</a>
              </div>
            </li>
          );
        }) : <h3>Search returned no results!</h3>}
      </ul>
    </>
    );
};

export default UseEffectFetchData;
