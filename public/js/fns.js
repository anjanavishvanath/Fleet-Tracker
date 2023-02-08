const dltBtns = document.querySelectorAll(".dlt")

async function deleteItem() {
    const deviceId = this.parentNode.dataset.id  
    console.log(deviceId)  
    try {
        const response = await fetch('/device/delete', {
            method: "delete",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'devicetoDlt' : deviceId
            })
        })
        console.log(response)
        location.reload()
    } catch (error) {
        console.error(error)
    }
} 

Array.from(dltBtns).forEach(el => {
    el.addEventListener('click', deleteItem)
})

