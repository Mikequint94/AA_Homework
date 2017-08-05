#require 'byebug'
class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize(high_score = 1)
    @sequence_length = 1
    @game_over = false
    @seq = []
    @high_score = high_score
    system("clear")
  end

  def play
    puts "Welcome to Simon!"
    puts "Remember the sequences and return them back!"
    puts
    sleep(1)
    until game_over
      take_turn
    end
      game_over_message
      reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless @game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep(0.5)
    end
  end

  def require_sequence
    sleep(2)
    system("clear")
    puts "Type the sequence seperated by a single space"

    guess = gets.chomp
    guess = guess.split(" ")

    @game_over = true unless guess == @seq
  end

  def add_random_color
    random_color = ["red", "blue", "yellow", "green"].sample
    @seq << random_color
  end

  def round_success_message
    puts "congrats!  You beat round: #{@sequence_length}"
    puts
    sleep(1.5)
    system("clear")
  end

  def game_over_message
    puts "Boo you whore. You made it to round: #{@sequence_length}"
    if @sequence_length > @high_score
      @high_score = @sequence_length
      puts "Congrats! New High Score!"
    end
    puts "The high score is: #{@high_score}"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
    puts
    puts "Would you like to play again? (yes or no?)"
    again = gets.chomp
    Simon.new(@high_score).play if again.downcase == "yes"
  end
end
if __FILE__ == $PROGRAM_NAME
  game = Simon.new
  game.play
end
