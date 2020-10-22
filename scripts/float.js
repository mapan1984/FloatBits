class Float {
    constructor() {
        this.bits = [
            1, 1, 0, 0, 0, 0, 0, 0,
            1, 1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1,
        ]
        this.k = 8  // exp 阶码的位数
        this.n = 23  // frac 尾数（小数域）的位数
    }

    // 符号位
    get sign() {
        return this.bits.slice(0, 1)
    }

    set sign(sign) {
        this.bits[0] = sign
    }

    // 阶码
    get exp() {
        return this.bits.slice(1, this.k+1)
    }

    set exp(exp) {
        if (exp.length != this.k) {
            console.error('设置 exp 错误')
            return
        }
        for (let i = 0; i < this.k; i++) {
            this.bits[i + 1] = exp[i]
        }
    }

    // 尾数(小数域)
    get frac() {
        return this.bits.slice(this.k+1, this.k + 1 + this.n)
    }

    set frac(frac) {
        if (frac.length != this.n) {
            console.error('设置 frac 错误')
            return
        }
        for (let i = 0; i < this.n; i++) {
            this.bits[i + k + 1] = exp[i]
        }

    }

    get E() {
        let k = this.k  // exp 的位数
        let exp = this.exp
        if (exp.reduce((a, b) => a & b) == 1) {
        } else if (exp.reduce((a, b) => a | b) == 0) {
            console.log('exp 全为 0，非规格化')
            // exp 全为 0，非规格化
            // 计算阶码
            let bias = Math.pow(2, k - 1) - 1
            let E = 1 - bias
            console.log(`阶码：${E}`)
            return E
        } else {
            console.log('exp 规格化(!=0 && != 255)')
            // exp 规格化(!=0 && != 255)
            // 计算阶码
            let bias = Math.pow(2, k - 1) - 1
            let e = 0
            for (let i = k-1; i >= 0; i--) {
                e += Math.pow(2, i) * exp[k - 1 - i]
            }
            let E = e - bias
            console.log(`阶码：${E}`)
            return E
        }
    }

    get M() {
        let n = this.n  // frac 的位数
        let exp = this.exp
        if (exp.reduce((a, b) => a & b) == 1) {
        } else if (exp.reduce((a, b) => a | b) == 0) {
            // 计算尾数
            let M = 0
            for (let i = -1; i >= -n; i--) {
                M += Math.pow(2, i) * this.frac[-1 - i]
            }
            console.log(`尾数：${M}`)
            return M
        } else {
            // 计算尾数
            let M = 1
            for (let i = -1; i >= -n; i--) {
                M += Math.pow(2, i) * this.frac[-1 - i]
            }
            console.log(`尾数：${M}`)
            return M
        }

    }

    get value() {
        // 符号位
        let sign = Math.pow(-1, this.sign[0])

        let k = this.k  // exp 的位数
        let n = this.n  // frac 的位数
        let exp = this.exp
        if (exp.reduce((a, b) => a & b) == 1) {
            console.log('exp 全为 1，值为 +/-Infinity 或者 NaN')
            // exp 全为 1，值为 +/-Infinity 或者 NaN
            if (this.frac.reduce((a, b) => a | b) == 0) {
                console.log('frac 全为 0')
                // frac 全为 0
                if (sign == 1) {
                    return '-Infinity'
                } else {
                    return '+Infinity'
                }
            } else {
                console.log('frac 不全为 0')
                // frac 不全为 0
                return 'NaN'
            }
        } else if (exp.reduce((a, b) => a | b) == 0) {
            console.log('exp 全为 0，非规格化')
            // exp 全为 0，非规格化
            // 计算阶码
            let bias = Math.pow(2, k - 1) - 1
            let E = 1 - bias
            console.log(`阶码：${E}`)

            // 计算尾数
            let M = 0
            for (let i = -1; i >= -n; i--) {
                M += Math.pow(2, i) * this.frac[-1 - i]
            }
            console.log(`尾数：${M}`)

            return sign * M * Math.pow(2, E)
        } else {
            console.log('exp 规格化(!=0 && != 255)')
            // exp 规格化(!=0 && != 255)
            // 计算阶码
            let bias = Math.pow(2, k - 1) - 1
            let e = 0
            for (let i = k - 1; i >= 0; i--) {
                e += Math.pow(2, i) * exp[k - 1 - i]
            }
            let E = e - bias
            console.log(`阶码：${E}`)

            // 计算尾数
            let M = 1
            for (let i = -1; i >= -n; i--) {
                M += Math.pow(2, i) * this.frac[-1 - i]
            }
            console.log(`尾数：${M}`)

            return sign * M * Math.pow(2, E)
        }
    }
}

export default Float
