class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    create() {
        // Add menu items and logic to start the game, etc.
        this.add.text(100, 100, 'Main Menu', { fill: '#ffffff' });
        this.add.text(100, 150, 'Press SPACE to start', { fill: '#ffffff' });

        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.start('GameScene');
        });
    }
}

export default MainMenuScene;
