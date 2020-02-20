<script>
export default {
    methods: {
        getAuthHeader: function(){
            return {
                headers: {                    
                    'Authorization': 'Bearer ' + localStorage.getItem('Token')
                }
            }
        }
    }
}
</script>