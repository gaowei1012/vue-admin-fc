<template>
    <transition name="fade" 
        @after-leave="afterLeave"
        @after-enter="afterEnter"
    >
        <div 
            class="notification"
            :style="style"
            @mouseenter="clearTimer"
            @mouseleave="createTimer"
        >
            <span class="content">{{content}}</span>
            <a class="btn" @click="handleClose">{{btn}}</a>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Notification',
    props: {
        content: {
            type: String,
            required: true
        },
        btn: {
            type: String,
            default: '关闭'
        }
    },
    methods: {
        handleClose (e) {
            e.preventDefault()
            this.$emit('close')
        },
        afterLeave () {
            this.$emit('closed')
        },
        afterEnter () {},
        clearTimer () {},
        createTimer () {}
    },
   computed: {
       style () {
           return {}
       }
   }
}
</script>

<style lang='styles' scoped>
    /* 动画 start */ 
    .fade-enter-active, .fade-leave-active {
        transform: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    /* 动画 end */
    .notification {
        display: flex;
        background: #30303030;
        color: rgba(255, 255, 255, 1);
        align-items: center;
        padding: 280px;
        position: fixed;
        min-width: 280px;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.2);
        flex-wrap: wrap;
        transform: all 0.3s;
    }
    .notification .content {
        padding: 0;
    }
    .notification .btn {
       color: #ff4081;
       padding-left: 24px;
       margin-left: auto;
       cursor: pointer; 
    }
</style>

