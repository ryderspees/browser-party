class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    create() {
        this.add.text(100, 100, 'Main Menu', { fill: '#000000' });
        this.add.text(100, 150, 'Enter Name:', { fill: '#000000' });
        showTextInputPopup();
        this.scene.start('GameScene');
    }
}

function showTextInputPopup() {
    var textInput = document.getElementById('nameInput');
    textInput.style.display = 'block';
    textInput.focus();

    textInput.addEventListener('keypress', function onEnter(event) {
        if (event.key === 'Enter') {
            textInput.style.display = 'none';
            textInput.removeEventListener('keypress', onEnter);
            // Process the input value here
            console.log(textInput.value);
        }
    });
}

export default MainMenuScene;
