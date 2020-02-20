<template>
    <b-col cols="12" sm="6" lg="3">
        <b-card v-if="user"
            :title="getTitle"
            :subTitle="getSubtitle"
            :img-src="getImgSrc"
            img-alt="Profile picture"
            img-top
            tag="article"
            class="my-3"
        >
            <b-card-text>
                <small>{{ user.provider }}</small>
            </b-card-text>
            <b-row no-gutters>
                <DeleteButton></DeleteButton>
                <EditButton></EditButton>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>
import DeleteButton from '@/components/DeleteButton.vue'
import EditButton from '@/components/EditButton.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    name: "ProfileCard",
    components: {
        DeleteButton,
        EditButton
    },
    computed: {
        ...mapState(['user']),
        ...mapGetters(['getTitle', 'getSubtitle', 'getImgSrc'])
    }
}
</script>

<style scoped>

</style>