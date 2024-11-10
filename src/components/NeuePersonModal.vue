<template>
  <button
    data-modal-target="authentication-modal"
    data-modal-toggle="authentication-modal"
    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    Neue Person hinzufügen
  </button>

  <!-- Main modal -->
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Neue Person hinzufügen
          </h3>
          <button
            type="button"
            class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <form class="flex flex-col items-center" @submit.prevent="addNewPerson">
            <div class="flex flex-col gap-2 mb-4 w-full">
              <input
                :value="firstName"
                @input="$emit('update:firstName', $event.target.value)"
                type="text"
                placeholder="Vorname"
              />
              <input
                :value="lastName"
                @input="$emit('update:lastName', $event.target.value)"
                type="text"
                placeholder="Nachname"
              />
              <input
                :value="email"
                @input="$emit('update:email', $event.target.value)"
                type="email"
                placeholder="E-Mail"
              />
              <input
                :value="mobile"
                @input="$emit('update:mobile', $event.target.value)"
                type="tel"
                placeholder="Telephon"
              />
              <input
                :value="street"
                @input="$emit('update:street', $event.target.value)"
                type="text"
                placeholder="Straße"
              />
              <input
                :value="zip"
                @input="$emit('update:zip', $event.target.value)"
                type="text"
                placeholder="PLZ"
              />
              <input
                :value="city"
                @input="$emit('update:city', $event.target.value)"
                type="text"
                placeholder="Stadt"
              />
              <input
                :value="country"
                @input="$emit('update:country', $event.target.value)"
                type="text"
                placeholder="Land"
              />
              <input
                :value="sexId"
                @input="$emit('update:sexId', $event.target.value)"
                type="number"
                placeholder="Geschlecht"
              />
              <input
                :value="statusId"
                @input="$emit('update:statusId', $event.target.value)"
                type="number"
                placeholder="Status"
              />
              <input
                :value="secLevel"
                @input="$emit('update:secLevel', $event.target.value)"
                type="number"
                placeholder="Station"
              />
            </div>

            <div class="flex flex-col gap-2 max-w-96 w-4/5">
              <button
                type="submit"
                @click="addNewPerson"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Speichern
              </button>
              <button
                type="button"
                data-modal-hide="authentication-modal"
                class="w-full text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Abbrechen
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { initModals } from "flowbite";
import { onMounted } from "vue";

onMounted(() => {
  initModals();
});

defineProps({
  addNewPerson: Function,
  person: Object,
  firstName: String,
  lastName: String,
  mobile: String,
  email: String,
  street: String,
  zip: String,
  city: String,
  country: String,
  sexId: Number,
  statusId: Number,
  secLevel: Number,


  emits: [
    "update:firstName",
    "update:lastName",
    "update:mobil",
    "update:email",
    "update:street",
    "update:zip",
    "update:city",
    "update:country",
    "update:sexId",
    "update:statusId",
    "update:secLevel",
  ],
});
</script>
