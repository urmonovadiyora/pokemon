import React from 'react';

const Card = ({ pokemon, loading , infoPokemon}) => {
    console.log(pokemon);
    return (
        <div>
            {
                loading ?
                    <h1>Loading...</h1>
                    :
                    pokemon.map((item) => {
                        return (
                            <>
                                
                                <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                    <h2>{item.id}</h2>
                                    <img src={item.sprites.front_default} alt={item.name} width="100px" />
                                    <h2>{item.name}</h2>
                                </div>
                            </>
                        )
                    })
            }

        </div>
    );
}

export default Card;
