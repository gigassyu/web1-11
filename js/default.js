
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください'));

var message;
if(answer === number) {
  message ='当てたので罰金です。〇〇〇ー△△△ー✖✖✖に振り込んでください';
}else if (answer < number){
  message = 'ざんねんもっとおおきいです　早く当てて';
}else if (number < answer){
  message = 'ざんねんもっとちいさいです　早く当てて';
}else{
  message = '0～3の数字を入力してください';
}

document.getElementById('choice').textContent = message;
