var snake = [{x: 200, y: 200}];
var food = {x: getRandomNumber(0, 39) * 10, y: getRandomNumber(0, 39) * 10};
var direction = 'right';
var gameBoard = document.getElementById('game-board');

function drawSnake() {
  for (var i = 0; i < snake.length; i++) {
    var snakeBody = document.createElement('div');
    snakeBody.className = 'snake';
    snakeBody.style.left = snake[i].x + 'px';
    snakeBody.style.top = snake[i].y + 'px';
    gameBoard.appendChild(snakeBody);
  }
}

function drawFood() {
  var foodElement = document.createElement('div');
  foodElement.className = 'food';
  foodElement.style.left = food.x + 'px';
  foodElement.style.top = food.y + 'px';
  gameBoard.appendChild(foodElement);
}

function moveSnake() {
  var newHead = {x: snake[0].x, y: snake[0].y};

  if (direction === 'right') {
    newHead.x += 10;
  } else if (direction === 'left') {
    newHead.x -= 10;
  } else if (direction === 'up') {
    newHead.y -= 10;
  } else if (direction === 'down') {
    newHead.y += 10;
  }

  snake.unshift(newHead);

  if (newHead.x === food.x && newHead.y === food.y) {
    food = {x: getRandomNumber(0, 39) * 10, y: getRandomNumber(0, 39) * 10};
    drawFood();
  } else {
    snake.pop();
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCollision() {
  var head = snake[0];

  if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
    return true;
  }

  for (var i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}

function update() {
  if (checkCollision()) {
    clearInterval(gameLoop);
    alert('Game Over!');
  } else {
    gameBoard.innerHTML = '';
    drawSnake();
    drawFood();
    moveSnake();
  }
}

document.addEventListener('keydown', function(event) {
  if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    if (event.keyCode === 37 && direction !== 'right') {
      direction = 'left';
    } else if (event.keyCode === 38 && direction !== 'down') {
      direction = 'up';
    } else if (event.keyCode === 39 && direction !== 'left') {
      direction = 'right';
    } else if (event.keyCode === 40 && direction !== 'up') {
      direction = 'down';
    }
  }
});

drawSnake();
drawFood();
var gameLoop = setInterval(update, 100);
