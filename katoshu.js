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
  var said = henkan(result);
  document.getElementById("str").innerText=said;
  var button = '<a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-text="「' + said + '」" data-lang="ja" data-hashtags="カトシュ語変換機" data-url="https://sanraizuizumo.github.io/katoshu/" charset="UTF-8">ツイート</a>';
  $('#container').html(button);
  twttr.widgets.load();
}

// twttr.widgets.createShareButton(
//   'https://dev.twitter.com/',
//   document.getElementById('container'),
//   {
//     text: 'Hello World'
//   }
// );
