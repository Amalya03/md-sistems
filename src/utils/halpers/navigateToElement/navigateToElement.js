export const navigateToElement = (navigate, id) => {
    navigate("/");
    setTimeout(() => {
      let item = document.getElementById(id);
      if (item) {
        item?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
    return () => clearTimeout();
  };
  