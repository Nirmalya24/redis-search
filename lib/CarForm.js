export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries()); // convert formData to object

    console.log(FormData);

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="make" className="form-label">
        Make
      </label>
      <input type="text" name="make" className="form-control" />

      <label htmlFor="make" className="form-label">
        Model
      </label>
      <input type="text" name="model" className="form-control" />

      <label htmlFor="make" className="form-label">
        Image
      </label>
      <input type="text" name="image" className="form-control" />

      <label htmlFor="make" className="form-label">
        Description
      </label>
      <textarea
        name="description"
        type="text"
        className="form-control"
      ></textarea>

      <button type="submit" className="btn btn-primary mt-2">
        Create Car
      </button>
    </form>
  );
}
