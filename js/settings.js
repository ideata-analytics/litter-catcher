var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 1920;

var EDGEBOARD_X = 0;
var EDGEBOARD_Y = 0;

var FONT = "geomanistitalic";


var FPS      = 30;
var DISABLE_SOUND_MOBILE = false;

var STATE_LOADING               = 0;
var STATE_MENU                  = 1;
var STATE_LEVEL                 = 2;
var STATE_GAME                  = 3;
var STATE_CHOOSE_CHARACTER_MENU = 4;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_BUT_YES_DOWN  = 4;
var ON_BUT_NO_DOWN = 5;
var ON_BACK_MENU = 6;
var ON_RESTART = 7;
var ON_NEXT = 8;
var ON_ITEM_DIE = 9;
var ON_ITEM_FALL = 10;
var ON_END_READYGO_ANIM = 11;
var ON_EXIT_FROM_HELP = 12;

var DIR_RIGHT = 0;
var DIR_LEFT = 1;

var MATERIALS = new Array();
MATERIALS[0] = "glass";
MATERIALS[1] = "organic";
MATERIALS[2] = "paper";
MATERIALS[3] = "plastic";

var ANIM_IDLE = "idle";
var ANIM_WALK = "walk";
var ANIM_CATCH = "catch";

var PREFIX_LOCAL_STORAGE = "litter_catcher";
var ENABLE_FULLSCREEN;

// KEY CODES
var LEFT_DIR = 37;
var RIGHT_DIR = 39;

var TIME_LOGO_OFF = 8000;
var TIME_LOGO_BLINK = 2000;
var HERO_LIMIT_LEFT = 480;
var HERO_LIMIT_RIGHT = 1488;
var ITEM_LIMIT_LEFT = 484;
var ITEM_LIMIT_RIGHT = 1438;

var PERC_FALL_ITEM = 70;
var MAX_PERC_FALL_ITEM = 90;
var ITEM_FALLING_SPEED = 0.5;

var PISTON_WIDTH = 242;
var PISTON_HEIGHT = 276;
var PISTON_Y = 438-PISTON_HEIGHT/4;

var CONVEYOR_SPEED = 9;
var TOP_CONVEYOR_Y = 438;
var BOTTOM_CONVEYOR_Y = 1505;

var NUM_ITEM_TYPES_PER_MATERIAL = 5;
var START_ITEM_Y = 400;
var START_SPAWN_ITEM_TIME = 1400;

var FLOOR_Y = 1350;

var HERO_ACCELERATION;
var MAX_HERO_SPEED;
var HERO_FRICTION;

var MALUS_PERC;
var MALUS_POINTS;
var ITEM_POINTS;
var TIME_LEVEL;
var CHANGE_DELAY;

var SOUNDTRACK_VOLUME_IN_GAME  = 0.5;


