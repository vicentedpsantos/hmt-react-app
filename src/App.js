import TemplateList from './components/TemplateList';
import fetchTemplates from './services/fetchTemplates';

function App() {
  let templates = fetchTemplates();

  return (
    <TemplateList templates={templates} />
  );
}

export default App;
