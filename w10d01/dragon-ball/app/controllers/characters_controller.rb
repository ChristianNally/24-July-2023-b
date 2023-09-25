class CharactersController < ApplicationController
  def index
    planet_id = params[:planet_id] # req.params.planet_id
    @planet = Planet.find(planet_id)

    @characters = @planet.characters

    render json: {
      planet: @planet,
      characters: @characters
    }
  end
end
