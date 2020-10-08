let line=[]

for (i = 1 ; i < 60 ; i++){
  line.push(gets())
  if (line[i - 1] === undefined){
    i = 60
    line.pop()
  }
}
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

found =false;
for( j = 0; j < line.length; j++){
    for(i = 0 ; i < line[j].length; i++ ){

      if (line[j][i] === '_'){
        if (!found) {
          line[j] = replaceAt(line[j], i, "<i>")
          found = true
        }
        else{
          line[j] = replaceAt(line[j], i, "</i>")
          found= false;
        }
      }
  }
}
for( j = 0; j < line.length;j++){
    for(i=0 ; i < line[j].length;i++ ){

      if (line[j][i] === '*'){
        if (!found) {
          line[j] = replaceAt(line[j], i, "<b>")
          found = true
        }
        else{
          line[j] = replaceAt(line[j], i, "</b>")
          found= false;
        }
      }
  }
}

for( palavra in line){
 console.log( line[palavra])
}
