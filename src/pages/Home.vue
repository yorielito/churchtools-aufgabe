<script>
import PersonCard from "../components/PersonCard.vue";
import NeuePersonModal from "../components/NeuePersonModal.vue";
import Pagination from "../components/Pagination.vue";
import {
  getPersons,
  getPersonsByPage,
  getPersonsFilteredByStatus,
  postPerson,
} from "../api/persons";

export default {
  components: {
    PersonCard,
    NeuePersonModal,
    Pagination,
  },

  data() {
    return {
      persons: [],
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      street: "",
      zip: "",
      city: "",
      country: "",
      sexId: 0,
      statusId: 0,
      secLevel: 0,
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
      try {
        const persons = await getPersons();
        this.persons = persons;
      } catch (error) {
        console.log(error);
      }
    },

    async getPersonsByPageNumber(pageNumber) {
      pageNumber = pageNumber < 1 ? 1 : pageNumber;
      this.currentPage = pageNumber;
      try {
        const persons = await getPersonsByPage(pageNumber);
        this.persons = persons;
      } catch (error) {
        console.log(error);
      }
    },

    async filterPersonsStatus(statusId) {
      try {
        const personsFiltered = getPersonsFilteredByStatus(
          statusId,
          this.currentPage
        );
        this.persons = personsFiltered;
      } catch (error) {
        console.log(error);
      }
    },

    addNewPerson() {
      const newPerson = {
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
      };

      try {
        postPerson(newPerson);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <section class="w-full flex flex-col items-center">
    <h1 class="font-bold text-2xl mb-4">Personen von ChurchTools</h1>
    <div class="w-full flex items-center bg-gray-200 p-10 rounded-lg flex-col max-w-96 gap-4 justify-center mb-4">
      <div>
        <NeuePersonModal
          :addNewPerson="addNewPerson"
          v-model:firstName="firstName"
          v-model:lastName="lastName"
          v-model:mobile="mobile"
          v-model:email="email"
          v-model:street="street"
          v-model:zip="zip"
          v-model:city="city"
          v-model:country="country"
          v-model:sexId="sexId"
          v-model:statusId="statusId"
          v-model:secLevel="secLevel"
        />
      </div>
      <div class="flex flex-col gap-2">
        <input
          class="rounded-lg"
          type="number"
          min="0"
          v-model="statusId"
          placeholder="Status ID"
        />
        <button
          class="text-center border border-gray-400 rounded-lg text-black p-2"
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
      :getPersonsByPageApi="getPersonsByPageNumber"
    />
  </section>
</template>
