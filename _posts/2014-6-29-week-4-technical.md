---
layout: post
title: Week 4 - Technical
categories: devbootcamp technical
---


Ruby Array#map
--------------

The ruby method **map** is a very useful builtin tool. It's the same as the method **collect**, and can be used interchangeably. Depeding on context, collect can be clearer than map. Each method runs a block of code over an enumerable object and *"collects"* the results.

We had a challenge this week, that required we use the same method to modify items in both an array and a hash. I initially started by using the method map. Map was a great choice for changing elements in an array and returning a new array: `array.map{ |element| element += 1 }`. This is the same as: `new_array = []` and then `array.each{ |element| new_array.push( element += 1 }`.

At first, I thought the map method actually *"mapped"* the blocks result onto the object that called it, but that's not the case. For example, you can call map on a hash, but it won't return a hash, it will return an array! You can actually call map on any enumerable object.
