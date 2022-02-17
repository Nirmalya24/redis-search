import "bootstrap/dist/css/bootstrap.css";
import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

export default function Home() {
  return (
    <div className="p-4">
      <h1>Welcome to the Car Store!</h1>
      <h2>Create a car</h2>
      <CarForm />
      <hr />
      <SearchForm />
    </div>
  );
}
