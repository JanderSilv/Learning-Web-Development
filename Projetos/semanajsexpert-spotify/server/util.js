import pino from 'pino'

export const logger = pino({
  enabled: !!!process.env.DISABLED_LOG,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
})
