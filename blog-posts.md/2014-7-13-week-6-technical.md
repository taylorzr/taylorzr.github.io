---
layout: post
title: Week 6 - Technical
categories: devbootcamp cultural
---


OOF: Object-Oriented versus Functional
--------------------------------------

Programming is a process of describing a series of instructions. There are at least two ways to conceptualize this process, object-oriented and functional. Object oriented programming is primarily concerned with things, whle functional programming is primarily concerned with actions.

For example, with object-oriented programming you would group code into things, or classes:

{% highlight ruby %}
class Human
  def eat
    puts "Mmm bacon"
  end
end

class Cat
  def eat
    puts "Mmm dry cardboard"
  end
end
{% endhighlight %}

With functional programming, you would groups code into actions, or functions/methods.

{% highlight ruby %}
def eat_as_a(thing)
  if thing == "human"
    puts "Mmm bacon"
  end
  
  if thing == "cat"
    puts "Mmm dry cardboard"
  end						        
end
{% endhighlight %}

Calling the class method or function is relatively simple either way: 

{% highlight ruby %}
# Object-Oriented Programming
Human.new.eat # => "Mmm bacon" 
Cat.new.eat # => "Mmm dry cardboard

# Functional Programming
eat_as_a("human") # => "Mmm bacon" 
eat_as_a("cat") # => "Mmm dry cardboard" 
{% endhighlight %}

With either style, the same result is achieved, the humans eats bacon and the cat eats dry cardboard *(poor little kitty)*. But the process to achieve the result is different.

In my experience, I find object-oriented programming easier to understand. It seems to model my thinking style where I first think of a thing, and then think of what that thing can do. And that's the way I think about the world, so it's natural for me.

However, both styles have their place. The appropirate style would depend on the task at hand. If your problem is primarily a challenge of actions, then functional programming would clearly be the better choice. But if your challenge is primarily using things, then object-oriented programming would be preferential.