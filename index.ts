import _ from 'underscore'


export default (func: Function, timeout= 200)  => {
  return _.debounce(() => {
    func()
  },timeout,false)
}
