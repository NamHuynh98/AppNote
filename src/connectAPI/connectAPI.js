const URL = "http://192.168.1.5:3000/api/Notes"
export var GET = () => {
    let fetchGET;
    fetchGET = fetch(URL)
        .then(res => res.json())
        .catch(err => console.log(err))
    return fetchGET;
}
export var DELETE = (id) => {
    fetch(URL + "/" + id, {
        method: 'DELETE',
        headers: { 'Accept': 'application/json' },
    })
        .then(res => res.json())
        .then(res => console.log(res))
}
export var POST = (data) => {
    fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            title: data.title,
            content: data.content
        }),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => console.log(res))
}
export var PUT = (id, data) => {
    fetch(URL + "/" + id, {
        method: "PUT",
        body: JSON.stringify({
            title: data.title,
            content: data.content
        }),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => console.log(res))
}