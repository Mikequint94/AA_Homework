require 'rails_helper'

RSpec.describe User, type: :model do

  subject(:user) {User.new(email: 'Mike', password: 'password')}


  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6)}
  end

  describe '#is_password?' do
    it 'should check if the password given is the password' do
      expect(user.is_password?('password')).to be true
    end
  end

  describe '#reset_session_token!' do
    it 'should reset session_token' do

      expect(user.reset_session_token!).to_not eq(:session_token)
    end
  end

  describe '::find_by_credentials' do
    before {user.save!}
    user_params = {email: 'Mike', password: 'password'}

    it 'finds user by credentials' do

      expect(User.find_by_credentials(user_params)).to eq(user)
    end
    it 'doesn\'t find user who doesn\'t exist' do
      expect(User.find_by_credentials({email: 'Mike', password: 'lol'})).to eq(nil)
    end
  end


end
