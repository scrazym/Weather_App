import "./hamburger.scss";

const Hamburger = () => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    const parentElement = target.parentElement as HTMLDivElement;

    const menu = document.querySelector(".side-menu");
    const body = document.querySelector("body");
    const hamburger = document.querySelector(".hamburger");

    if (
      parentElement.classList.contains("hamburger") ||
      target.classList.contains("hamburger")
    ) {
      hamburger?.classList.toggle("hamburger_active");
      menu?.classList.toggle("side-menu_active");
      body?.classList.toggle("body_active");
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu?.classList.contains("side-menu_active")) {
        hamburger?.classList.remove("hamburger_active");
        menu?.classList.remove("side-menu_active");
        body?.classList.remove("body_active");
      }
    });
  };
  return (
    <>
      <div className="hamburger" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Hamburger;
