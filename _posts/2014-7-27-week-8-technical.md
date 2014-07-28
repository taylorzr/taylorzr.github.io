---
layout: post
title: Week 8 - Technical
categories: devbootcamp technical
---

ActiveRecord
------------

[Active Record][1] is concept for linking objects in a programming language to data stored in a database. It was [coined and described][2] by Martin Fowler in 2003 book *Patterns of Enterprise Application Architecture*. The concept has been implemented in multiple languages, but in ruby this concept is implemented by [the ActiveRecord gem][3]. 

Without active record, a ruby programmer would typically use another module, such as [sqlite3][4] to execute sql queries. Active Record provides ruby methods that simplify common [CRUD][5] practices. We can use active record to easily create classes that represent a database table, and objects that represent a database row. Data can then be accessed, updated and deleted directly from the ruby objects.

First, let's use active record to setup a database and some tables. We'll try to keep it simple for this article, so we'll just setup two tables `movies` and `directors`. The movie table will have a `title` and a `director_id` reference to a director row. The director table will have a `first_name` and a `last_name`. This is how to connect to a database, and create tables:

{% highlight ruby %}
require "active_record"

# Connects to database
ActiveRecord::Base.establish_connection(
    adapter: "sqlite3",
    database: ":memory:"
)

# Creates tables
ActiveRecord::Schema.define do
    create_table :Movies do | table |
        table.column :title, :string
        table.column :director_id, :integer
    end

    create_table :Directors do | table |
        table.column :firstname, :string
        table.column :lastname, :string
    end
end
{% endhighlight %}

With these tables created, we can then setup a class for each table. The class itself will represent the table, and the instances of the class will represent the rows. The class should be named after the table in singular form, as opposed to plural, mixed with the `ActiveRecord::Base` class. For example, a table named `movies` will be represented by a class named `Movie`. We will also define relationships within the ruby class:

{% highlight ruby %}
class Movie < ActiveRecord::Base
    belongs_to :director 
end

class Director < ActiveRecord::Base
    has_many :movies
end
{% endhighlight %}

Now our tables are created, and we have classes to represent the tables and rows. Data can be inserted into the tables using the `create` method of each class. Data can also be updated using the `update` method, or by assigning a value to a column attribute followed by the `save` method:

{% highlight ruby %}
blade_runner = Movie.create(title: "Blade Runner")
ridley_scott = Director.create(first_name: "Ridley", last_name: "Scott")
blade_runner.director = ridley_scott
blade_runner.save
# or
blade_runner.update(director: ridley_scott)
{% endhighlight %}

Once data has been created a saved to the database, Active Record supports queryies through the `find_by` and `where` methods. The former returns the first result matching the query, the latter returns all results matching the query:

{% highlight ruby %}
movie = Movie.find_by(title: "Blade Runner")
movies = Movie.where(title: "Blade Runner")
{% endhighlight %}

And for a short intro to Active Record, that does it. I look forward to working with Active Record as it makes using a database in ruby much easier. With a few lines of code each we've:

1. Created a database and tables
2. Represented tables and rows in ruby objects
3. Inserted data into tables
4. Queried the database

[1]: http://en.wikipedia.org/wiki/Active_record_pattern
[2]: http://www.martinfowler.com/eaaCatalog/activeRecord.html
[3]: https://rubygems.org/gems/activerecord
[4]: https://rubygems.org/gems/sqlite3
[5]: http://en.wikipedia.org/wiki/Create,_read,_update_and_delete
