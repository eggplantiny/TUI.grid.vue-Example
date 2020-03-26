<template>
    <grid
        ref="grid"
        :data="gridProps.data"
        :columns="gridProps.columns"
        :theme="gridProps.myTheme"
        :options="gridProps.options"
        :pageOptions="gridProps.pageOptions"
        @check="onCheck"
        @uncheck="onUncheck"
        @checkAll="onCheckAll"
        @uncheckAll="onUncheckAll"
    />
</template>

<script>
    import { Grid } from '@toast-ui/vue-grid'

    import gridBtn from './javascript/gridBtn'
    import gridCheckbox from './javascript/gridCheckbox'
    import VBtn from 'vuetify/lib/components/VBtn/VBtn'

    export default {
        name: 'MyGrid',
        components: {
            Grid
        },
        props: {
            originalData: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                loading: false,
                data: []
            }
        },
        methods: {
            makeGridBtn () {
                const pubBtn = new VBtn({
                    propsData: {
                        color: 'blue lighten-1',
                        dark: true,
                        small: true,
                        elevation: 0
                    }
                })
                const viewBtn = new VBtn({
                    propsData: {
                        color: 'gray lighten-1',
                        dark: true,
                        small: true,
                        elevation: 0
                    }
                })
                pubBtn.$slots.default = ['발행']
                viewBtn.$slots.default = ['보기']

                pubBtn.$mount()
                viewBtn.$mount()

                const pubBtnEl = pubBtn.$el
                const viewBtnEl = viewBtn.$el

                pubBtnEl.classList.add('btn-small-padding')
                viewBtnEl.classList.add('btn-small-padding')

                return { pubBtnEl, viewBtnEl }
            },
            onCheck ({ rowKey, instance }) {
                instance.addRowClassName(rowKey, 'row-checked')
            },
            onUncheck ({ rowKey, instance }) {
                instance.removeRowClassName(rowKey, 'row-checked')
            },
            onCheckAll ({ instance }) {
                instance.store.data.viewData.forEach(({ rowKey }) => {
                    instance.addRowClassName(rowKey, 'row-checked')
                })
            },
            onUncheckAll ({ instance }) {
                instance.store.data.viewData.forEach(({ rowKey }) => {
                    instance.removeRowClassName(rowKey, 'row-checked')
                })
            }
        },
        created () {
            console.log('created')
            const { pubBtnEl, viewBtnEl } = this.makeGridBtn()
            this.gridProps = {
                data: this.originalData,
                columns: [
                    {header: 'ID', name: 'id'},
                    {header: '이름', name: 'name'},
                    {header: '성별', name: 'gender'},
                    {header: '나이', name: 'age'},
                    {header: '나이', name: 'age'},
                    {header: '나이', name: 'age'},
                    {header: '나이', name: 'age'},
                    {header: '나이', name: 'age'},
                    {header: '날짜', name: 'date'},
                    {header: 'test', name: 'test', renderer: { type: gridBtn, options: { pubBtnEl, viewBtnEl } } }
                ],
                myTheme: {
                    name: 'myTheme',
                    value: {
                        outline: {
                            showVerticalBorder: false,
                            border: '#fff'
                        },
                        header: {
                            background: '#ffffff',
                            border: '#e5e5e5',
                            showVerticalBorder: false,
                            showHorizontalBorder: false
                        },
                        row: {
                            hover: {
                                background: '#e8e8e8'
                            },
                            even: {}
                        },
                        cell: {
                            normal: {
                                background: '#fff',
                                showVerticalBorder: false,
                                showHorizontalBorder: false
                            },
                            focused: {
                                border: '#afaeff',
                                background: '#afaeff'
                            },
                            focusedInactive: {
                                border: '#afaeff'
                            }
                        }
                    }
                },
                options: {
                    // selectionUnit: 'row',
                    rowHeaders: [{
                        type: 'checkbox',
                        header: `
                            <label for="all-checkbox" class="grid-checkbox">
                                <input type="checkbox" id="all-checkbox" class="hidden-input" name="_checked" />
                                <span class="custom-input"></span>
                            </label>
                        `,
                        renderer: {
                            type: gridCheckbox
                        }
                    }],
                    scrollX: false,
                    scrollY: false,
                }
            }
        }
    }
</script>

<style scoped>

</style>
