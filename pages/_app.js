import '../styles/globals.css';


const MyApp = props => {

  const { Component, pageProps } = props;

  return (
      <Component {...pageProps}/>
  )
}

export default MyApp;
