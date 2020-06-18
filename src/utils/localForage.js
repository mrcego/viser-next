import Vue from 'vue'

const methods = {
  get: function(key) {
    return Vue.$vlf.getItem(key)
  },
  set: function(key, value) {
    return Vue.$vlf.setItem(key, value)
  },
  destroy: function(key) {
    return Vue.$vlf.removeItem(key)
  }
}

export default function localForage(method, key, value = null) {
  if (value && (method == 'get' || method == 'destroy'))
    throw `Hey!! Only provide a key for '${method}' method!`

  if (!value && method == 'set') throw `Hey!! Provide a value for '${key}' key!`

  return new Promise((resolve, reject) => {
    try {
      methods[method](key, value)
        .then(v => {
          if (v === null) resolve(`There isn't a '${key}' key.`)

          if (typeof v == 'undefined')
            reject(`Destroyed ${key}... if there is one.`)

          resolve(`'${v}' from '${method}' method in '${key}' key.`)
        })
        .catch(err => reject(err))
    } catch (err) {
      if (err instanceof ReferenceError || err instanceof TypeError) {
        throw `There isn't a method called '${method}'. Are you misspelling, uh?`
      }
    }
  })
}
