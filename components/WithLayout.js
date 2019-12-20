import Header from './Header'
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };
  
  const WithLayout = Page => {
    return () =>(
    <div style={layoutStyle}>
      <Header />
      <Page/>
    </div>
  );
  }
  export default WithLayout;