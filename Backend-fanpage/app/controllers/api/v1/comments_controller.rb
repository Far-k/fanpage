class Api::V1::CommentsController < ApplicationController
  def index
    comments = Comment.all 
    render json: comments
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end


  def create
    comment = Comment.create!(com_params)
    render json: comment
  end

  def update
  end
private
  def com_params
    params.require(:comment).permit(:post_id, :content, :user_id)
  end
end
