import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="font-display text-4xl">Page not found</h1>
      <p className="mt-4 text-sm text-[#6f6f6f]">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="inline-block mt-8">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
