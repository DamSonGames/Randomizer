function Randomizer(min, max, dec){
  var delta = max-min + 1
  var random = delta*Math.random()
  if(dec > 0){
    random = random * (Math.pow(10, dec))
  }
  random = Math.floor(random)
  if(dec > 0){
    random = random / (Math.pow(10, dec))
    random = random.toString()
    if(random.length > dec+2){
      random = random.substr(0,dec+2)
    }
    random = parseFloat(random)
  }
  return random + min
}