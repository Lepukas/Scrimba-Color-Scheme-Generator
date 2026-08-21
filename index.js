const seedColor = document.getElementById("color")
const colorScheme = document.getElementById("scheme")
const colorBtn = document.getElementById("color-btn")

/*https://www.thecolorapi.com/scheme?hex=0047AB&format=html&mode=analogic&count=5*/ 

colorBtn.addEventListener("click", async()=>{
    const colors = await getColor()
    renderColor(colors)
})

async function getColor() {
    const url = `https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${colorScheme.value}&count=5`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
    const result = await response.json()
    return result.colors
    } catch(error) {
        console.log(error.message)
    }
}

function renderColor(colors){
    colors.forEach((color, index) => {
        const colorBox = document.getElementById(`color${index+1}`)
        const hexBox = document.getElementById(`hex${index+1}`)
        hexBox.textContent = color.hex.value
        colorBox.style.backgroundColor = color.hex.value
    })
}


