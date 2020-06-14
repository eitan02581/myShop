import Vue from 'vue'
import moment from 'moment'

Vue.filter('time', (timestamp) => {
    return moment(timestamp).format("DD/MM/YYYY");
})

Vue.filter('fullTime', timestamp => {
    return moment(timestamp).format('LLL');
})

Vue.filter('commingUp', timestamp => {
    let nowDate = new Date().getTime()
    console.log(timestamp - nowDate)
    return moment(timestamp - nowDate).endOf('day').fromNow();
})