import "../landing.css";

const Landing = () => {
  return (
    <div className="h-screen w-screen flex-col items-center bg-blue-50 overflow-x-hidden">
      <nav className="w-screen h-16 absolute top-5 flex justify-center z-50">
        <div className="bg-blue-50 w-[70%] rounded-2xl flex justify-between items-center px-4">
          <div>
            <p>HEUBOWL</p>
          </div>
          <div className="no-underline flex gap-10">
            <a className="text-stone-600 hover:text-green-400" href="">
              Rice-Bowls
            </a>
            <a className="text-stone-600 hover:text-green-400" href="">
              Noodle-Bowls
            </a>
            <a className="text-stone-600 hover:text-green-400" href="">
              Salad-Bowls
            </a>
            <a className="text-stone-600 hover:text-green-400" href="">
              Beverages
            </a>
            <a className="text-stone-600 hover:text-green-400" href="">
              Kids
            </a>
          </div>
        </div>
      </nav>
      <div className="h-full flex flex-row justify-center items-center font-bold w-full px-8">
        <div className="flex justify-center items-center w-full gap-30 relative ">
          <h1 className=" text-7xl md:text-9xl font-bold">
            <span
              style={{ fontFamily: "'Water Brush', cursive", color: "#6A5ACD" }}
            >
              Rice
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "'Fjalla One', sans-serif",
                color: "black",
                fontSize: "2rem",
                marginLeft: "10rem",
                marginTop: "-1rem",
              }}
            >
              Bowl<br></br>
              <span
                style={{
                  display: "block",
                  color: "black",
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: "300",
                  marginLeft: "-10rem",
                  marginTop: "1rem",
                  position: "relative",
                }}
              >
                A rice bowl is a wholesome meal served in a single bowl,
                combining fluffy <br></br>rice with a variety of toppings and
                flavors. They are loved around the world for <br></br>being
                nutritious, filling, and easy to customize. From light
                vegetarian options to <br></br>protein-packed bowls, there’s a
                combination for everyone’s taste.
              </span>
            </span>
          </h1>
          <span
            style={{
              display: "block",
              color: "white",
              fontFamily: "'Fjalla One', sans-serif",
              fontSize: "0.8rem",
              fontWeight: "300",
              marginLeft: "-28rem",
              marginTop: "20rem",
              position: "absolute",
              padding: "2rem",
            }}
          >
            <button className="bg-red-900 h-8 w-30 rounded-2xl">
              View Our Menu
            </button>
          </span>
          <div className="relative w-50 h-80 flex justify-center items-center">
            <div
              className="h-full w-full rounded-r-full absolute left-20"
              style={{ backgroundColor: "#6A5ACD" }}
            >
              <img
                className="absolute -top-13 left-2 h-100"
                src="chops.png"
                style={{
                  transform: "rotate(310deg)",
                  transition: "0.3s ease",
                }}
              ></img>
              <img
                className="absolute -top-5 left-6 h-80"
                src="chops.png"
                style={{
                  transform: "rotate(330deg)",
                  transition: "0.3s ease",
                }}
              ></img>
              <img
                className="h-10 w-10 absolute left-48 bottom-40"
                src="brocco.png"
                style={{ transform: "rotate(10deg)", transition: "0.3s ease" }}
              ></img>
              <img
                className="h-8 w-8 absolute left-50 bottom-48"
                src="chilly flake.png"
              ></img>
              <img
                className="h-6 w-6 absolute right-50 top-63"
                src="brocco.png"
                style={{ transform: "rotate(150deg)", transition: "0.3s ease" }}
              ></img>
              <img
                className="h-10 w-10 left-90 absolute top-60"
                src="lettu.png"
                style={{ transform: "rotate(45deg)", transition: "0.3s ease" }}
              ></img>
              <img
                className="h-10 w-10 right-260 absolute bottom-80"
                src="narakam.png"
                style={{ transform: "rotate(45deg)", transition: "0.3s ease" }}
              ></img>
              <img
                className="h-25 w-25 right-260 absolute top-80"
                src="tulu.png"
                style={{ transform: "rotate(38deg)", transition: "0.3s ease" }}
              ></img>
            </div>
            <img className="w-full absolute" src="rice_bowl.png"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-gray-900 flex-col relative">
        <h1
          className="mb-15"
          style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "1.3rem" }}
        >
          WHAT SHOULD I EAT IF I AM?
        </h1>
        <div
          className="w-50 h-10 mt-23 absolute rounded-3xl flex justify-evenly items-center text-white flex-row"
          style={{ background: "#6A5ACD" }}
        >
          <img src="fire.png" className="w-5 h-5"></img>
          <h2
            style={{
              fontFamily: "'Fjalla One', sans-serif",
              fontSize: "0.9rem",
            }}
          >
            Counting Calories
          </h2>
          <img
            src="down-arrow.png"
            className="w-5 h-5 text-white cursor-pointer transition-transform duration-300 transform hover:scale-125"
          ></img>
        </div>
      </div>
      <div className="h-screen w-screen bg-white flex flex-row justify-center items-center gap-20">
        <div className="relative w-50 h-80 flex justify-center items-center">
          <div className="h-full w-full bg-[#F8E68A] rounded-r-full relative flex items-center ">
            <img
              className="w-60 h-50 absolute right-20"
              src="hien-bowl.png"
            ></img>
          </div>
        </div>
        <h1
          className="flex flex-col "
          style={{
            fontFamily: "'Fjalla One', sans-serif",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginTop: "-2rem",
          }}
        >
          ABOUT
          <h2
            style={{
              fontFamily: "'Water Brush', cursive",
              color: "#6A5ACD",
              fontSize: "4rem",
            }}
          >
            hien bowl
          </h2>
          <p
            className="text-sm"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "lighter",
            }}
          >
            This vibrant and wholesome bowl is a perfect blend of colors,
            flavors, and nutrition.<br></br> It features creamy avocado slices,
            juicy cherry tomatoes, crisp greens, and<br></br> a mix of crunchy
            nuts and seeds, paired with soft-boiled and fried eggs for protein.
            <br></br>Sprinkled with black sesame seeds, it’s not only visually
            appealing but also a balanced<br></br> meal that offers freshness,
            texture, and energy in every bite.
          </p>
          <button
            className="bg-red-900 h-8 w-30 rounded-2xl mt-7"
            style={{
              fontSize: "0.8rem",
              color: "white",
              fontWeight: "lighter",
            }}
          >
            View Our Menu
          </button>
        </h1>
      </div>
      <div
        className="h-screen w-screen flex flex-col justify-top items-center p-20 text-4xl"
        style={{
          background: "#6A5ACD",
          color: "white",
          fontFamily: "'Fjalla One', sans-serif",
        }}
      >
        <h1>OUR MENU</h1>
        <p
          className="text-xs text-center mt-5"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "inherit" }}
        >
          At HEUBOWL, every bowl is crafted with love and packed with nutrition.
          Our menu offers a colorful variety of fresh greens,<br></br> seasonal
          veggies, hearty proteins, and crunchy toppings, all paired with
          delicious dressings made from the finest ingredients.<br></br> Whether
          you’re craving something light and refreshing or filling and
          energizing, our salads are designed to satisfy your <br></br>taste
          buds while keeping your health in mind.
        </p>
        <div className="h-full w-full flex flex-col justify-evenly items-center ">
          <div className="h-full w-full mt-20 flex flex-row justify-evenly items-center">
            <div className="relative w-55 h-80 flex justify-center items-center">
              <div
                className="h-60 w-40 rounded-r-full relative flex items-center"
                style={{ backgroundColor: "#D6E68A" }}
              >
                <img
                  className="w-70 h-[90%] absolute right-15 object-contain"
                  src="noodle-bowl.png"
                ></img>
              </div>
            </div>
            <div className="relative w-55 h-80 flex justify-center items-center">
              <div
                className="h-60 w-40 rounded-r-full relative flex items-center"
                style={{ backgroundColor: "#C47A8A" }}
              >
                <img
                  className="w-70 h-[90%] absolute right-15 object-contain"
                  src="smthy-bowl.png"
                ></img>
              </div>
            </div>
            <div className="relative w-55 h-80 flex justify-center items-center">
              <div
                className="h-60 w-40 rounded-r-full relative flex items-center"
                style={{ backgroundColor: "#8C88D9" }}
              >
                <img
                  className="w-70 h-[90%] absolute right-15 object-contain"
                  src="salad-bowl.png"
                ></img>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center h-full w-full gap-30">
            <h2>24$</h2>
            <h2>34$</h2>
            <h2>45$</h2>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen flex justify-evenly items-center bg-blue-50">
        <div className="h-screen w-screen flex justify-start items-center gap-30">
          <img src="soup-bowl.png" className="h-90 w-70 " />
          <div className="w-110 h-74 bg-blue-50 rounded-[40%_20%_40%_80%/60%_60%_70%_60%] shadow-[#6A5ACD] shadow-2xl flex justify-center items-center">
            <p style={{ fontSize: "0.6rem" }}>
              "A steaming bowl of creamy tomato soup served with a swirl of
              fresh cream, <br></br>topped with vibrant basil leaves and a
              sprinkle of crushed red chili flakes for a gentle<br></br> kick of
              heat. The velvety texture and rich aroma make it irresistibly
              inviting, while the <br />
              colorful garnish adds a touch of elegance. Perfect as a comforting
              starter or a wholesome <br /> meal on its own, this soup pairs
              wonderfully with a slice of warm garlic bread or a crisp <br />{" "}
              garden salad. Its balance of tangy tomato flavor, subtle
              creaminess, and aromatic <br /> herbs makes it a timeless favorite
              for cozy evenings or special gatherings.""
            </p>
          </div>
          <div className="h-fit w-fit ml-20 mb-30">
            <h1
              className="text-4xl leading-relaxed"
              style={{ fontWeight: "lighter" }}
            >
              Our Happy <br />
              Customers
            </h1>
            <p className="mt-10">
              Spreading smiles, one delicious bite at a time.
            </p>
            <img className="h-5 w-6 mt-10 ml-20" src="right-arrow.png"></img>
          </div>
        </div>
      </div>
      <div className="h-80 w-screen flex justify-evenly bg-[#3A3ABF] relative">
        <img
          className="h-20 w-20 left-18 top-18 absolute brightness-20"
          src="chilly-one.png"
          style={{ transform: "rotate(180deg)", transition: "0.3s ease" }}
        ></img>
        <img
          className="h-20 w-20 left-3 bottom-23 top-23 absolute brightness-20"
          src="brocco.png"
          style={{ transform: "rotate(10deg)", transition: "0.3s ease" }}
        ></img>
        <img
          className="h-16 w-18 left-3  top-8 absolute brightness-15"
          src="chilly-cut.png"
          style={{ transform: "rotate(10deg)", transition: "0.3s ease" }}
        ></img>
        <img
          className="h-26 w-26 left-0  top-38 absolute brightness-15"
          src="curry-leaf.png"
          style={{ transform: "rotate(15deg)", transition: "0.3s ease" }}
        ></img>

        <div className="h-40 w-100 flex flex-col justify-evenly items-center text-white mt-20 ml-20">
          <h1 className="text-4xl mb-17">
            Ready to get started?<br></br>
            <p className="text-xs mt-5">
              Get a guided demo Loreum ipsum dolor sit amet
            </p>
          </h1>
        </div>
        <input
          type="text"
          placeholder="Email address"
          className="border border-gray-300 rounded-sm px-3 py-2 h-14 w-120 bg-white mt-23"
        />
        <img src="salad-bowl.png" className="h-50 w-50 mt-13 ml-30"></img>
      </div>
      <div className="h-30 w-50 relative">
        <img
          className="h-30 w-50 absolute bottom-20 right-10"
          src="chilly-full.png"
        ></img>
      </div>
      <div className="h-40 w-screen flex flex-row justify-evenly items-center mb-30">
        <p>infospring@gmail.com</p>
        <div className="flex flex-col justify-evenly items-center h-10 w-10 mb-30">
          <p>
            About us<br></br>Contact us<br></br>FAQ<br></br>Privacy policy
          </p>
        </div>
        <div className="flex flex-col justify-evenly items-center h-10 w-10">
          <p>
            Loreum<br></br>ipsum<br></br>sit<br></br>amet
          </p>
        </div>
        <div className="flex flex-col justify-evenly items-center h-10 w-10">
          <p>
            Loreum<br></br>ipsum<br></br>sit<br></br>amet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

//  <motion.img
//             initial={{ rotate: 0 }}
//             animate={{ rotate: 180 }}
//             transition={{ duration: 138, type: "spring" }}
//             className="h-30 w-30 top-130 left-30 absolute"
//             src="tulu.png"
//             //style={{ transform: "rotate(30deg)", transition: "0.3s ease" }}
//           ></motion.img>
