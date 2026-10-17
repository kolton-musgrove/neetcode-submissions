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

            val < currMin ? this.minStack.push(val) : this.minStack.push(currMin)
        }

        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() { return this.stack.at(-1) }

    /**
     * @return {number}
     */
    getMin() { return this.minStack.at(-1) }
}
