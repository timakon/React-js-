import './Pokemon.css';
import React, {Component} from 'react';
import Preloader from 'components/Preloader/Preloader'

export default class Pokemon extends Component{
    render(){

        const pokemons = [
            {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},
            {"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},
            {"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},
            {"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},
            {"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},
            {"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},
            {"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},
            {"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},
            {"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},
            {"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},
            {"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},
            {"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"}
            ];

        return(
            <div className="pokemons">
                {pokemons.map((item,idx)=>
                     <div className="pokemon">
                        <img className="pokemon-img" src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${idx+1}.png?raw=true`}/>
                        <div>{item.name}</div>
                     </div>
                )}
            </div>
        );
    }
}