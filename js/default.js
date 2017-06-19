
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください'));

var message;
if(answer === number) {
  message ='あたり';
}else if (answer < number){
  message = 'ざんねんもっとおおきいです';
}else if (number < answer){
  message = 'ざんねんもっとちいさいです';
}else{
  message = '0～3の数字を入力してください';
}

document.getElementById('coice').textContent = message;
