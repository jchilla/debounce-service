import _ from 'underscore'


exports.debouncer =  (func: Function, timeout= 200)  => {
  return _.debounce(() => {
    func()
  },timeout,false)
}
