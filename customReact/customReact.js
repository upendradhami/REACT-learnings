
const CustomReactRender = function(element,container){
   const elem = document.createElement(element.type);
   elem.innerHTML = element.children;
   elem.setAttribute('href',element.props.href);
   elem.setAttribute('target',element.props.target);

   container.append(elem);
}


const reactContainer = document.querySelector('#root');

/// this is how an react library tranform the JSX into the readable form by the ReactRender   
///  Babel or vite is used to do so . 
/// you can visit the opensource of the react github repo to know how all these things works behind the scene.


const reactElements = {
  type:'a',
  props:{
    href:"https://www.youtube.com",
    target:"_blank",
  },
  children: "Click here to visit google "
}


CustomReactRender(reactElements,reactContainer);