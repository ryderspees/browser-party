class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        this.add.text(100, 150, 'Welcome to the Game', { fill: '#000000' });
    }

    update(time, delta) {
        // Game loop, handle player input, update entities, etc.
    }
}

export default GameScene;
