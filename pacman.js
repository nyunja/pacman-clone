document.addEventListener('DOMContentLoaded', () => {
    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid')

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    // 0 - pac-dot
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    let cells = [];

    console.log(cells)

    // create board
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const cell = document.createElement('div')
            cell.id = i
            grid.appendChild(cell)
            cells.push(cell)

            if (layout[i] === 0) {
                cells[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                cells[i].classList.add('wall')
            } else if (layout[i] === 2) {
                cells[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {
                cells[i].classList.add('power-pellet')
            }
        }
    }

    createBoard();

    // create characters
    // draw pacmam into the board

    let pacmanCurrentIndex = 490
    // let previousIndex =490
    // let nextPacmanIndex = 490
    cells[pacmanCurrentIndex].classList.add('pac-man');

    // move pac-man

    function movePacman(e) {
        cells[pacmanCurrentIndex].classList.remove('pac-man')
        switch (e.key) {
            case 'ArrowLeft':
                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !cells[pacmanCurrentIndex -1 ].classList.contains('wall') &&
                    !cells[pacmanCurrentIndex -1 ].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex -= 1
                }
                if (cells[pacmanCurrentIndex-1] === cells[363]) {
                    pacmanCurrentIndex = 391
                }
                break
            case "ArrowRight":
                if (
                    pacmanCurrentIndex % width !== width -1 &&
                    !cells[pacmanCurrentIndex +1 ].classList.contains('wall') &&
                    !cells[pacmanCurrentIndex +1 ].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex += 1
                }
                if (cells[pacmanCurrentIndex+1] === cells[392]) {
                    pacmanCurrentIndex = 364
                }
                break
            case "ArrowUp":
                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !cells[pacmanCurrentIndex - width ].classList.contains('wall') &&
                    !cells[pacmanCurrentIndex - width ].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex -= width
                }
                break
            case "ArrowDown":
                if (
                    pacmanCurrentIndex % width !== width -1 &&
                    !cells[pacmanCurrentIndex + width ].classList.contains('wall') &&
                    !cells[pacmanCurrentIndex + width ].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex += width
                }
                break
        }
        cells[pacmanCurrentIndex].classList.add('pac-man')
        eatPacDot();
        powerPelletEaten();

    }

    // pac dot eaten
    function eatPacDot() {
        if (cells[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score += 1
            scoreDisplay.innerHTML = score
            cells[pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }

    // power pellet power up
    function powerPelletEaten() {
        if (cells[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10
            scoreDisplay.innerHTML = score
            cells[pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }

    document.addEventListener('keydown', movePacman);

    class Ghost {
        constructor(clasName, startIndex, speed) {
            this.className = clasName
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NamedNodeMap
            // this.direction = this.getRandomDirection()
            // this.intervalId = setInterval(this.move.bind(this), this.speed)
        }
    }

    // get all ghosts
    const ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ]

    // draw ghosts on the grid
    ghosts.forEach(ghost => {
        cells[ghost.startIndex].classList.add(ghost.className);
        cells[ghost.startIndex].classList.add('ghost');
        // ghost.timerId = setInterval(ghost.move.bind(ghost), ghost.speed)
    })
})