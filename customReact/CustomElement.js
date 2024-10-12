
function customRenderLong(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)

    container.appendChild(domElement)
}
function customRenderUsingLoop(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props:{
        href : 'https://www.google.com',
        target: '_blank'
    }, 
    children: 'CLick to visit google'

}

const mainContainer = document.getElementById('root')

customRenderUsingLoop(reactElement, mainContainer)








