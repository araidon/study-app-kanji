import { useState } from 'react'
import TitleScreen from './components/TitleScreen'
import GameScreen from './components/GameScreen'
import ResultScreen from './components/ResultScreen'
import type { GameResult, HintSettings } from './types'

type Screen = 'title' | 'game' | 'result'

const DEFAULT_DURATION = 5 * 60 // 5分
const DEFAULT_HINT_SETTINGS: HintSettings = { enabled: true, delay: 20 }

function App() {
  const [screen, setScreen] = useState<Screen>('title')
  const [gameResult, setGameResult] = useState<GameResult | null>(null)
  const [gameDuration, setGameDuration] = useState(DEFAULT_DURATION)
  const [hintSettings, setHintSettings] = useState<HintSettings>(DEFAULT_HINT_SETTINGS)

  const handleStartGame = (duration: number, hints: HintSettings) => {
    setGameDuration(duration)
    setHintSettings(hints)
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
      {screen === 'game' && <GameScreen onGameEnd={handleGameEnd} gameDuration={gameDuration} hintSettings={hintSettings} />}
      {screen === 'result' && gameResult && (
        <ResultScreen result={gameResult} onPlayAgain={handlePlayAgain} />
      )}
    </>
  )
}

export default App
