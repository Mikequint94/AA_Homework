class UserMailer < ApplicationMailer

  def welcome_email(user)
    @user = user
    mail(to: user.username, subject: "welcome to 99Cats Yo")


  end
end
