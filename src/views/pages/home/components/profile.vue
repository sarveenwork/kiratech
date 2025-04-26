<template>
  <div>
    <!-- Profile Header -->
    <div class="bg-primary text-white">
      <container class="push-down">
        <b-img
          :src="details.img"
          rounded
          alt="Profile Picture"
          width="200"
          height="200"
          class="me-3"
        ></b-img>
        <div>
          <h4 class="mb-0">{{ details.name }}</h4>
          <small>Last online: {{ details.lastOnline }}</small>
        </div>
        <div class="ms-4">
          <b-button variant="light" size="sm" class="me-2 p-3 text-primary">
            <i class="fas fa-paper-plane me-1"></i> Send Message
          </b-button>
          <b-button
            variant="outline-primary"
            size="sm"
            class="text-white border-white p-3"
          >
            <i class="fas fa-user-plus me-1"></i> Add Friend
          </b-button>
        </div>
      </container>
    </div>
  </div>
</template>

<script>
import Container from "@/views/layouts/profileContainer";
import avatar from "@/assets/Avatar.png";

export default {
  name: "ProfileHeader",
  components: {
    Container,
  },
  data() {
    return {
      details: {
        img: avatar,
        name: "Sarveen Rajendran",
        lastOnline: "2 hours ago",
      },
    };
  },
};
</script>

<style scoped>
.push-down {
  position: relative;
  top: 55px; /* Moves the element down by 50px */
  z-index: 10; /* Controls stacking order */
}
</style>
