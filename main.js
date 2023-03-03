const form = document.querySelector('form')
const email = document.querySelector('.email')
const password = document.querySelector('.password')

// const base = 'https://todo-app-api-production-1ab3.up.railway.app/'
const base = 'https://ola-todo-app.cyclic.app/'
// const base = 'http://localhost:9000/'

form.onsubmit = async (e) => {
  e.preventDefault()
  const opt = {
    email: email.value,
    password: password.value,
  }

  try {
    const { data } = await axios.post(`${base}api/v1/auth/login`, opt, {
      withCredentials: true,
    })
    console.log(data)
  } catch (error) {
    console.log(error)
  }

  // console.log(opt)
}
