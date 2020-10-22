class Api::V1::PostsController < ApplicationController
    def index
        posts = Post.all 
        render json: posts, include: [:comments]
    end

    def show
        post = Post.find(params[:id])
        render json: posts
    end


    def create
        post = Post.create(image: "img_url", content: "content", userId: "user_id")
    end

    def patch
        
    end
end
