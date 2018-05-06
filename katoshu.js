// sed -e 's/ジ/ディ/g'
// sed -e 's/チ/ティ/g'
// sed -e 's/ヂ/ディ/g'
// sed -e 's/ツ/トゥ/g'
// sed -e 's/ヅ/ドゥ/g'
// sed -e 's/バ/ヴァ/g'
// sed -e 's/ビ/ヴィ/g'
// sed -e 's/ブ/ヴ/g'
// sed -e 's/ベ/ヴェ/g'
// sed -e 's/ボ/ヴォ/g'

var henkan = function(input){
  var before = [/ジ/g,  /チ/g,  /ヂ/g,  /ツ/g,  /ヅ/g,  /バ/g,  /ビ/g,  /ブ/g,/ベ/g,  /ボ/g];
  var after  = ["ディ","ティ","ディ","トゥ","ドゥ","ヴァ","ヴィ","ヴ","ヴェ","ヴォ"];

  for(var i=0, len=before.length; i<len; i++){
    input = input.replace(before[i], after[i],"g");
  }
  return input;
};

function getValue(idname){
  var result = document.getElementById(idname).value;
  str = henkan(result);
  alert(str);
}
