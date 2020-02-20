<template>
    <b-col cols="6">
        <b-button 
            id="toggleModal" 
            block 
            class="mr-1" 
            type="button" 
            variant="danger"
            @click="toggleModal()"
        >
        Delete
        </b-button>
        <b-modal 
            ref="modalWindow" 
            centered 
            size="sm" 
            footer-bg-variant="secondary"
            title="Delete your profile?"
            header-bg-variant="warning"
        >
            <b-container fluid>
                <b-row align-h="center">
                    <b-col cols="9" class="py-2">
                        <b-img :src="getImgSrc" thumbnail center fluid rounded="circle"></b-img>
                    </b-col>
                </b-row>
            </b-container>
            
            <template v-slot:modal-footer>
                
                <b-button 
                    type="button" 
                    variant="danger" 
                    class="mr-1 float-right" 
                    @click="deleteUser(user._id)"
                >Delete
                </b-button>

                <b-button 
                    type="button" 
                    variant="success" 
                    class="ml-1 float-right" 
                    @click="toggleModal()"
                >
                Cancel
                </b-button>

            </template>

        </b-modal>
    </b-col>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import toggleModal from '@/mixins/ToggleModal.vue'
import getAuthHeader from '@/mixins/GetAuthHeader.vue'

export default {
    methods: {
        ...mapActions(['logout']),

        deleteUser: async function(){
            try{
                await this.axios.delete('/user/delete', this.getAuthHeader())
                this.toggleModal()
                this.logout()
            } catch(e) {
                
            }
        }
    },
    computed: {
        ...mapState(['user']),
        ...mapGetters(['getImgSrc'])
    },

    mixins: [toggleModal, getAuthHeader]
}
</script>