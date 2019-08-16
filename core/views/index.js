// we import > export so other files can access it through
// import { some_module } from './core/views'
// Q: is there a better way to import/export this?
import  CounterView  from './counter/CounterView'
import FirstView from './first/FirstView'
import SecondView from './second/SecondView'
export { CounterView, FirstView, SecondView }