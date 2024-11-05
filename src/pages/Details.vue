<script>
import UpdatePersonModal from "../components/UpdatePersonModal.vue";
import persons from "../data.json";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      person: null,
    };
  },

  components: {
    UpdatePersonModal,
  },

  beforeMount() {
    this.getPersonDetails();
  },

  methods: {
    getPersonDetails() {
      const route = useRoute();
      this.person = persons.data.find(
        (person) => person.id == parseInt(route.params.id)
      );
    },

    updatePerson(person) {
      // Update the person in the database and redirect to the details page
      const index = persons.data.findIndex((p) => p.id === person.id);
      persons.data[index] = person;

      this.$router.push({ name: "/details/", params: { id: person.id } });
    },
  },
};
</script>

<template>
  <section class="flex flex-col items-center justify-center">
    <div class="w-4/5 bg-white max-w-96">
      <h1 class="font-bold text-center text-2xl m-4">Person Details</h1>
      <div class="border">
        <img
          class="w-full h-64"
          width="100"
          height="100"
          :src="person.imageUrl || ''"
          alt="User Bild"
        />
      </div>
      <section class="border p-4 flex flex-col gap-2">
        <p>Name: {{ person.firstName }} {{ person.lastName }}</p>
        <p>Email: {{ person.email }}</p>
        <p>Telefon: {{ person.mobile }}</p>
        <p>
          Adresse: {{ person.country }} {{ person.city }} {{ person.zip }}
          {{ person.street }}
        </p>
        <p>Geschlecht: {{ person.sexId }}</p>
        <p>Status: {{ person.statusId }}</p>
        <p>Station: {{ person.secLevel }}</p>

        <UpdatePersonModal
          :person="person"
          :key="person.id"
          :updatePerson="updatePerson"
        />
      </section>
    </div>
  </section>
</template>
