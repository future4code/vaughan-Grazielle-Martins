```
function calculaNota(ex, p1, p2) {
  media = ex + p1 + p2
  mediaFinal = media / 3
  
  if (mediaFinal >= 9){
    return "A"
  } else if (mediaFinal < 9 && mediaFinal >= 7.5){
    return "B"
  } else if (mediaFinal < 7.5 && mediaFinal >= 6){
    return "C"
  } else if (mediaFinal < 6){
    return "D"
  }
}
```