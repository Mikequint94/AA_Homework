class LRUCache
  def initialize(size)
    @cache = []
    @size = size
  end

  def count
    @cache.size

  end

  def add(el)
    @cache.delete(el) if @cache.include?(el)
    @cache.push(el)
    @cache.shift if @cache.count > @size

  end

  def show
    p @cache
  end

  private
  # helper methods go here!

end
