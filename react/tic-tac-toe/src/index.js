import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
    return (
      <button className="square"
	      onClick={props.onClick}
	      style={props.isWinner ? {background: "green"} : {}}>
        <b>{props.value}</b>
      </button>)
}

class Board extends React.Component {
  
  renderSquare(i, isWinnerSquare) {
    return (<Square
	      value={this.props.squares[i]}
	      onClick={() => this.props.onClick(i)}
	      isWinner={isWinnerSquare}
	    />);
  }

  render() {
    const renderedBoard = []
    for (let i = 0; i < 3; i++) {
      const renderedRow = []
      for (let j = 0; j < 3; j++) {
	const position = i + j * 3
	const isWinnerSquare = this.props.winnerSquares.includes(position)
	renderedRow.push(<span key={position}>{this.renderSquare(position, isWinnerSquare)}</span>)
      }
      renderedBoard.push(<div className="board-row" key={i}>{renderedRow}</div>)
    }
    return (
      <div>{renderedBoard}</div>
    );
  }
}

class Game extends React.Component {

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares).winner || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{squares, moveLocation: i}]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  reverseMovesOrder() {
    this.setState({
      movesInAscendingOrder: !this.state.movesInAscendingOrder
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      history: [{
	squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
      movesInAscendingOrder: true,
    }
  }
  
  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const { winner, winnerSquares } = calculateWinner(current.squares)
    const isDraw = this.state.stepNumber === 9 && !winner

    const moves = history.map((step, move) => {
      let desc
      let col
      let row
      let coordinates
      if (move) {
	desc = 'Go to move #' + move
	col = Math.floor(step.moveLocation / 3) + 1
	row = (step.moveLocation + 1) % 3 || 3
	coordinates = <p>({col},{row})</p>
      } else {
	desc = 'Go to game start'
      }
      if ((move || 0) === this.state.stepNumber) {
	desc = <b>{desc}</b>
	coordinates = <b>{coordinates}</b>
      }
      return (
	<li key={move}>
	  <button onClick={() => this.jumpTo(move)}>{desc}</button>
	  {coordinates}
	</li>
      )
    })
    
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else if (isDraw) {
      status = 'Draw.'
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0')
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
	    squares={current.squares}
	    onClick={(i) => this.handleClick(i)}
	    winnerSquares={winnerSquares}
	  />
        </div>
        <div className="game-info">
          <div>{status}</div>
	  <button onClick={() => this.reverseMovesOrder()}>Reverse moves order</button>
          <ol>{this.state.movesInAscendingOrder ? moves : moves.reverse()}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
	winner: squares[a],
	winnerSquares: lines[i]
      }
    }
  }
  return {
    winner: null,
    winnerSquares: []
  }
}
