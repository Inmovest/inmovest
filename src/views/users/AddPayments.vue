<template>
  <v-card>
    <v-card-title class="headline info">
      Add a new card
    </v-card-title>
    <v-card-text>
      <form>
        <v-text-field v-model="CardNumber" label="Card Number"></v-text-field>
        <v-text-field v-model="FullName" label="Full Name"></v-text-field>
        <v-text-field v-model="DueDate" label="MM/AA"></v-text-field>
        <v-text-field v-model="SecurityCode" label="CVV"></v-text-field>
        <v-text-field v-model="PostalCode" label="Postal Code"></v-text-field>
        <v-checkbox v-model="CheckBox">Remember this card</v-checkbox>
        <v-btn large>
          <v-icon>done</v-icon>
          Save and Confirm
        </v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
name: "AddPayments"
}
</script>

<style scoped>

</style>