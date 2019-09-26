(function () {
    //   write your code here
    const BASE_URL = 'https://movie-list.alphacamp.io'
    const INDEX_URL = BASE_URL + '/api/v1/movies/'
    const POSTER_URL = BASE_URL + '/posters/'
    const data = []
    const dataPanel = document.getElementById('data-panel')

    axios.get(INDEX_URL)
        .then((response) => {
            data.push(...response.data.results)
            console.log(data);
        })
        .catch((err) => console.log(err))

    function displayDataList(data) {
        let htmlContent = ''

        data.forEach(function(item, index) {
            htmlContent += `
                <div>s
                    <img src="${POSTER_URL}${item.image}">
                    <h6>${item.title}</h6>
                </div>
            `
        })

        dataPanel.innerHTML = htmlContent
    }
})()