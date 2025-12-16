import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Courses
        </Link>
        <div className="space-x-4">
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            About
          </Link>
          <Link
            href="/tasks"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Tasks
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
