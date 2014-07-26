---
layout: post
title: Week 8 - Technical
categories: devbootcamp technical
---

ActiveRecord
------------

[Active Record][1] is concept for linking objects in a programming language to data stored in a database. It was [coined and described][2] by Martin Fowler in 2003 book *Patterns of Enterprise Application Architecture*. The concept has been implemented in multiple languages, but in ruby this concept is implemented by [the ActiveRecord gem][3]. 

Without active record, a ruby programmer would typically use another module, such as [sqlite3][4] to execute sql queries. Active Record provides ruby methods that simplify common [CRUD][5] practices. Programmers can create classes that represent a database table, and objects that represent a database row. Data can then be accessed, updated and deleted directly from the ruby objects.

Assuming we're starting with an existing movies and directors table, these tables are represented in Active Record by a ruby class mixed with the `ActiveRecord::Base` class:

{% highlight ruby %}
class Movie < ActiveRecord::Base
    belongs_to :director 
end

class Director < ActiveRecord::Base
    has_many :movies
end
{% endhighlight %}

Data can then be inserted  into the tables using the `create` method of each class. Data can also be updated using the `update` method, or assigning a value to a column attribute followed by the `save` method:

{% highlight ruby %}
blade_runner = Movie.create(title: "Blade Runner")
ridley_scott = Director.create(first_name: "Ridley", last_name: "Scott")
blade_runner.director = ridley_scott
blade_runner.save
{% endhighlight %}

Once data has been created a saved to the database, Active Record supports queryies through the `find_by` and `where` methods:

{% highlight ruby %}
movies = Movie.find_by(title: "Blade Runner"
movies = Movie.where(title: "Blade Runner")
{% endhighlight %}


Examples SQL vs ActiveRecord
- Create
- Query
- Insert
- Update
- Delete

[1]: http://en.wikipedia.org/wiki/Active_record_pattern
[2]: http://www.martinfowler.com/eaaCatalog/activeRecord.html
[3]: https://rubygems.org/gems/activerecord
[4]: https://rubygems.org/gems/sqlite3
[5]: http://en.wikipedia.org/wiki/Create,_read,_update_and_delete
