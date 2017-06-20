var expect = require('expect.js'),
	chineseLunar = require('../lib/chinese-lunar');

describe('chinese-lunar', function(){
	var SOLAR_DATE = new Date(1983, 0, 29);		//农历1982年十二月十六
	var LUNAR_DATA = {
		leap: false,
		year: 1982,
		month: 12,
		day: 16,
		leapMonth: 4
	};

	it('.dateDiff(lunar1, lunar2, expr)', function(){
        var lunar1 = chineseLunar.solarToLunar(SOLAR_DATE);
        var lunar2 = chineseLunar.solarToLunar(new Date(1983, 3, 1));
		var duration = chineseLunar.dateDiff(lunar1, lunar2, 'd');
        expect(duration).to.eql(62);
	});

	it('.solarToLunar(Date)，公历转农历', function(){
		var lunar = chineseLunar.solarToLunar(SOLAR_DATE);
		expect(lunar).to.eql(LUNAR_DATA);
	});

	it('.solarToLunar(Date)，公历转农历并格式化', function(){
		var str = chineseLunar.solarToLunar(SOLAR_DATE, 'YmD属A');
		expect(str).to.eql('一九八二年十二月十六属狗');
	});

	it('.lunarToSolar(object)，农历转公历', function(){
		var solar = chineseLunar.lunarToSolar(LUNAR_DATA);
		expect(solar).to.eql(SOLAR_DATE);
	});

	it('.lunarToSolar(year, month, day[,leap])，农历转公历', function(){
		var solar = chineseLunar.lunarToSolar(1982, 12, 16);
		console.log(solar);
		expect(solar).to.eql(SOLAR_DATE);
	});

	it('格式化YMD', function(){
		expect(chineseLunar.format(LUNAR_DATA, 'YMD')).to.equal('一九八二年腊月十六');
	});


	it('格式化TAd', function(){
		expect(chineseLunar.format(LUNAR_DATA, 'T属A')).to.equal('壬戌年属狗');
	});
});