<template>
  <v-card class="note" max-width="auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="mb-4 text-h6">{{ note.titulo }}</div>
        <v-list-item-subtitle
          ><span class="note-body">{{ note.nota }}</span></v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn color="#E8D276" rounded> Editar </v-btn>
      <v-btn color="red" outlined rounded> Eliminar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "NotaComponent",
  props: ["note"],
};
</script>

<style scoped>
.note {
  box-shadow: 10px 10px 5px 0px rgba(226, 224, 185, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(226, 224, 185, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(226, 224, 185, 0.75);
}

.note-body {
  font-size: 1.2em;
  font-weight: 600;
}
</style>
