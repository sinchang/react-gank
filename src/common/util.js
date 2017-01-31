const util = {
    /**
     * 检验字符串是否是网址
     * @param url
     */
    checkUrl: function (url) {
        var regexp = new RegExp("(http[s]{0,1}|ftp)://[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "gi");
        return regexp.test(url);
    },
    /**
     * 判断是否是日期格式
     * @param date
     * @returns {boolean}
     */
    isDate: function (date) {
        date = new Date(date);
        return date instanceof Date && !isNaN(date.valueOf());
    },
    /**
     * 日期返回年月日
     * @param date
     * @returns {string}
     */
    formatDate: function (date) {
        date = new Date(date);
        if (util.isDate(date)) {
            return date.getFullYear() + '/' + (parseInt(date.getMonth()) + 1) + '/' + date.getDate();
        } else {
            console.log('传入的日期不正确！');
        }
    },
    /**
     * 增加或者减少日期根据天数
     * @param date
     * @param type
     * @param days
     * @returns {*|string}
     */
    changeDate: function (date, type, days) {
        date = new Date(date);
        if (!util.isDate(date)) {
            console.log('传入的日期不正确！');
            return false;
        }
        if (type === 'add') {
            date = date.setDate(date.getDate() + days);
        } else if (type === 'subtract') {
            date = date.setDate(date.getDate() - days);
        }
        return util.formatDate(date);
    },
}

export default util
