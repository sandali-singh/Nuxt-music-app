<template>
  <div>
    <footer
      class="footer bg-slate-800 justify-center items-center flex flex-col p-4 text-xl/7"
    >
      <div class="footer__logo-box mb-8">
        <picture class="footer__logo">
          <img src="@/assets/img/logo3.png" class="w-[150px] py-10" />
        </picture>
      </div>
      <div class="row justify-between content-start flex w-[1000px] mb-20">
        <div class="col-1-of-2 w-[400px]">
          <div class="footer__navigation border-t-2 border-slate-500">
            <ul
              class="footer__list flex flex-row justify-between items-center pt-4"
            >
              <li class="footer__item">
                <a href="#" class="footer__link cursor-pointer">Company</a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link cursor-pointer">Contact us</a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link cursor-pointer">About</a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link cursor-pointer"
                  >Privacy policy</a
                >
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link cursor-pointer">Blogs</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2 flex justify-end">
          <p class="footer__copyright border-t-2 border-slate-500 pt-4">
            Built by
            <a href="#" class="footer__link cursor-pointer">Sandali Singh</a>
            for her learning purpose.
            <br />
            <a href="#" class="footer__link cursor-pointer"
              >Nuxt3 & Tailwind Css</a
            >
            <br />
            Copyright &copy; 2024.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
