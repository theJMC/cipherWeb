console.log("Client Side Running")

const form = document.getElementById('input-form')
const output = document.getElementById('output-text')


form.addEventListener("submit", (e) => {
    console.log('form submitted')
    e.preventDefault()
    const input = document.getElementById('input').value
    const shift = document.getElementById('shift').value
    const method = document.getElementById('method').value
    const cipher = document.getElementById('CipherType').value
    var methodText
    var url
    if (method == "e") {
        methodText = 'Encode'
        url = `/api/${cipher}/encode/${input}/${shift}`
    } else if (method == "d") {
        methodText = 'Decode'
        url = `/${cipher}/decode/${input}/${shift}`
    }
    var text = ''
    axios.get(url)
    .then(function (response) {
        output.innerText = response['data']
    })
    .catch(function (error) {
        console.log(error);
    })
})

