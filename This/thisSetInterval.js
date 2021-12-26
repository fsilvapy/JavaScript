//this


function segund() {
    this.segund = 0

    setInterval(() => {
        this.segund++
        console.log(this.segund)
    }, 1000)
}

new segund()


