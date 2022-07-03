const fetchData = async () => {
    const data = await fetch("../data.json");
    return data.json();
};
export default fetchData;