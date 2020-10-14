class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
        @user = User.find_by(id: params[:id])

        if @user.update(user_params)
            render :show
        else
            render jseon: @task.errors.full_messages, status: 422
        end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :photo, :bio)
  end
end
