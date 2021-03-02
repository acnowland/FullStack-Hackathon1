class PeopleController < ApplicationController
    def index
        @people = Person.all
        render json: @people
    end

    def show
        @person = Person.find(params[:id])
        render json: @person
    end

    def create
        @person = Person.create(
            name: params[:name]
        )
        render json: @person
    end
end
