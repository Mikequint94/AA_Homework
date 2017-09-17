class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.create(user_params)
    if user.save
      redirect_to links_url
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
