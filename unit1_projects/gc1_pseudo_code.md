create a function named "sum" that accepts one parameter named "list_of_numbers"
  
  within sum, create a variable named "result" and set it to the value 0

  for each element in the "list_of_numbers", set "result" to the value of result plus the current element

  return "result"


create a function named "mean" that accepts one parameter named "list_of_numbers"
  
  within mean, return the result of the sum of "list_of_numbers" divided by the length of the "list_of_numbers"



create a function named "median" that accepts one parameter named "list_of_numbers"

  within median, create a variable named "remainder" and set it to the value of the length of "list_of_numbers" % 2

  if the remainder is 1 (the list is odd), create a variable named "middle_of_list" and set it to the length of the "list of numbers" divided by 2, then rounded up

  	return "middle_of_list"

  otherwise, the remainder is 0 (the list is even), create a variable named "right_of_middle" and set it to the length of "list_of_numbers" divided by 2

  	return the result of the value of "list_of_numbers" at the position ("right_of_middle" - 1) divided by the value of the position at "right_of_middle"