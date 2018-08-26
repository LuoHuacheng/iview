<template>
    <div>
        <i-switch v-model="m1" true-value="yes" false-value="no">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        <i-switch controllable :value="true" @on-change="swChange">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        <i-switch :loading="loading" :value="true" @on-change="swChange2">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        {{ m1 }}
        <div @click="m1 = 'no'">toggle</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: 'yes',
                loading: false,
            }
        },
        methods: {
            change (status) {
                console.log(status)
            },
            swChange(status) {
                console.log(status);
            },
            swChange2(status) {
                this.loading = true;
            },
        }
    }
</script>
