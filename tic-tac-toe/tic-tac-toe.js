const $table = document.querySelector('#table');
const $col1InnerDiv = document.querySelectorAll('#col1 div');
const $col2InnerDiv = document.querySelectorAll('#col2 div');
const $col3InnerDiv = document.querySelectorAll('#col3 div');
const $redScore = document.querySelector('#red-score');
const $blueScore = document.querySelector('#blue-score');
const $turnShow = document.querySelector('#turn-show');


let turn = 'red';
let redScore = 0;
let blueScore = 0;

function newGame() { 
  $table.addEventListener('click', clickEvent);
}

function clickEvent(e) { // 클릭 시 턴 바꾸기와 검증
  if (!e.target.innerHTML) {
    if (turn === 'red') {
      e.target.innerHTML = 'O';
      e.target.style.color = 'red';
      if(check()) {
        console.log('red게임끝');
        redScore++;
        $redScore.innerHTML = redScore; 
        gameSet('red');
        alert('이번엔 Red의 승리!');
      } else if(draw()) {
        alert('이번엔 비겼네요!');
        gameSet();
      };
      turn = 'blue';
      $turnShow.innerHTML = turn;
      $turnShow.style.color = turn;
    } else {
      e.target.innerHTML = 'X';
      e.target.style.color = 'blue';
      if(check()) {
        console.log('blue게임끝');
        blueScore++;
        $blueScore.innerHTML = blueScore; 
        gameSet('blue');
        alert('이번엔 Blue의 승리!');
      } else if(draw()) {
        alert('이번엔 비겼네요!');
        gameSet();
      };
      turn = 'red';
      $turnShow.innerHTML = turn;
      $turnShow.style.color = turn;
    }
  }
}

function check() {
  const lines = [
    [$col1InnerDiv[0], $col1InnerDiv[1], $col1InnerDiv[2]],
    [$col2InnerDiv[0], $col2InnerDiv[1], $col2InnerDiv[2]],
    [$col3InnerDiv[0], $col3InnerDiv[1], $col3InnerDiv[2]],
    [$col1InnerDiv[0], $col2InnerDiv[0], $col3InnerDiv[0]],
    [$col1InnerDiv[1], $col2InnerDiv[1], $col3InnerDiv[1]],
    [$col1InnerDiv[2], $col2InnerDiv[2], $col3InnerDiv[2]],
    [$col1InnerDiv[0], $col2InnerDiv[1], $col3InnerDiv[2]],
    [$col1InnerDiv[2], $col2InnerDiv[1], $col3InnerDiv[0]],
  ];

  for (const line of lines) {
    const [cell1, cell2, cell3] = line;
    if (cell1.innerHTML !== '' && cell1.innerHTML === cell2.innerHTML && cell2.innerHTML === cell3.innerHTML) {
      return true;
    }
  }

  return false;
}

function draw() {
  const allCol = [...$col1InnerDiv, ...$col2InnerDiv, ...$col3InnerDiv];
  for(const col of allCol) {
    if(col.innerHTML === '') {
      return false;
    }
  }

  return true;
}

function gameSet() {
  for(let i = 0; i < 3; i++) {
    $col1InnerDiv[i].innerHTML = '';
    $col2InnerDiv[i].innerHTML = '';
    $col3InnerDiv[i].innerHTML = '';
  }
}

newGame();


