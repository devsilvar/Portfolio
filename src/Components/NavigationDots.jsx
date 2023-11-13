const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Testimonials", "Contact"].map(
        (item, index) => {
          return (
            <a
              href={`#${item}`}
              key={item + index}
              style={active === item ? { backgroundColor: "#313BAC" } : {}}
              className="app__navigation-dot"
            />
          );
        }
      )}
    </div>
  );
};

export default NavigationDots;
