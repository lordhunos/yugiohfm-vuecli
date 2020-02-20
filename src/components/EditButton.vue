<template>
    <b-col cols="6">
        <b-button 
            id="toggleModal" 
            block 
            class="ml-1" 
            type="button" 
            variant="primary"
            @click="toggleModal()"
        >
        Edit
        </b-button>
        <b-modal 
            ref="modalWindow" 
            centered 
            size="xl" 
            footer-bg-variant="secondary"
            title="Edit your profile"
            header-bg-variant="warning"
        >
            <b-container fluid>
                <b-row align-v="center">
                    <b-col cols="6" class="py-2">
                        <b-img 
                            :src="newProfilePicUrl" 
                            thumbnail 
                            center 
                            fluid 
                            rounded="circle"
                            @click="$refs.realInputFile.click()"
                        ></b-img>
                        <input 
                            type="file" 
                            ref="realInputFile" 
                            name="newFile"
                            v-show="false"
                            @change="newProfilePreview"
                        >
                    </b-col>
                    <b-col cols="6">
                        <label for="input-none">Username</label>
                        <b-form-input 
                            v-model="update.newUsername" 
                            type="text" 
                            id="username" 
                            :state="usernameState" 
                            placeholder="Username"
                            class="mb-1"
                        ></b-form-input>

                        <label for="input-none">Email</label>
                        <b-form-input 
                            v-model="update.newEmail" 
                            type="email" 
                            id="email" 
                            :state="emailState" 
                            placeholder="Email"
                            class="mb-1"
                        ></b-form-input>
                    </b-col>
                </b-row>

            </b-container>
            
            <template v-slot:modal-footer>
                
                <b-button 
                    type="button" 
                    variant="success" 
                    class="mr-1 float-right" 
                    @click="editUser(user._id)"
                >Save
                </b-button>

                <b-button 
                    type="button" 
                    variant="danger" 
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
import { mapState, mapGetters } from 'vuex'
import toggleModal from '@/mixins/ToggleModal.vue'
import getAuthHeader from '@/mixins/GetAuthHeader.vue'

export default {
    data(){
        return {
            update: {
                newProfilePic: null,
                newUsername: null,
                newEmail: null
            },
            newProfilePicUrl: null,
        }
    },

    methods: {
        editUser: function(_id){

        },
        newProfilePreview(e) {
            const file = e.target.files[0];
            this.newProfilePicUrl = URL.createObjectURL(file)
            this.update.newProfilePic = file
        }
    },
    computed: {
        ...mapState(['user']),
        ...mapGetters(['getImgSrc']),

        usernameState(){
            if(this.update.newUsername){
                console.log(this.update.newUsername.length)
                return this.update.newUsername.length > 0 ? true : false
            }
            return null
        },
        emailState(){
            if(this.update.newEmail){
                return this.update.newEmail.length > 0 ? true : false
            }
            return null
        }
    },

    created() {
        this.newProfilePicUrl = this.user.profilePic
        
        this.update.newUsername = this.user.username
        this.update.newEmail = this.user.email
        this.update.profilePic = this.user.profilePic
        console.log('Todas las veces que paso por aqui te saludo')
    },

    mixins: [toggleModal, getAuthHeader]
}
</script>