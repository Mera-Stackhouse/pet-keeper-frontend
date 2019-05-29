//Sign up

fetch('http://localhost:3000/api/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: {ev.target.value of username},
      password: {ev.target.value of password},
      bio: {ev.target.value of bio},
      avatar_url: {},
      neighborhood: {}
    }
  })
})

  // what to do now?


//Sign in
fetch('http://localhost:3000/api/v1/login', {
  method: 'POST',
  body: JSON.stringify({
    user: {
      username: {ev.target.value of username},
      password: {ev.target.value of password}
    }
  })
})

// this one comes back with token. save that into session
