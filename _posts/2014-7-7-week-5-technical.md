---
layout: post
title: Week 5 - Technical
categories: devbootcamp technical
---


Ruby Classes
------------
Classes are an integral concept of object oriented programming. They are categories that group similar objects. All the objects within a class are similar, they have the same features, and the same capabilites. For instance, a Car is real world category. So say we wanted to create a class for cars in Ruby. How would we achieve this?

We'd start by describing the category. All cars have a make, model, year, and color. These features are called class variables in Ruby. The features of our class are set by a special method named initialize. This method is called any time a Car is created. So, this is what a basic Car Class would look like written in Ruby:

{% highlight ruby %}
class Car
  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
  end
end
{% endhighlight %}

Now this is just a description of the category "Car". We haven't actually created any cars yet. So, say we wanted to create a white 2013 Subaru WRX. Well we would create an instance of the class in Ruby like this:

{% highlight ruby %}
wrx = Car.new("Subaru", "WRX", 2013, "white")
{% endhighlight %}

We just created a variable named "wrx" that is an object, and that object is an instance of our class "Car". It's features are that it is made by Subaru, it is called a WRX, it is made in 2013 and it is white. Class variables are what an instance is. But usually, and most definitely in this case, objects can do things as well. We don't want this car to just sit there and look pretty. It needs to move.

Besides class variables, we can also use class methods. If class variables are what an object is, class methods are what an object does, or what it is capable of. So, say we wanted to start our car and accelerate, we would define this in the class, so our class would now look like this:

{% highlight ruby %}
class Car
  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
  end

  def start
    puts "click click ... purr purr purr"
  end
	
  def accelerate
    puts "vroooom"
  end
end
{% endhighlight %}

Now we're getting somewhere. We haven't completely modeled a car, but we have the basics. Our class describes what a car is, and what it does. Our Car class has a make, model, year, and color, and it can also start, and accelerate. So let's put it to work:

{% highlight ruby %}
wrx.start
# > "click click ... purr purr purr"

wrx.accelerate
# > "vroooom"
{% endhighlight %}

And we're off. Just keep in mind, class variables are what an object is, and class methods are what an object does.
