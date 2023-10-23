export const Footer = () => {
  return (
    <footer className="bg-[#282c34]">
      <div className="flex flex-col py-4 items-center justify-center gap-2">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="/about"
              className="text-lg font-semibold mr-4 underline hover:text-gray-200 hover:cursor-pointer md:mr-6 "
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-lg font-semibold underline hover:text-gray-200 hover:cursor-pointer"
            >
              Inicio
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Axel Suarez
        </span>
      </div>
    </footer>
  );
};
