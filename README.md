## IEEE 浮点表示

![float example](/images/Float_example.svg)

```
V = (-1)^s x M x 2^E
```

* 符号(sign): `s` 决定这数是负数(`s=1`)还是正数(`s=0`)，而对于数值 `0` 的符号位解释作为特殊情况处理
* 阶码(exponent): `E` 的作用是对浮点数加权，这个权重是 `2` 的 `E` 次幂（可能是负数）
* 尾数(fraction): `M` 是一个二进制小数，它的范围是 `1 ~ 2-ε`，或者是 `0 ~ 1-ε`
