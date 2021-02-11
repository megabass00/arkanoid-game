const COLOR_RACKET = '#000066';
const COLOR_BALL = '#990000';
const NUMBER_OF_LIFES = 3;
const BALL_RADIUS = 7;
const RACKET_HEIGHT = 15;
const TILE_HEIGHT = 30;
const UPDATE_TIME = 10; // milisecs

// levels config
const LEVELS_CONFIG = {
    1: {
        BALL_SPEED: 2,
        RACKET_WIDTH: 180,
        TILE_COLUMNS: 3,
        TILE_ROWS: 5,
        TILE_PADDING: 35,
        TILE_OFFSET_TOP: 30,
        TILE_COLORS: [
            '#ffcc00',
            '#00cc66',
            '#ff33cc'
        ]
    },
    2: {
        BALL_SPEED: 2,
        RACKET_WIDTH: 180,
        TILE_COLUMNS: 3,
        TILE_ROWS: 7,
        TILE_PADDING: 30,
        TILE_OFFSET_TOP: 30,
        TILE_COLORS: [
            '#0066ff',
            '#ff33cc',
            '#00cc66'
        ]
    },
    3: {
        BALL_SPEED: 2,
        RACKET_WIDTH: 150,
        TILE_COLUMNS: 4,
        TILE_ROWS: 6,
        TILE_PADDING: 20,
        TILE_OFFSET_TOP: 30,
        TILE_COLORS: [
            '#0066ff',
            '#ffcc00',
            '#ff33cc',
            '#00cc66',
            '#e6e600',
        ]
    },
    4: {
        BALL_SPEED: 2.5,
        RACKET_WIDTH: 140,
        TILE_COLUMNS: 4,
        TILE_ROWS: 10,
        TILE_PADDING: 10,
        TILE_OFFSET_TOP: 30,
        TILE_COLORS: [
            '#00cc99',
            '#cc33ff',
            '#ff0066',
            '#0066ff'
        ]
    },
    5: {
        BALL_SPEED: 2.5,
        RACKET_WIDTH: 120,
        TILE_COLUMNS: 4,
        TILE_ROWS: 12,
        TILE_PADDING: 20,
        TILE_OFFSET_TOP: 30,
        TILE_COLORS: [
            '#00b3b3',
            '#cc33ff',
            '#cc4400',
            '#000099'
        ]
    },
    6: {
        BALL_SPEED: 2.5,
        RACKET_WIDTH: 100,
        TILE_COLUMNS: 5,
        TILE_ROWS: 6,
        TILE_PADDING: 20,
        TILE_OFFSET_TOP: 40,
        TILE_COLORS: [
            '#ffcc00',
            '#cc33ff',
            '#cc4400',
            '#ff33cc',  
            '#00cc66'
        ]
    },
    7: {
        BALL_SPEED: 3,
        RACKET_WIDTH: 100,
        TILE_COLUMNS: 5,
        TILE_ROWS: 9,
        TILE_PADDING: 15,
        TILE_OFFSET_TOP: 40,
        TILE_COLORS: [
            '#ff1a1a',
            '#6699ff',
            '#00cc66',
            '#ffcc00',
            '#b300b3'  
        ]
    },
    8: {
        BALL_SPEED: 3,
        RACKET_WIDTH: 90,
        TILE_COLUMNS: 5,
        TILE_ROWS: 14,
        TILE_PADDING: 10,
        TILE_OFFSET_TOP: 50,
        TILE_COLORS: [
            '#b300b3',  
            '#6699ff',
            '#ffcc00',
            '#1aff1a',
            '#ff1a1a'
        ]
    },
    9: {
        BALL_SPEED: 3.5,
        RACKET_WIDTH: 90,
        TILE_COLUMNS: 6,
        TILE_ROWS: 9,
        TILE_PADDING: 15,
        TILE_OFFSET_TOP: 50,
        TILE_COLORS: [
            '#b30000',
            '#009900',
            '#ff661a',
            '#b300b3',  
            '#0099ff',
            '#e6e600',  
        ]
    },
    10: {
        BALL_SPEED: 4,
        RACKET_WIDTH: 90,
        TILE_COLUMNS: 6,
        TILE_ROWS: 15,
        TILE_PADDING: 10,
        TILE_OFFSET_TOP: 50,
        TILE_COLORS: [
            '#b30000',
            '#b3b300',
            '#ff661a',
            '#b300b3',  
            '#0099ff',
            '#009900',
        ]
    }
}