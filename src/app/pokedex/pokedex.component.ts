import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon: Pokemon = {} as Pokemon;
  pokemonId: number = 1;
  MAX: number = 1010;

  constructor(private pokemonService: PokemonService) { }

  
  ngOnInit(): void{
    this.loadPokemon();
  }

  loadPokemon(): void{
    this.pokemonService.getPokemon(this.pokemonId).subscribe(
      {
        next : pokemon => this.pokemon = pokemon
      }
    );
  }
  getFotoPokemon(){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`;
}
  ProximoPokemon(){
    if (this.pokemonId === this.MAX){
      this.pokemonId = 1;
    }
    else{
      this.pokemonId++;
    }
    this.loadPokemon();
  }

  AnteriorPokemon(){
    if (this.pokemonId === this.MAX){
      this.pokemonId = 1;
    }
    else{
      this.pokemonId--;
    }
    this.loadPokemon();
  }
  statOrder = [0,1,2,3,4,5]
}
