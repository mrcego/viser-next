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
  },
  destroyAll: function() {
    return Vue.$vlf.clear()
  }
}

function descriptionResolver(method, key, response) {
  if (response === null) {
    return `There isn't a '${key}' key.`
  }

  if (typeof response == 'undefined') {
    if (key) {
      return `Destroyed '${key}'... if there is one.`
    } else {
      return `Destroyed all keys and offline DB now is clean.`
    }
  }
  return `'${response}' from '${method}' method in '${key}' key.`
}

export default function localForage(method, key, value = null) {
  if (value && (method == 'get' || method == 'destroy'))
    throw `Hey!! Only provide a key for '${method}' method!`

  if (!value && method == 'set') throw `Hey!! Provide a value for '${key}' key!`

  if (method == 'destroyAll' && (key || value))
    throw `Parameters for '${method}' method isn't needed`

  return new Promise((resolve, reject) => {
    try {
      methods[method](key, value)
        .then(v => {
          resolve({
            response: v,
            description: descriptionResolver(method, key, v)
          })
        })
        .catch(err => reject(err))
    } catch (err) {
      if (err instanceof ReferenceError || err instanceof TypeError) {
        throw `There isn't a method called '${method}'. Are you misspelling, uh?`
      }
    }
  })
}
