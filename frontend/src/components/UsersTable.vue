<template>
  <table>
    <thead>
      <th>Email</th>
      <th>First name</th>
      <th>Last name</th>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.email">
        <td>{{ user.email }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>
          <button class="delete-button" @click="deleteUser(user._id)">
            Delete
          </button>
        </td>
        <td>
          <router-link
            v-if="user._id != userId"
            class="connect-button"
            :to="'/users/' + user.id"
          >
            <button>Connect</button>
          </router-link>
          <router-link v-else class="disconnect-button" to="/users">
            <button>Disconnect</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersTable",
  props: {
    users: Array,
    userId: String,
  },
  emits: ["userDeleted"],
  methods: {
    deleteUser: function (userId) {
      axios
        .delete(`${process.env.VUE_APP_BACKEND_BASE_URL}/users/${userId}`)
        .then(() => {
          this.$emit("userDeleted");
        })
        .catch((error) => {
          alert("An error occured while deleting the user.");
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #000000;
  padding: 10px;
  text-align: center;
}
.connect-button {
  cursor: pointer;
}
.delete-button {
  cursor: pointer;
}
</style>
