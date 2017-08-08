require 'byebug'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) {[]}
    (0..5).each do |idx|
      @cups[idx] = place_stones
    end
    (7..12).each do |idx|
      @cups[idx] = place_stones
    end
  end

  def place_stones
    [:stone, :stone, :stone, :stone]
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless [1,2,3,4,5,6,7,8,9,10,11,12].include?(start_pos)

  end

  def make_move(start_pos, current_player_name)
    i = start_pos
    case current_player_name
    when @name1
      i = 0 if i == 12
      i +=1 unless i == 12
    when @name2
      i += 2 if i == 5
      i = 0 if i == 13
      i += 1 unless i == 5 || i == 13
    end
    #debugger

    until @cups[start_pos].length == 0
      @cups[i] << @cups[start_pos].shift
      prev_turn = i
      case current_player_name
      when @name1
        i = 0 if i == 12
        i +=1 unless i == 12
      when @name2
        i += 2 if i == 5
        i = 0 if i == 13
        i += 1 unless i == 5 || i == 13
      end
    end
    render
    next_turn(prev_turn)
  end

  def next_turn(ending_cup_idx)
    if (ending_cup_idx == 13) || (ending_cup_idx == 6)
      return :prompt
    elsif @cups[ending_cup_idx-1].length == 0
      return  :switch
    else
      return ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if @cups[0..5].all? {|cup| cup.empty?}
    return true if @cups[7..12].all? {|cup| cup.empty?}
    return false
  end

  def winner
    case cups[6] <=> cups[13]
    when 0
      return :draw
    when 1
      return @name1
    when -1
      return @name2
    end
  end
end
