<template>
    <v-container>
        <my-grid :original-data="data"/>
    </v-container>
</template>

<script>
    import MyGrid from '../components/MyGrid';
    export default {
        name: 'Playground',
        components: {MyGrid},
        data () {
            return {
                data: []
            }
        },
        beforeMount () {
            this.data.splice(0, this.data.length)
            const user = [
                { name: '정성우', id: 'sigran0', sex: '남자' },
                { name: '이승윤', id: 'lsy1295', sex: '남자' },
                { name: '박다연', id: 'pdy4953', sex: '여자' },
                { name: '김지은', id: 'kjy4885', sex: '여자' },
                { name: '김민지', id: 'kmj2234', sex: '여자' },
                { name: '박다함', id: 'pdh9021', sex: '남자' },
                { name: '정지인', id: 'jji7774', sex: '여자' },
                { name: '김병수', id: 'kbs1993', sex: '남자' },
                { name: '이민준', id: 'lmj9941', sex: '남자' },
                { name: '민경훈', id: 'mkh1232', sex: '남자' }
            ]

            Array.range(0, 20).forEach(item => {
                const type =  Math.floor(Math.random() * 2)
                const userIndex = Math.floor(Math.random() * 10)
                const age = Math.floor(Math.random() * 11) + 20
                this.data.push({ id: user[userIndex].id, name: user[userIndex].name, gender: user[userIndex].sex, age, date: '2020.03.24', good: 'good', hello: 'hello', world: 'world', test: { type, checkupNo: item } })
            })
        }
    }
</script>

<style scoped>

</style>
