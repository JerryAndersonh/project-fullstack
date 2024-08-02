const API_URL = 'http://localhost:8000';

export const fetchData = async () => {
    const response = await fetch(`${API_URL}/`);
    const data = await response.json();
    return data;
};
