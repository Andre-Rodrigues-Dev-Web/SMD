//Componentes
import{
  Content,
  Template
} from './components/template/style'
import Sidebar from './components/menu';
//Views



const App = () => {
  return (
    <Template>
      <Sidebar />
      <Content>
        <Topo/>
        <Footer/>
      </Content>
    </Template>
  );
}

export default App;
