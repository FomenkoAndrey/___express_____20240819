import chalk from 'chalk'
import * as util from 'node:util'

export const log = (...args) => {
  const color = args.pop()  // Витягуємо останній аргумент як колір

  // Перевіряємо, чи існує метод в chalk для заданого кольору
  if (typeof chalk[color] !== 'function') {
    console.error(`Color '${color}' is not supported by chalk`)
    return
  }

// Логуємо кожен аргумент окремо
  args.forEach(arg => {
    if (arg === undefined) {
      console.log(chalk[color]('undefined'))  // Виводимо undefined у вказаному кольорі
      return
    }

    if (typeof arg === 'string') {
      console.log(chalk[color](arg))  // Виводимо рядки у вказаному кольорі
      return
    }

    // Використовуємо util.inspect для виводу об'єктів
    console.log(chalk[color](util.inspect(arg, { depth: null, colors: true })))
  })
}

/*
 ! Colors
 black
 red
 green
 yellow
 blue
 magenta
 cyan
 white
 blackBright (alias: gray, grey)
 redBright
 greenBright
 yellowBright
 blueBright
 magentaBright
 cyanBright
 whiteBright

 ! Background colors
 bgBlack
 bgRed
 bgGreen
 bgYellow
 bgBlue
 bgMagenta
 bgCyan
 bgWhite
 bgBlackBright (alias: bgGray, bgGrey)
 bgRedBright
 bgGreenBright
 bgYellowBright
 bgBlueBright
 bgMagentaBright
 bgCyanBright
 bgWhiteBright
*/
