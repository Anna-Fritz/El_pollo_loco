const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chick(),
        new Chick(),
        new Chick(),

        new Endboss()
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
    ]
);