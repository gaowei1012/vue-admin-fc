<script>
export default {
    name: 'Tabs',
    props: {
        value: {
            type: [String, Number],
            required: true
        }
    },
    data () {
        panes: []
    },
    render () {
        const contents = this.panes.map((pane) => pane.$slots.default)
        return (
            <div class="tabs">
                <ul class="tabs-header">
                    {this.$slots.default}
                </ul>
                <div class="tab-content">
                    {contents}
                </div>
            </div>
        )
    },
    methods: {
        onChange (index) {
            this.$emit('change', index) // 触发事件
        }
    }
}
</script>

<style lang='styles' scoped>
</style> 