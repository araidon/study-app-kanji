import { useState } from 'react'
import TitleScreen from './components/TitleScreen'
import GameScreen from './components/GameScreen'
import ResultScreen from './components/ResultScreen'
import type { GameResult } from './types'

type Screen = 'title' | 'game' | 'result'

function App() {
  const [screen, setScreen] = useState<Screen>('title')
  const [gameResult, setGameResult] = useState<GameResult | null>(null)

  const handleStartGame = () => {
    setScreen('game')
  }

  const handleGameEnd = (result: GameResult) => {
    setGameResult(result)
    setScreen('result')
  }

  const handlePlayAgain = () => {
    setGameResult(null)
    setScreen('title')
  }

  return (
    <>
      {screen === 'title' && <TitleScreen onStart={handleStartGame} />}
      {screen === 'game' && <GameScreen onGameEnd={handleGameEnd} />}
      {screen === 'result' && gameResult && (
        <ResultScreen result={gameResult} onPlayAgain={handlePlayAgain} />
      )}
    </>
  )
}

export default App
