import React from "react";

export default function Footer() {
  return (
    <footer className="container text-center py-4 dark:text-gray-300 text-gray-700">
      &copy; {new Date().getFullYear()} M. Ahmed Sajid. All rights reserved.
    </footer>
  );
}
