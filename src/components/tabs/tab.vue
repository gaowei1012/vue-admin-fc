<script>
export default {
    name: 'Tba',
    props: {
        index: {
            type: [String, Number],
            requried: true
        },
        label: {
            type: String,
            default: 'tab'
        }
    },
    methods: {
        handleClick () {
            this.$parent.onChange(this.index)
        }
    },
    mounted() {
        this.$parent.panes.push(this)
    },
    computed: {
        active () {
            return this.$parent.value === this.index // tab选中active
        }
    },
    render () {
        const tab = this.$slots.label || <span>{this.label}</span>
        const className = {
            tab: true,
            active: this.state.active
        }
        return (
            <li class={className}
                on-click={this.handleClick}
            >
                {tab}
            </li>
        )
    }
}
</script>

<style lang="styles" scoped>
    .tab {
        list-style: none;
        line-height: 40px;
        margin-left: 30px;
        position: relative;
        bottom: -2px;
        cursor: pointer;
    }
    .active {
        border-bottom: 2px solid blue;
    }
    .last-child {
        margin-right: 0
    }
</style>
