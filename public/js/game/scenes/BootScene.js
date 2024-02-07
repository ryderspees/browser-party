class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Load essential assets
        this.load.image('logo', 'assets/logo.png');
    }

    create() {
        // Setup and transition to the next scene
        this.scene.start('MainMenuScene');
    }
}

export default BootScene;
