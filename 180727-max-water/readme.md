<!-- excerpt -->
### Finding max area

> Imagine a histogram (bar graph). Design an algorithm to compute the volume of water it could hold if someone poured water across the top. You can assume each histogram bar has a width 1.

```ruby
input = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]
answer = 26
```
<!-- /excerpt -->

#### Takeaway
- being a more visual-oriented guy, I personally prefer thinking things graphically then reading numbers

For instance, by drawing something like this
```bash
# 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1
   #
   #    #
#  #    #
#  #  # #
#  #  # # #
#++#++#+#+#
# ans = 4 x 2 + 5 x 4 - 3 + 1 = 26
```

#### P.S.
Thanks this kiddo, super encouraging LOL!
![ThugLife](http://static.stheadline.com/stheadline/inewsmedia/20180410/_2018041022380475020.jpg)
