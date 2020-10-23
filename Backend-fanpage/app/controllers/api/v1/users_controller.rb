class Api::V1::UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users, include: [:posts, :comments]
    end
    def show
        user = User.find(params[:name])
    end
    def create
        User.create(params[:name])
    end
end
