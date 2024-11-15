class Level {
   enemies;
   clouds;
   backgroundObjects;
   coins;
   bottles;
   level_end_x = 2250;

   constructor(enemies, clouds, backgroundObjects, coins, bottles) {
      this.enemies = enemies;
      this.clouds = clouds;
      this.backgroundObjects = backgroundObjects;
      this.coins = coins;
      this.bottles = bottles;
   }

   /**
    * removes a coin from the level's coin array
    * @param {*} index 
    */
   removeCoins(index) {
      if (index > -1) {
         this.coins.splice(index, 1);
      };
   }

   /**
   * removes a bottle from the level's bottle array
   * @param {*} index 
   */
   removeBottles(index) {
      if (index > -1) {
          this.bottles.splice(index, 1);
      };
   }

   /**
   * iterates through the list of enemies and removes any enemy that has zero energy from the level.
   */
   removeEnemy() {
      this.enemies.forEach((enemy, index) => {
          if (enemy.energy == 0) {
              if (index > -1) {
                 this.enemies.splice(index, 1);
              };
          };   
      });
      if (this.enemies.length == 0) {
          chicken_sound.pause();
      };
   }
}