 Commit for John to evaluate problem - I think focus on code in two areas:

 1. self.filterActivity (273)
 2. self.listArray = ko.computed (305)

 Either will work with other commented out with no errors, however, when both
 working will get console error self.listArray().removeAll() not a function -
 I tried both ways -- like above value and self.listArray.removeAll() observa

 Thanks for the help