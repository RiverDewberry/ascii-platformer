Level.drawLevel();

let start = true;
let interval = undefined;

window.addEventListener('keydown',
    (e) => {
        if (start === true) {
            if (e.key === 'ArrowRight') Level.loadLevel(levels[++levelIndex % levels.length]);
            if (e.key === 'ArrowLeft') {
                if (levelIndex === 0) levelIndex = levels.length;
                --levelIndex;
                Level.loadLevel(levels[levelIndex % levels.length]);
            }

            Level.drawLevel();

            for(let i = 0; i < charArray.length; i++)
            {
                charArray[i] = previousChars[i];
            }

            draw();

            if (e.key === 'Enter') {
                start = false;
                interval = setInterval(gameLoop, 20);
            }
        }
        else {
            if(e.key === "Escape"){
                displayArea.pos.x = 0;
                displayArea.pos.y = 0;

                for(let i = 0; i < levelData.length; i++)
                {
                    levels[i] = new Level(levelData[i]);
                }

                killPlayer();
                Level.drawLevel();
                start = true;
                clearInterval(interval);
            }
        }
    }
);