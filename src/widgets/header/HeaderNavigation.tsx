import HeaderNavigationElement from "@/shared/components/HeaderNavigationElement";

const HeaderNavigation = () => {
  return (
    <div className="mt-[19px] relative flex items-center">
      <div className="w-[150%] h-[1px] absolute top-[3px] left-[-25%] bg-gradient-to-r from-transparent from-10% via-[#404040] via-25% to-transparent to-140%" />
      <nav className="flex gap-[35px]">
        <HeaderNavigationElement text="Главная" selected />
        <HeaderNavigationElement text="О нас" />
        <HeaderNavigationElement text="Производство" />
        <HeaderNavigationElement text="Услуги" />
        <HeaderNavigationElement text="Проекты" />
        <HeaderNavigationElement text="Контакты" />
      </nav>
    </div>
  );
};

export default HeaderNavigation;
