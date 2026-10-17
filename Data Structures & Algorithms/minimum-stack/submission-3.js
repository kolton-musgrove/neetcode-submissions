class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
        console.log('initialized')
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const stackLength = this.stack.length

        if (!stackLength) {
            this.minStack.push(val)
        } else {
            const currMin = this.minStack.at(-1)

            if (val < currMin) {
                this.minStack.push(val)
            } else {
                this.minStack.push(currMin)
            }
        }

        this.stack.push(val)
        console.log("pushed ", val, this.stack, this.minStack)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
        console.log("popped", this.stack, this.minStack)
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack.at(-1)

        console.log("top: ", top, this.stack, this.min)
        return top
    }

    /**
     * @return {number}
     */
    getMin() {
        const min = this.minStack.at(-1)

        console.log("min: ", min, this.stack, this.minStack)
        return min
    }
}
