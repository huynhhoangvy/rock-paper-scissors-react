import React from 'react';
import { ListGroup, Card, Button, ButtonToolbar, Container, Row, Col, Alert, ListGroupItem } from 'react-bootstrap';
import './App.css';

const choices = [
  "paper", "scissors", "rock"
]

class App extends React.Component {
  constructor(props) {
    super (props)
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    this.state = {
      computerChoice: computerChoice,
      gameHistory: []
    }
  }
  onPlayerChoose(playerChoice) {
    const { computerChoice, gameHistory } = this.state
    let result;
    if (playerChoice === computerChoice) {
      result = (<ListGroupItem variant="light">Draw!</ListGroupItem>)
    }

    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        result = (<ListGroupItem variant="danger">You Lost!</ListGroupItem>)
      } if (computerChoice === "scissors") {
        result = (<ListGroupItem variant="success">You Won!</ListGroupItem>)
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        result = (<ListGroupItem variant="success">You Won!</ListGroupItem>)
      } if (computerChoice === "scissors") {
        result = (<ListGroupItem variant="danger">You Lost!</ListGroupItem>)
      }
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        result = (<ListGroupItem variant="success">You Won!</ListGroupItem>)
      } if (computerChoice === "rock") {
        result = (<ListGroupItem variant="danger">You Lost!</ListGroupItem>)
      }
    }

    const newGameResult = {
      result,
      playerChoice,
      computerChoice
    }

    gameHistory.push(newGameResult)
    const newComputerChoice = choices[Math.floor(Math.random() * choices.length)]


    this.setState({ gameHistory, playerChoice, computerChoice: newComputerChoice})
  }

getAppropriateImg = () => {
  if (this.state.playerChoice === "rock") {
    return require('./img/rock.jpg')
  } if (this.state.playerChoice === "paper") {
    return require('./img/paper.jpg')
  } if (this.state.playerChoice === "scissors") {
    return require('./img/scissors.jpg')
  }
  return require('./img/main.jpg')
}

renderPlayerPrompt() {
  if (this.state.playerChoice === "scissors") {
    return <Alert variant="danger"><h2>You choose Scissors!</h2></Alert>
  }   if (this.state.playerChoice === "rock") {
    return <Alert variant="warning"><h2>You choose Rock!</h2></Alert>
  }   if (this.state.playerChoice === "paper") {
    return <Alert variant="primary"><h2>You choose Paper!</h2></Alert>
  }
    return <Alert variant="dark"><h2>Choose your destiny!</h2></Alert>
}

renderGameHistory() {
  const gameHistoryHTML = this.state.gameHistory.map((game) => {
    return <h5>{game.result}</h5>
  })
  return gameHistoryHTML
}

  render () {
    console.log("thisstate ", this.state)
    return (
      <div className="App ">
        <Row>
        <Col sm={8}>
          
        <Card>
        <h1>Rock Paper Scissors</h1>
          <div>
            <Card.Img variant="top" src={this.getAppropriateImg()} style={{ width: 600, height: 500}} className="rounded-circle"/>
          </div>
          <Card.Body>
            <Card.Text>
              {this.renderPlayerPrompt()}
            </Card.Text>
            <div>
              <Button onClick={() => this.onPlayerChoose("rock")} variant="primary">Rock</Button>
              <Button onClick={() => this.onPlayerChoose("paper")} variant="warning">Paper</Button>
              <Button onClick={() => this.onPlayerChoose("scissors")} variant="danger">Scissors</Button>
            </div>
          </Card.Body>
        </Card>
        </Col>
        <br />
        <Col sm={4}>
        <ListGroup>
          <h1>Game History</h1>
          {this.renderGameHistory()}
        </ListGroup>
        </Col>
        </Row>
      </div>
    );
  }
}

export default App;
// import App from "./App"

// export { App }
// import { App } from "./App"