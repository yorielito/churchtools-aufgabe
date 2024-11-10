<script>
import UpdatePersonModal from "../components/UpdatePersonModal.vue";
import { useRoute } from "vue-router";
import { getPersonById, putPerson } from "../api/persons";

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
   async getPersonDetails() {
      const route = useRoute();
      try {
        this.person = await getPersonById(route.params.id);
      } catch (error) {
        console.error(error);
      }
    },

    async updatePerson(person) {
      try {
        await putPerson(person);
      } catch (error) {
        console.error(error);
      }

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
          :src="person?.imageUrl"
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
