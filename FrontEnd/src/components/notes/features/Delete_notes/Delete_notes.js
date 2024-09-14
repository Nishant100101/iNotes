const handleDelete = (arr, id) => {
  async function handledelete(id) {
    try {
      const response = await fetch(`http://127.0.0.1:5000/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": isAuth,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setstate(state.filter((note) => note._id !== id));
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
};
export default handleDelete;
