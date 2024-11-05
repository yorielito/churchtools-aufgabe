const API = "https://jobs.church.tools/api";

export const getPersons = async () => {
  const res = await fetch(`${API}/persons`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "rIOWnmodkUKuOOyZ5YdoXiPi5H4MXghTKAnwlSwnU70FyseEBAPS1AzuxK1uf2Ntr6HyZhHeyJOAe5 QEMYb5nAED0hgil1WL6EOWtSMnxv5YeIUOch3z46XT5ADc5lKsbZRqzPQOXuBHj6iTsbKSCmygrwy nHlOetOsIhfDWpe2rRX1x77dZ9TaGOIiFZbiY9MUGbPOLFnn3IdkQazSzJVcLLD1ZZKdylvWXjbyw7aiQt WkQ3U0Ks7HIF3vEjOQZ",
    },
  });
  const data = await res.json();

  return data;
};

export const getPersonsByPage = async (pageNumber) => {
  const res = await fetch(`${API}/persons?page=${pageNumber}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "rIOWnmodkUKuOOyZ5YdoXiPi5H4MXghTKAnwlSwnU70FyseEBAPS1AzuxK1uf2Ntr6HyZhHeyJOAe5 QEMYb5nAED0hgil1WL6EOWtSMnxv5YeIUOch3z46XT5ADc5lKsbZRqzPQOXuBHj6iTsbKSCmygrwy nHlOetOsIhfDWpe2rRX1x77dZ9TaGOIiFZbiY9MUGbPOLFnn3IdkQazSzJVcLLD1ZZKdylvWXjbyw7aiQt WkQ3U0Ks7HIF3vEjOQZ",
    },
  });
  const data = await res.json();

  return data;
};

export const getPersonById = async (id) => {
  const res = await fetch(`${API}/persons/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "rIOWnmodkUKuOOyZ5YdoXiPi5H4MXghTKAnwlSwnU70FyseEBAPS1AzuxK1uf2Ntr6HyZhHeyJOAe5 QEMYb5nAED0hgil1WL6EOWtSMnxv5YeIUOch3z46XT5ADc5lKsbZRqzPQOXuBHj6iTsbKSCmygrwy nHlOetOsIhfDWpe2rRX1x77dZ9TaGOIiFZbiY9MUGbPOLFnn3IdkQazSzJVcLLD1ZZKdylvWXjbyw7aiQt WkQ3U0Ks7HIF3vEjOQZ",
    },
  });
  const data = await res.json();

  return data;
};

export const createPerson = async (person) => {
  const res = await fetch(`${API}/persons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "rIOWnmodkUKuOOyZ5YdoXiPi5H4MXghTKAnwlSwnU70FyseEBAPS1AzuxK1uf2Ntr6HyZhHeyJOAe5 QEMYb5nAED0hgil1WL6EOWtSMnxv5YeIUOch3z46XT5ADc5lKsbZRqzPQOXuBHj6iTsbKSCmygrwy nHlOetOsIhfDWpe2rRX1x77dZ9TaGOIiFZbiY9MUGbPOLFnn3IdkQazSzJVcLLD1ZZKdylvWXjbyw7aiQt WkQ3U0Ks7HIF3vEjOQZ",
    },
    body: JSON.stringify(person),
  });
  const data = await res.json();

  return data;
};

export const updatePerson = async (id, person) => {
  const res = await fetch(`${API}/persons/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "rIOWnmodkUKuOOyZ5YdoXiPi5H4MXghTKAnwlSwnU70FyseEBAPS1AzuxK1uf2Ntr6HyZhHeyJOAe5 QEMYb5nAED0hgil1WL6EOWtSMnxv5YeIUOch3z46XT5ADc5lKsbZRqzPQOXuBHj6iTsbKSCmygrwy nHlOetOsIhfDWpe2rRX1x77dZ9TaGOIiFZbiY9MUGbPOLFnn3IdkQazSzJVcLLD1ZZKdylvWXjbyw7aiQt WkQ3U0Ks7HIF3vEjOQZ",
    },
    body: JSON.stringify(person),
  });
  const data = await res.json();

  return data;
};
