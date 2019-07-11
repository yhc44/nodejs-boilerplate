const moment = require('moment-timezone')
const chalk = require('chalk')
export const timezone = 'Europe/Berlin'

const { createLogger, format, transports } = require('winston');
const { combine, printf } = format;

let timestampFunc = () => {
  return moment().tz(timezone).format("DD.MM.YYYY HH:mm:ss")
}
// let formatTime = (time) => {
//   return moment(time).tz(timezone).format("DD.MM.YYYY HH:mm:ss")
// }
export const TIME2 = _ => {
  return moment().tz(timezone)
}
const myFormat = printf(info => {
  let color = info.level === 'error' ? 'red' : info.level === 'info' ? 'green' : info.level === 'warn' ? 'yellow' : 'grey'
  // do not log in test
  return chalk[color].bold(`${timestampFunc()}`) + ` ${info.message}`;
});

export const logger = createLogger({
  format: combine(
    format.splat(),
    format.simple(),
    myFormat
  ),
  transports: [
    // new transports.File({ filename: 'logs/info.log', level: 'info'}),
    // new transports.File({ filename: 'logs/error.log', level: 'error'}),
    // new transports.File({ filename: 'logs/debug.log', level: 'debug'}),
    new transports.Console({ level: 'debug' })
  ]
})
if (process.env.NODE_ENV === 'test') {
  logger.transports[0].silent = true
}