import Advertisements from "./components/Advertisements";
import Header from "./Header";

const App=()=>{
  const headerText = "Fast Food Menu";
  const advertisementsData = [
    { 
      image: "burger1.jpg",
      title: "Burger",
      description: "Delicious Burger with nutritious fillings",
      cost : "sek 79.55",
      
    },
    { image: "burger1.jpg",
      title: "Pizza",
      description: "Traditional Pizza with extra toppings",
      cost : "sek 150.55",
    },
    { image: "burger1.jpg",
      title: "Fries",
      description: "Crispy potato fries",
      cost : "sek 50.50",
    }
  ];
  return (
    
    <div>
    <Header text={headerText} bgColor="danger" />
    <div className="container">
       <Advertisements list={advertisementsData} />
    </div>
    
    <Header />
  </div>
  );
}

export default App;
