import { Link } from "@remix-run/react";
import { cn } from "~/libs/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/examples/dashboard"
        className="hover:text-primary text-sm font-medium transition-colors"
      >
        Overview
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Customers
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Products
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Settings
      </Link>
    </nav>
  );
}
