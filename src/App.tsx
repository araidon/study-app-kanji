import { useState } from 'react'
import TitleScreen from './components/TitleScreen'
import GameScreen from './components/GameScreen'
import ResultScreen from './components/ResultScreen'
import type { GameResult } from './types'

type Screen = 'title' | 'game' | 'result'

const DEFAULT_DURATION = 5 * 60 // 5分

function App() {
  const [screen, setScreen] = useState<Screen>('title')
  const [gameResult, setGameResult] = useState<GameResult | null>(null)
  const [gameDuration, setGameDuration] = useState(DEFAULT_DURATION)

  const handleStartGame = (duration: number) => {
    setGameDuration(duration)
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
      {screen === 'game' && <GameScreen onGameEnd={handleGameEnd} gameDuration={gameDuration} />}
      {screen === 'result' && gameResult && (
        <ResultScreen result={gameResult} onPlayAgain={handlePlayAgain} />
      )}
    </>
  )
}

export default App
