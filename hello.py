p = "You drive over 65 miles per hour"
q = "You get a speeding ticket"

sum = """ In python negation is (not), conjunction is (and), disjunction is (or):
          implication is (if, elif, and else ) => for checking multiple conditions:
          but in others language like JS: negation is (!), conjunction is (&&), 
          disjunction is (||).
          Every language is diffrent sytax for wrriting same thing;
"""
# a)
print(not(p)) # negation of p is false

# b)
print(p and not(q)) # one ture other false final ans = false

# c)
if p: # if p is ture than execute q;
    print(q)

# d)
if not(p): # if p is false than negation of q will print(false)
    print(not(q))

# e)
if p: # if p is ture than p will execute;
    print(q)
    print("Amir ali shah")

# f)
print(q and not(p)) # when one is true and other in false in final ans = false;

# g)
if q: # if q is true p will be execute;
    print(p)
