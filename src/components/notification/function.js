import Vue from 'vue'
import Component from './func-notification'

// 创建一个组件
const NotificationConstructor = Vue.extend(Component)
// init
const instances = []
const seed = 1

// notify
const notify = (options) => {

    if (Vue.prototype.$isServer) return // 如果是服务端 直接返回

    const {
        autoClose,
        ...rest
    } = options

    const instance = new NotificationConstructor({
        propsData: {
            ...rest
        },
        data: {
            autoClose: autoClose ? undefined : 3000
        }
    })

    const removeInstance = (instance) => {
        if (!instance) return
        const len = instances.length
        const index = instances.findIndex(inst => instance.id === inst.id)

        instance.splice(index, 1)

        if (len <= 1) return
        const removeHeight = instance.vm.height

        for (let i = index; i < len -1; i ++) {
            instances[i].verticalOffset =
                parseInt(instances[i].verticalOffset) - removeHeight -16
        }
    }

    const id  = `notification_${seed++}`
    instance.id = id
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    instance.vm.visible = true

    let verticalOffset = 0
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16
    })
    verticalOffset += 16
    instance.verticalOffset = verticalOffset
    instances.push(instance)
    // 关闭
    instance.vm.$on('closed', () => {
        removeInstance(instance)
        document.body.removeChild(instance.vm.$el)
        instance.vm.$destory()
    })
    // 关闭
    instance.vm.$on('close', () => {
        instance.vm.visible = false
    })
    return instance.vm
}

export default notify
