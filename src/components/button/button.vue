<template>
    <a
        v-if="to"
        :class="classes"
        :disabled="disabled"
        :href="linkUrl"
        :target="target"
        @click.exact="handleClickLink($event, false)"
        @click.ctrl="handleClickLink($event, true)"
        @click.meta="handleClickLink($event, true)">
        <Icon class="ivu-load-loop" type="ios-loading" v-if="selfLoading"></Icon>
        <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !selfLoading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </a>
    <button
        v-else
        :type="htmlType"
        :class="classes"
        :disabled="disabled"
        @click="handleClickLink">
        <Icon class="ivu-load-loop" type="ios-loading" v-if="selfLoading"></Icon>
        <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !selfLoading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';
    import mixinsLink from '../../mixins/link';

    const prefixCls = 'ivu-btn';

    export default {
        name: 'Button',
        mixins: [ mixinsLink ],
        components: { Icon },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'link', 'info', 'success', 'warning', 'error', 'default']);
                },
                default: 'default',
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['xsmall', 'small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            loading: Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            icon: {
                type: String,
                default: ''
            },
            customIcon: {
                type: String,
                default: ''
            },
            long: {
                type: Boolean,
                default: false
            },
            ghost: {
                type: Boolean,
                default: false
            },
            func: {
                type: Function
            },
            info: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data () {
            return {
                showSlot: true,
                selfLoading: false,
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: this.size !== 'default',
                        [`${prefixCls}-loading`]: this.selfLoading != null && this.selfLoading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.selfLoading),
                        [`${prefixCls}-ghost`]: this.ghost
                    }
                ];
            }
        },
        methods: {
            // Ctrl or CMD and click, open in new window when use `to`
            handleClickLink (event, new_window = false) {
                // func 为父级下发的一个 Promise 函数，执行之后会把 Promise 返回值发送给父级
                if (typeof this.func !== 'function') {
                    this.$emit('click', event);
                    this.handleCheckClick(event, new_window);
                } else {
                    this.selfLoading = true;
                    this.func().then((res) => {
                        this.selfLoading = false;
                        this.$emit('on-done', res, this.info);
                    });
                }
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        },
        watch: {
            loading(val) {
                this.selfLoading = val;
            }
        }
    };
</script>
