import Cuadrado from "./Cuadrado/index";
const App = () => {
  return (
    <div>
      <Cuadrado backgroundColor={"red"} height={"100px"} width={"100px"}>
        hola mundo
      </Cuadrado>
      <Cuadrado backgroundColor={"white"} height={"300px"} width={"300px"} />
      <Cuadrado backgroundColor={"green"} height={"100px"} width={"100px"} />
    </div>
  );
};
export default App;