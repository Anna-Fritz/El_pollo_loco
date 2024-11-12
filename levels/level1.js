let level1;
let endboss_alert = new Audio('../audio/chicken-alert.mp3');
let chicken_sound = new Audio('../audio/chicken-chatter.mp3');
let intro_music = new Audio('../audio/intro-music.mp3');
let walking_sound = new Audio('../audio/walking.mp3');
let hurt_sound = new Audio('../audio/hurt_sound.mp3');
let endboss_dies = new Audio('../audio/endboss-dead.mp3');
let cashing = new Audio('../audio/coin-received.mp3');
let pop = new Audio('../audio/bottle-pop.mp3');
let salsa_splat = new Audio('../audio/salsa-splat.mp3');
let endboss_ishurt = new Audio('../audio/endboss-hurt.mp3');
let death_chick = new Audio('../audio/death_chick.mp3');
let death_chicken = new Audio('../audio/death_chicken.mp3');
let winning = new Audio('../audio/winning.mp3');
let loosing = new Audio('../audio/loosing.mp3');
let snoring = new Audio('../audio/snoring.mp3');
let final_alert = new Audio('../audio/final_alert.mp3');

// function initLevel() {
    level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chick(),
        new Chick(),
        new Chick(),
        new Chick(),
        new Chick(),
    ],
    [
        new Cloud('../img/5_background/layers/4_clouds/1.png', 0),
        new Cloud('../img/5_background/layers/4_clouds/2.png', 719),
        new Cloud('../img/5_background/layers/4_clouds/1.png', 719*2),
        new Cloud('../img/5_background/layers/4_clouds/2.png', 719*3),
        new Cloud('../img/5_background/layers/4_clouds/1.png', 719*4),
        new Cloud('../img/5_background/layers/4_clouds/2.png', 719*5), 
    ],
    [
        new BackgroundObject('../img/5_background/layers/air.png', -719),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('../img/5_background/layers/air.png', 0),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/air.png', 719),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('../img/5_background/layers/air.png', 719*2),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 719*2),
        new BackgroundObject('../img/5_background/layers/air.png', 719*3),
        new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719*3)
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ],
    [
        new BottleOnGround('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new BottleOnGround('../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
    ]
    );
// }