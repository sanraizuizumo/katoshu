var henkan = function(input){
  var before = [/ジ(?!(ャ|ュ|ョ))/g, /チ(?!(ャ|ュ|ョ))/g, /ヂ/g, /ツ/g, /ヅ/g, /バ/g, /ビ(?!(ャ|ュ|ョ))/g, /ブ/g,/ベ/g, /ボ/g];
  var after  = ["ディ","ティ","ディ","トゥ","ドゥ","ヴァ","ヴィ","ヴ", "ヴェ","ヴォ"];

  for(var i=0, len=before.length; i<len; i++){
    input = input.replace(before[i], after[i],"g");
  }
  return input;
};

var getValue = function(idname){
  var result = document.getElementById(idname).value;
  document.getElementById("str").innerText=henkan(result);
}
