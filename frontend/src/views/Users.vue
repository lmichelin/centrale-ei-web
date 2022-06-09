<template>
  <Navbar :userId="userId"></Navbar>
  <h1>Users</h1>
  <AddUser @userAdded="fetchUsers()" />
  <UsersTable v-if="users.length" :users="users" @userDeleted="fetchUsers()" />
  <div v-if="usersLoadingError">{{ usersLoadingError }}</div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import UsersTable from "@/components/UsersTable.vue";
import AddUser from "@/components/AddUser.vue";
import axios from "axios";

export default {
  name: "Users",
  components: {
    AddUser,
    UsersTable,
    Navbar,
  },
  data: function () {
    return {
      users: [],
      usersLoadingError: "",
      userId: "",
    };
  },
  methods: {
    fetchUsers: function () {
      axios
        .get(`${process.env.VUE_APP_BACKEND_BASE_URL}/users`)
        .then((response) => {
          this.users = response.data.users;
        })
        .catch((error) => {
          this.usersLoadingError = "An error occured while fetching users.";
          console.error(error);
        });
    },
  },
  created: function () {
    try {
      this.userId = this.$route.params.userId;
    } catch {
      this.userId = "";
    }
  },
  mounted: function () {
    this.fetchUsers();
  },
};
</script>
