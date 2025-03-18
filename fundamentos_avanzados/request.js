const url = 'https://jsonplaceholder.typicode.com/posts'
const algunosDatos = null
// manejo correcto
function handle (res) {
  if (!res.ok) {
    throw new Error('Error en la petición')
  }
  return res.json()
}

// método get con then/catch
fetch(url)
  .then(response => handle(response), () => console.error('error de internet'))
// método post con then/catch
fetch(url,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: algunosDatos
    })
  })
  .then(response => handle(response), () => console.error('error de internet'))

// método get con async/await
async function getAsync () {
  try {
    const response = await fetch(url)
    return await handle(response)
  } catch (error) {
    console.log('error de internet')
  }
}
getAsync()
// método post con async/await
async function postAsync () {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        api: 'key'
      }
    })
    return await handle(response)
  } catch (error) {
    console.log('error de internet')
  }
}
postAsync()
