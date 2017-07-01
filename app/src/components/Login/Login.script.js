export default {
    name: 'Login',

    methods: {
        startMonitoring() {

        },

        catchSubmit() {
            this.$router.push({
                name: 'listen',
                params: {
                    room: 'default'
                }
            })
        }
    }
}