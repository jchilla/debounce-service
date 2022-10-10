import _ from 'underscore'


module.exports.debouncer =  (func: Function, timeout= 200)  => {
  return _.debounce(() => {
    func()
  },timeout,false)
}
