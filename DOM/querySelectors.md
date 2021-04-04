# How to use querySelector to get the desired element(s)

## HTML
```
<div class="outer">
  <div class="inner">TEST0</div>
  <div class="center">
    <div id="inner">TEST1
      <div class="someclass">someclass text</div>
    </div>
    <div class="someclass">some other outside text</div>
  </div>
  <div class="inner">TEST2</div>
</div>
```


## JS
querySelector/All takes 2 arguments - 1)the element type 2)element identifier. Element identifier can be a class or an Id or another element type. Let's
see some examples. 
If we want to take outer element i.e. where class="outer".
```let outerDiv = document.querySelectror("div .outer"); ```

If we want to take all elements with "someclass". It should return 2 elements.
```document.querySelectorAll("div .someclass);```

Howerver if we want to get a well nested element we can put these in the same was as we do in css. Like, let's pick the elelement with text "someclass text".
The element has an identifying class "someclass" nested in an "inner" div nested in a "center" div. So it can be picked like,
```
let ourDiv = document.querySelectorAll("div #inner .someclass");
console.log('centerDivs->' + centerDivs.length);
```
It should print 1 in console.

#EOF End of fun :)
