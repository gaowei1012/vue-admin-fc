import Notification from './notification.vue'
import notify from './function'

/**
 *  component default Vue
 */
export default (Vue) => {
    Vue.component(Notification.name, Notification)
    Vue.prototype.$notify = notify
}
