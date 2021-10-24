<template>
  <v-hover>
    <v-card class="p-5 m-1">
      <div class="row">
        <div class="w-full col-sm-1">
          <img class="object-cover h-full rounded" :src="investment.project.photoUrl" style="width: 100px; height: 100px">
        </div>
        <div class="col">
          <v-card-title> {{ investment.project.name }}</v-card-title>
          <v-card-subtitle>
            {{ investment.project.description }}
          </v-card-subtitle>
        </div>
        <div class="col flex items-center">
          S/. {{investment.amount}}
        </div>
        <div class="col-2 container" style="margin: auto">
          <p class="text-sm">{{investment.sentAt.substring(0,8)}}</p>
          <p class="text-sm">Time: {{investment.sentAt.substring(8)}}</p>
        </div>
        <div class="col flex items-center">
          <p>State: Active</p>
        </div>
        <div class="col flex items-center">
        <v-card-actions>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="error" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-delete</v-icon>Delete
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Eliminar inversión
              </v-card-title>

              <v-card-text class="mt-5">
                Si desea eliminar la inversión a este proyecto debe envíar una solicitud. ¿Estás seguro que quiere enviarla?
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  Enviar solicitud
                </v-btn>
                <v-btn color="primary" depressed @click="dialog = false">
                  Cancelar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Investment",
  props: {
    investment: {
      id: Number,
      userId: Number,
      projectId: Number,
      sentAt: String,
      amount: Number,
      project: {
        id: Number,
        name: String,
        description: String,
        photoUrl: String,
        developerId: Number,
        districtId: Number
      }
    },
  },
  data(){
    return{
      dialog: false
    }
  }
}
</script>

<style scoped>

</style>