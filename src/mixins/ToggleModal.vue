<script>
export default {
    methods: {
        toggleModal: function(modal_ref='modalWindow', button_id='#toggleModal') {
            this.$refs[modal_ref].toggle(button_id)
        }
    }
}
</script>