// Fazer inteligência artificial

const jogoVelha = {

    board: ["", "", "", "", "", "", "", "", "",],
    simbols: {
        options: ['X', 'O'],
        turnIndex: 0,
        Change: function() {
            this.turnIndex = (this.turnIndex === 0 ? 1 : 0)
        }
    },
    containerElement: null,
    gameOver: false,
    winningSequences: [
        // Sequencias Horizontais
        [0,1,2],
        [3,4,5],
        [6,7,8],
        // Sequencias Verticais
        [0,3,6],
        [1,4,7],
        [2,5,8],
        // Sequencias Diagonais
        [0,4,8],
        [2,4,6]
    ],

    Start: function() {
        this.board.fill('');
        this.Draw();
        this.gameOver = false;
    },

    Init: function(container) {
        this.containerElement = container;
    },

    Draw: function() {
        let content = "";

        for (i in this.board) {
            content += `<div onclick="jogoVelha.MakePlay('${i}')">${this.board[i]}</div>`;
        }

        this.containerElement.innerHTML = content;

        /* this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.make_play('${index}')"> ${element} </div>`).reduce((content, current) => content + current); */
    },

    MakePlay: function(position) {
        if (this.gameOver) return false;
        if (this.board[position] === "") {
            this.board[position] = this.simbols.options[this.simbols.turnIndex];
            this.Draw();
            let winningSequencesIndex =  this.CheckWinning(this.simbols.options[this.simbols.turnIndex]);
            if(winningSequencesIndex >= 0) {
                this.StylizeWinnerSequence(this.winningSequences[winningSequencesIndex]);
                this.GameIsOver();
                this.CheckWinner();
            } else {
                this.simbols.Change();
            }
            return true;
        } else {
            return false;
        }
    },

    CheckWinning: function(simbol) {
        for (i in this.winningSequences) {
            if (this.board[this.winningSequences[i][0]] == simbol &&
                this.board[this.winningSequences[i][1]] == simbol &&
                this.board[this.winningSequences[i][2]] == simbol) {
                    console.log(`Sequencia Vencedora ${i}`)
                    return i;
            }
        };
        return -1;
    },

    GameIsOver: function() {
        this.gameOver = true;
        console.log("GAME OVER");
    },

    CheckWinner: function() {
        let aws;
        if(this.simbols.turnIndex == 0) {
            aws = confirm('Jogador "X" ganhou a partida, Reiniciar?');
        } else {
            aws = confirm('Jogador "O" ganhou a partida, Reiniciar?');  
        }
        if(aws) this.Start();
    },

    StylizeWinnerSequence: function(sequence) {
        sequence.forEach((position) => {
            this
                .containerElement
                .querySelector(`div:nth-child(${position + 1})`)
                .classList.add('winner');
        });
    },
};