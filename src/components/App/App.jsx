import {
  Container,
  Header,
  SearchForm,
  Section,
} from 'components';
import TodosList from 'components/TodosList/TodosList';

export const App = ()=>{

    return (
      <>
        <Header />
        <Section>
          <Container>
            <SearchForm  />
              <TodosList />
          </Container>
        </Section>
      </>
    );
  }
