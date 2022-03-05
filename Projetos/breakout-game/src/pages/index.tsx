import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Brick } from 'src/types'
import classes from '../styles/home.module.css'

const DEFAULT_SPEED = 4
const PADDLE_DEFAULT_SPEED = 7

let interval = {} as NodeJS.Timeout

let xPosition = 0
let yPosition = 0
let xSpeed = DEFAULT_SPEED
let ySpeed = -DEFAULT_SPEED
let ballRadius = 10

let paddleHeight = 10
let paddleWidth = 75
let paddleXPosition = 0
const paddleOffsetBottom = 30

let rightPressed = false
let leftPressed = false

let brickRowCount = 3
let brickColumnCount = 5
let brickWidth = 75
let brickHeight = 20
let brickPadding = 10
let brickOffsetTop = 30

let bricks: Brick[][] = []
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = []
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 }
  }
}

const getXPosition = (canvasWidth: number) => canvasWidth / 2
const getYPosition = (canvasHeight: number) => canvasHeight - 60

const resetGame = (canvas: HTMLCanvasElement) => {
  xPosition = getXPosition(canvas.width)
  yPosition = getYPosition(canvas.height)
  xSpeed = DEFAULT_SPEED
  ySpeed = -DEFAULT_SPEED
  paddleXPosition = (canvas.width - paddleWidth) / 2
  rightPressed = false
  leftPressed = false
}

const setupCanvas = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  xPosition = getXPosition(canvas.width)
  yPosition = getYPosition(canvas.height)
  paddleXPosition = (canvas.width - paddleWidth) / 2

  return canvas.getContext('2d')
}

const drawBall = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath()
  ctx.arc(xPosition, yPosition, ballRadius, 0, Math.PI * 2)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
}

const drawPaddle = (ctx: CanvasRenderingContext2D, canvasHeight: number) => {
  ctx.beginPath()
  ctx.rect(paddleXPosition, canvasHeight - paddleHeight - paddleOffsetBottom, paddleWidth, paddleHeight)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
}

const drawBricks = (ctx: CanvasRenderingContext2D, canvasWidth: number) => {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brickXPosition = c * (brickWidth + brickPadding) + canvasWidth / 3.2
      const brickYPosition = r * (brickHeight + brickPadding) + brickOffsetTop
      bricks[c][r].x = brickXPosition
      bricks[c][r].y = brickYPosition
      ctx.beginPath()
      ctx.rect(brickXPosition, brickYPosition, brickWidth, brickHeight)
      ctx.fillStyle = '#0095DD'
      ctx.fill()
      ctx.closePath()
    }
  }
}

const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null) => {
  if (!ctx) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall(ctx)
  drawPaddle(ctx, canvas.height)
  drawBricks(ctx, canvas.width)
  // console.table({
  //   xPosition,
  //   yPosition,
  //   xSpeed,
  //   ySpeed,
  //   canvasWidth: canvas.width,
  //   canvasHeight: canvas.height,
  // })

  if (xPosition + xSpeed > canvas.width - ballRadius || xPosition + xSpeed < ballRadius) xSpeed = -xSpeed
  if (yPosition + ySpeed < ballRadius) ySpeed = -ySpeed
  if (
    xPosition > paddleXPosition - ballRadius &&
    xPosition < paddleXPosition + paddleWidth + ballRadius &&
    yPosition + ySpeed > canvas.height - (ballRadius + paddleOffsetBottom + paddleHeight) &&
    yPosition + ySpeed < canvas.height - (ballRadius + paddleOffsetBottom)
  )
    ySpeed = -ySpeed
  if (yPosition + ySpeed > canvas.height - ballRadius) {
    alert('GAME OVER')
    resetGame(canvas)
  }

  xPosition += xSpeed
  yPosition += ySpeed

  if (rightPressed) {
    paddleXPosition += PADDLE_DEFAULT_SPEED
    if (paddleXPosition + paddleWidth > canvas.width) paddleXPosition = canvas.width - paddleWidth
  }
  if (leftPressed) {
    paddleXPosition -= PADDLE_DEFAULT_SPEED
    if (paddleXPosition < 0) paddleXPosition = 0
  }
}

const keyHandler = (event: KeyboardEvent, enable = true) => {
  if (['Right', 'ArrowRight'].includes(event.key)) return (rightPressed = enable)
  if (['Left', 'ArrowLeft'].includes(event.key)) return (leftPressed = enable)
}

const collisionDetection = () => {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brick = bricks[c][r]
      if (
        xPosition > brick.x &&
        xPosition < brick.x + brickWidth &&
        yPosition > brick.y &&
        yPosition < brick.y + brickHeight
      )
        ySpeed = -ySpeed
    }
  }
}

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = setupCanvas(canvas)

    interval = setInterval(() => draw(canvas, ctx), 10)
    return () => clearInterval(interval)
  }, [canvasRef])

  useEffect(() => {
    document.addEventListener('keydown', event => keyHandler(event), false)
    document.addEventListener('keyup', event => keyHandler(event, false), false)

    return () => {
      document.removeEventListener('keydown', event => keyHandler(event), false)
      document.removeEventListener('keyup', event => keyHandler(event, false), false)
    }
  }, [])

  return (
    <main className={classes.main}>
      <Head>
        <title>Breakout Game</title>
        <meta name="description" content="Breakout game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <section className={classes.status}>
        <p>
          <strong>XPosition</strong>
          <span>{xPosition}</span>
        </p>
        <p>
          <strong>YPosition</strong>
          <span>{yPosition}</span>
        </p>
        <p>
          <strong>XSpeed</strong>
          <span>{xSpeed}</span>
        </p>
        <p>
          <strong>YSpeed</strong>
          <span>{ySpeed}</span>
        </p>
      </section> */}
      <canvas ref={canvasRef} width="300" height="300" className="canvas">
        It wasn't possible load the canvas
      </canvas>
    </main>
  )
}

export default Home
