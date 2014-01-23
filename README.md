# chinese-lunar

农历与公历相互转换的模块，支持农历之间的加减运算，并提供生肖、干支等，支持1900-2100年。

## Install

1. 在node.js中用npm安装 `npm install chinese-lunar`
2. 在浏览器中加载方式，`<script src="../lib/chinese-lunar.js></script>`
3. chinese-lunar支持`require`

## Usage

### Node.js

    var chineseLunar = require("chinese-lunar");

### 浏览器

`window.chineseLunar`是一个全局函数，直接调用就可以，例如`chineseLunar.solarToLunar(new Date());`

对于`require`，可以用如下方式使用：
```js
    require(["chinese-lunar"], function(chineseLunar){
      console.log(chineseLunar.solarToLunar(new Date());
      //more...
    });
```

## Methods

### solarToLunar

`solarToLunar(solar[,format]); //=> lunar or string`
将公历转换为农历，如果设置了format，则返回字符形式，反之返回农历对象。
示例代码如下：

    var lunar = chineseLunar.solarToLunar(new Date(1982, 0, 29));
    console.log(lunar.format('YMD'));     //一九八二年腊月十六

### lunarToSolar

`lunarToSolar(lunar); // => solar`
`lunarToSolar(year, month, day[,leap]); //=> solar`

将农历转换为公历，leap为可选参数

### format
`chineseLunar.format(lunar, format);  //=> 一九八二年腊月十六`
可以通过返回格式化字符，`format`表示如下：

* `T`返回传统的天干地支年份
* `A`返回生肖属相
* `Y`返回中文的年，如二〇一二
* `y`返回英文数字的年，如2012
* `m`返回中文的月份，如五
* `M`返回传统的月份，如腊月和正月
* `d`返回传统的天名称，如初四、十八、卅
* `D`返回传统的天名称，但是如果是初一的话，会返回这个月的月份名称，例如四月初一返回的是四月而非初一

### monthDiff
`monthDiff(lunar1, lunar2);`
返回两个农历日期之间相差多少个月

### monthAdd
`monthAdd(lunar, inc);`
返回农历相加N个月后的新日期，与公历不同，农历可能会存在闰月的情况

### dateDiff
`monthDiff(lunar1, lunar2, expr);`
返回两个农历日期的差值，expr可以为`yMdhms`任意中的一个

### dateAdd
`dateAdd(lunar, expr);`

根据`expr`对`lunar`进行相加，`expr`是一个表达式，格式如：`/[+-]?\d+((ms)|[yMdhmsw])/`，可以多个表达式叠加，其中符号+可以省略。
示例：

* `1M-5d`表示增加1个月然后再减5天
* `+5d6M-4h`表示增加5天，再增加6个月，然后减去4小时

### leapMonthOfYear
`leapMonthOfYear(year);`
判断指定年`year`的闰月是几月，返回0表示这一年没有闰月

### monthsOfYear
`monthsOfYear(year);`
返回指定年的闰月是几月。

### daysOfMonth
`daysOfMonth(year, month, leap);`
返回某年某月共有多少天，农历中每个月有多少天是不固定的。

### dayName
`dayName(lunar);`
返回农历天的名称，例如初一。

### monthName
`monthName(month, traditional, leap);`
返回农历月份的名称，参数`traditional`表示是否返回传统的月份名称，如正月和腊月。

### animalName
`animalName(year);`
返回某年的生肖属相

### yearName
`yearName(year);`
返回年的中文名称。

### traditionalYearName
`traditionalYearName(year);`
返回传统天干地支名称。

## Test

  make test

## Credits

  - [Conis Yi](http://github.com/conis)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Conis Yi <[http://iove.net/](http://iove.net/)>
