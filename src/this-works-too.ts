/* eslint-disable import/order */
import { b } from './module-b'
import chalk from 'chalk'
import { c } from './module-c'
import { a } from './module-a'

console.log(chalk.greenBright(a))
console.log(chalk.greenBright(b))
console.log(chalk.greenBright(c))
