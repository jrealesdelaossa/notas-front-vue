<template>
  <div class="pt-12 my-12">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item
                v-for="userChat in usersChats"
                :key="userChat._id"
                link
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ userChat.nombreUsuario }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item link color="grey lighten-4">
                <v-list-item-content>
                  <v-list-item-title> Refresh </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <!--  -->
            <ChatComponent />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ChatComponent from "@/components/ChatComponent.vue";
import axios from "axios";
export default {
  name: "ChatView",
  components: {
    ChatComponent,
  },

  data() {
    return {
      usersChats: [],
    };
  },

  methods: {
    async getAllUser() {
      await axios
        .get("http://localhost:3000/usuario/buscar")
        .then((response) => {
          if (response.status === 200) {
            return response.data.filter(
              (user) => user._id !== this.$store.getters.getUserInfo._id
            );
          }
        })
        .then((users) => {
          this.usersChats = users;
        });
    },
  },

  async mounted() {
    await this.getAllUser();
  },
};
</script>
