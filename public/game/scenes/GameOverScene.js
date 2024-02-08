class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    init(data) {
        // Receive score or any other relevant data from the previous scene
        this.finalScore = data.score || 0;
    }

    create() {
        // Display "Game Over" text
        this.add.text(400, 200, 'Game Over', { fontSize: '32px', fill: '#FFF' }).setOrigin(0.5);

        // Display final score
        this.add.text(400, 250, `Final Score: ${this.finalScore}`, { fontSize: '24px', fill: '#FFF' }).setOrigin(0.5);

        // Clickable text to restart the game
        const restartText = this.add.text(400, 300, 'Restart', { fontSize: '20px', fill: '#FFF' })
            .setInteractive()
            .setOrigin(0.5);

        restartText.on('pointerdown', () => {
            // Restart the game by starting the main game scene
            this.scene.start('GameScene');
        });

        // Optionally, add a button or text to go back to the main menu
        const menuText = this.add.text(400, 350, 'Main Menu', { fontSize: '20px', fill: '#FFF' })
            .setInteractive()
            .setOrigin(0.5);

        menuText.on('pointerdown', () => {
            // Go back to the main menu scene
            this.scene.start('MainMenuScene');
        });

        // Center the canvas (optional, depending on your game's design)
        this.cameras.main.centerOn(400, 300);
    }
}

export default GameOverScene;
