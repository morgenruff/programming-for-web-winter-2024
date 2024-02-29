import './styles.css';

function App() {
  const isMorgenOld = 'no';
  const paragraphStyleObj = {
    color: 'green',
    fontSize: '36px',
    margin: '20px auto',
    width: '600px'
  };

  return (
    <>
      <h1 className={isMorgenOld === 'yes' ? 'blue' : 'red'}>CSS Demo</h1>
      <p style={paragraphStyleObj}>This is some random text</p>
    </>
  )
}

export default App
