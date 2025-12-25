import { Link } from "react-router-dom";
import { Button } from "./../components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Button className="bg-sky-500" asChild>
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}
