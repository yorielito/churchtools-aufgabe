<script>
import persons from "../data.json";
import PersonCard from "../components/PersonCard.vue";
import NeuePersonModal from "../components/NeuePersonModal.vue";
import Pagination from "../components/Pagination.vue";

export default {
  components: {
    PersonCard,
    NeuePersonModal,
    Pagination
  },

  data() {
    return {
      persons: [],
      statusId: null,
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      zip: "",
      city: "",
      country: "",
      sexId: "",
      statusId: "",
      secLevel: "",
      id: "",
      isShowModal: false,
      currentPage: 1, 
    };
  },

  beforeMount() {
    this.getPersonsApi();
  },

  methods: {
    async getPersonsApi() {
      // const persons = await getPersons()
      // this.data = persons

      this.persons = persons.data;
    },

    async getPersonsByPageApi(pageNumber) {
      // const persons = await getPersonsByPage(pageNumber)
      // this.data = persons

      this.persons = persons.data;
    },

    filterPersonsStatus(num) {
      this.persons = persons.data.filter((person) => person.statusId === num);
    },

    addNewPerson() {
      this.persons.push({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        street: this.street,
        zip: this.zip,
        city: this.city,
        country: this.country,
        sexId: this.sexId,
        statusId: this.statusId,
        secLevel: this.secLevel,
        id: this.persons.length + 1,
      });
    },

    showModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<template>
  <section class="w-full flex flex-col items-center">
    <h1 class="font-bold text-2xl mb-4">Personen von ChurchTools</h1>
    <div class="w-full flex justify-center mb-4">
      <div class="w-4/5 grid grid-cols-grid-col gap-4">
        <NeuePersonModal
          :addNewPerson="addNewPerson"
          v-model:firstName="firstName"
          v-model:lastName="lastName"
          v-model:email="email"
          v-model:street="street"
          v-model:zip="zip"
          v-model:city="city"
          v-model:country="country"
          v-model:sexId="sexId"
          v-model:statusId="statusId"
          v-model:secLevel="secLevel"
        />
        <input
          type="number"
          min="0"
          v-model="statusId"
          placeholder="Status ID"
        />
        <button
          class="text-center bg-blue-600 rounded-lg text-white font-bold p-2"
          @click="filterPersonsStatus(statusId)"
        >
          Filtern nach Status
        </button>
      </div>
    </div>
    <div class="w-4/5 grid grid-cols-grid-auto gap-2">
      <li v-for="person in persons" class="p-4 bg-white shadow-md">
        <RouterLink :to="`/details/${person.id}`">
          <PersonCard
            :firstName="person.firstName"
            :lastName="person.lastName"
            :email="person.email"
            :id="person.id"
          />
        </RouterLink>
      </li>
    </div>
    <Pagination 
      :currentPage="currentPage"
      :getPersonsByPageApi="getPersonsByPageApi"
    />
  </section>
</template>
