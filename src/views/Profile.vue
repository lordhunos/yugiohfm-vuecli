<template>
    <b-container fluid>
        <b-row>
            <ProfileCard></ProfileCard>
        </b-row>
    </b-container>
    
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'

export default {
    name: 'Profile',
    components: {
        ProfileCard
    }
}
</script>