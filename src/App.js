import Tea from './Tea'

function App() {
  return (
  <>
  <h1>tea and react | </h1>
  <Tea/>
  </>
  );
}

export default App;

//the thing that's to b learnt is that:- 
//1) when we make any components ie. Tea function that we are exporting here or any other component then we should always name it by capitalizing it and the names of the files should also be capitalized file name capitalizing is just a good practice it won't give error anyway but still it's good to use capitalized names for the file too
//2) some libraries force to have the file name having components with .jsx  especially if any html is getting returned in it 
//3) in createreact apps:- if any html is getting returned then we keep the file name as .jsx compulsorily otherwise we can use .js as well 
//in vite:- mostly by default the file name is .jsx 
//in both we should name the component names by capitalizing and also it's a good practice to keep the file name that contains the component also by capitalizing 
//