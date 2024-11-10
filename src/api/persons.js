const { churchtoolsClient, activateLogging } = window.churchtoolsClient;

activateLogging();
churchtoolsClient.setBaseUrl('https://jobs.church.tools');

export const getPersons = async () => {
    const res = await churchtoolsClient.get("/persons");

    return res;
};

export const getPersonById = async (id) => {
    const res = await churchtoolsClient.get(`/persons/${id}`);

    return res;
}

export const getPersonsByPage = async (pageNumber) => {
    const res = await churchtoolsClient.get(`/persons?page=${pageNumber}`);

    return res;
}

export const postPerson = async (person) => {
    const res = await churchtoolsClient.post("/persons", person);

    return res;
}

export const putPerson = async (id, person) => {
    const res = await churchtoolsClient.put(`/persons/${id}`, person);

    return res;
}

export const getPersonsFilteredByStatus = async (status, pageNumber) => {
    const res = await churchtoolsClient.get(`/persons?status=${status}?page=${pageNumber}`);

    return res;
}

