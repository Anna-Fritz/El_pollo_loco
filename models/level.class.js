class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    level_end_x = 2250;

     constructor(enemies, clouds, backgroundObjects, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
     }
}