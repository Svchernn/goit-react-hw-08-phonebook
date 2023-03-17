import { FcReadingEbook } from 'react-icons/fc';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(191, 222, 184)',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  span: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook welcome page{' '}
        <span style={styles.span} role="img">
          <FcReadingEbook />
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
