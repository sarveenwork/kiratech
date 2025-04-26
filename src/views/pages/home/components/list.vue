<template>
  <container>
    <div class="mb-3">
      <b-input
        v-model="searchQuery"
        placeholder="Search by First Name or Last Name"
        class="w-100"
        :disabled="isLoading"
      />
    </div>
    <b-table-simple borderless hover>
      <b-thead>
        <b-tr>
          <b-td class="text-secondary">Date</b-td>
          <b-td class="text-secondary">Name</b-td>
          <b-td class="text-secondary">Gender</b-td>
          <b-td class="text-secondary">Country</b-td>
          <b-td class="text-end text-secondary">Email</b-td>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr
          v-for="(user, i) in filteredUsers"
          :key="i"
          @click="showDetails(user)"
          class="py-4"
        >
          <b-td class="text-secondary">{{
            _dateFormat(user.registered.date)
          }}</b-td>
          <b-td>{{ user.name.first }} {{ user.name.last }}</b-td>
          <b-td class="text-secondary">{{
            user.gender.charAt(0).toUpperCase() + user.gender.slice(1)
          }}</b-td>
          <b-td>{{ user.location.country }}</b-td>
          <b-td class="text-end text-secondary">{{ user.email }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="pt-3 text-center">
      <b-button
        @click="getAllUsers"
        variant="primary"
        class="text-white"
        :disabled="isLoading"
      >
        <b-spinner v-if="isLoading" small />
        <i v-else class="fa fa-refresh"></i>
        {{ isLoading ? "Loading" : "Refresh" }}</b-button
      >
    </div>
    <view-details ref="viewDetails" />
  </container>
</template>

<script>
import Container from "@/views/layouts/container";
import ViewDetails from "@/views/pages/home/dialog/view-details.vue";
import { getUser } from "@/api/user";
import { debounce } from "lodash"; // Import lodash
import Swal from "sweetalert2";

export default {
  name: "UserList",
  components: {
    Container,
    ViewDetails,
  },
  data() {
    return {
      isLoading: false,
      users: [],
      searchQuery: "",
    };
  },
  created() {
    this.getAllUsers();
  },
  computed: {
    filteredUsers() {
      const query = this.searchQuery.toLowerCase();
      return this.users.filter(
        (user) =>
          user.name.first.toLowerCase().includes(query) ||
          user.name.last.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    search: debounce(function () {
      this.filteredUsers;
    }, 300),
    async getAllUsers() {
      this.isLoading = true;
      this.users = [];
      this.searchQuery = "";
      try {
        const res = await getUser();
        if (res.status == 200) {
          this.users = res.data.results;
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.error("Error fetching users:", error);
      }
      this.isLoading = false;
    },
  },
};
</script>
