const canvas = document.getElementById("arkanoid");
const ctx = canvas.getContext('2d');

let ballSpeed;
let racketWidth;
let tileColumns;
let tileRows;
let tileWidth;
let tilePadding;
let tileOffsetTop;
let tileColors;

let y;
let dx;
let dy;
let racketX;
let rightPressed;
let leftPressed;
let tiles = [];

let timerId;
let level = 1;
let score = 0;
let targets = 0;
let lifes = NUMBER_OF_LIFES;

const initLevel = (nextLevel) => {   
    clearInterval(timerId)

    // check if player completes all levels
    if (nextLevel > 10) {
        confirm('Unbeliable!!!\nYou complete all levels, you are awasome player!!!');
        document.location.reload();
    }

    level = nextLevel;

    // get level config
    ballSpeed = LEVELS_CONFIG[level]['BALL_SPEED']
    racketWidth = LEVELS_CONFIG[level]['RACKET_WIDTH']
    tileColumns = LEVELS_CONFIG[level]['TILE_COLUMNS']
    tileRows = LEVELS_CONFIG[level]['TILE_ROWS']
    tilePadding = LEVELS_CONFIG[level]['TILE_PADDING']
    tileOffsetTop = LEVELS_CONFIG[level]['TILE_OFFSET_TOP']
    tileColors = LEVELS_CONFIG[level]['TILE_COLORS']
    tileWidth = (canvas.width - (tilePadding * (tileRows + 1))) / tileRows;
    
    // draw tiles
    tiles = [];
    for(c = 0; c < tileColumns; c++) {
        tiles[c] = [];
        for(r = 0; r < tileRows; r++) {
            tiles[c][r] = { x: 0  , y: 0, status: 1 };
        }
    }

    // reset vars
    x = canvas.width / 2;
    y = canvas.height - 30;
    dx = ballSpeed;
    dy = -ballSpeed;
    racketX = (canvas.width - racketWidth) / 2;
    rightPressed = false;
    leftPressed = false;

    timerId = setInterval(draw, UPDATE_TIME);
}


// key handlers
const keyDownHandler = (e) => {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}
const keyUpHandler = (e) => {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);


// draw functions
const detectCollisions = () => {
    const ballMinX = x - BALL_RADIUS;
    const ballMaxX = x + BALL_RADIUS;
    const ballMinY = y - BALL_RADIUS;
    const ballMaxY = y + BALL_RADIUS;
    for(c = 0; c < tileColumns; c++) {
        for(r = 0; r < tileRows; r++) {
            const tile = tiles[c][r];
            if (tile.status == 1) {
                if (ballMaxX > tile.x && ballMinX < tile.x + tileWidth && ballMaxY > tile.y && ballMinY < tile.y + TILE_HEIGHT) {
                    dy = -dy;
                    tile.status = 0;
                    targets++;
                    score += level;
                }
            }
        }
    }
}

const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = COLOR_BALL;
    ctx.fill();
    ctx.closePath();
}

const drawRaquet = () => {
    ctx.beginPath();
    ctx.rect(racketX, canvas.height - RACKET_HEIGHT, racketWidth, RACKET_HEIGHT);
    ctx.fillStyle = COLOR_RACKET;
    ctx.fill();
    ctx.closePath();
}

const drawTiles = () => {
    for (c = 0; c < tileColumns; c++) {
        const rowColor = tileColors[c];
        for (r = 0; r < tileRows; r++) {
            if (tiles[c][r].status == 1) {
                const tileX = (r * (tileWidth + tilePadding)) + tilePadding;
                const tileY = (c * (TILE_HEIGHT + tilePadding)) + tileOffsetTop;
                tiles[c][r].x = tileX;
                tiles[c][r].y = tileY;
                ctx.beginPath();
                ctx.rect(tileX, tileY, tileWidth, TILE_HEIGHT);
                ctx.fillStyle = rowColor;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

const drawScore = () => {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'back';
    ctx.fillText(`Level ${level}`, 20, 20);
    ctx.fillText(`Lifes: ${lifes}`, 730, 20);
    ctx.font = '22px Arial';
    ctx.fillText(`Score: ${score}`, 355, 20);
}


// frame update function
const draw = () => {
    // check level completion
    if (targets == tileColumns * tileRows) {
        confirm(`Congrats!!! You are complete level ${level} 😀`);
        targets = 0;
        initLevel(level + 1)
    }

    // draw gameboard
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTiles();
    drawBall();
    drawRaquet();
    drawScore();
    detectCollisions();
    
    // check directions
    if (x + dx > canvas.width - BALL_RADIUS || x + dx < BALL_RADIUS) {
        dx = -dx;
    }
    if (y + dy < BALL_RADIUS) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - (BALL_RADIUS * 2)) {
        // racket interaction
        if (x > racketX && x < racketX + racketWidth) {
            // const middleRaquetSize = (racketWidth / 2)
            // const center = racketX + middleRaquetSize;
            // const ballCollisionOffset = x - center;
            // const percent = ballCollisionOffset / middleRaquetSize;
            // console.log(`${percent}%`);
            // dy = -(dy + percent);
            
            // apply tilt depending on player action
            if (dx > 0 && rightPressed || (dx < 0 && leftPressed)) {
                dy = -(dy + (dy / 8));
            }
            else if ((dx > 0 && leftPressed) || (dx < 0 && rightPressed)) {
                dy = (dy > 0) ? -ballSpeed : ballSpeed
            }
            else{
                dy = -dy;
            }
        }
        else if (lifes > 1) {
            lifes--
            x = canvas.width / 2;
            y = canvas.height - 30;
            dx = ballSpeed;
            dy = -ballSpeed;
        }
        else {
            alert('Oppps!! You lose 😪');
            level = 1
            lifes = NUMBER_OF_LIFES
            score = 0
            initLevel(level)
        }
    }
    
    if (rightPressed && racketX < canvas.width - racketWidth) {
        racketX += 7;
    }
    else if (leftPressed && racketX > 0) {
        racketX -= 7;
    }
    
    // update ball position
    x += dx;
    y += dy;
}

// init game
initLevel(level)