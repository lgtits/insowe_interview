const submit = document.querySelector('.submit')
const table = document.querySelector('.table')
let base_URL = 'https://reqres.in/api/users'

submit.addEventListener(('click'), async function (event) {
  event.preventDefault()
  let name = document.querySelector('#input-name').value
  let job = document.querySelector('#input-job').value
  if (!name || !job) {
    alert('請輸入姓名及職業!')
    return
  }
  try {
    let response = await axios.post(base_URL, {
      name,
      job
    })
    table.innerHTML = `
      <tbody>
        <tr>
          <td class="name">${response.data.name}</td>
        </tr>
        <tr> 
          <td class="job">${response.data.job}</td>
        </tr>
        <tr> 
          <td class="id">${response.data.id}</td>
        </tr>
        <tr>  
          <td class="createdAt">${response.data.createdAt}</td>
        </tr>
      </tbody>
    `
  } catch (error) {
    console.log(error)
  }
})